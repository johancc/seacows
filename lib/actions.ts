"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MAX_IMAGE_SIZE = 6 * 1024 * 1024;

export type FormState = {
  ok: boolean;
  message: string;
  issues?: string[];
};

export async function submitSighting(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const issues = requiredFields(formData, [
    "reporterHandle",
    "title",
    "locationText",
    "waterType",
    "cowCount",
    "waterInvolvement",
    "confidenceLevel",
    "cowBehavior",
    "description",
    "reviewConsent",
  ]);

  const honeypot = stringField(formData, "website");
  if (honeypot) {
    return {
      ok: true,
      message:
        "Report received. Your sighting has been assigned preliminary review status. A moderator will evaluate the evidence before registry publication.",
    };
  }

  const description = stringField(formData, "description");
  if (description.length < 60) {
    issues.push("Description should include at least 60 characters of field detail.");
  }
  if (description.length > 4000) {
    issues.push("Description must be 4,000 characters or fewer.");
  }

  const files = formData.getAll("evidence").filter(isFileWithName);
  const uploadWarnings: string[] = [];
  for (const file of files) {
    if (!file.type.startsWith("image/")) {
      uploadWarnings.push(`${file.name} was not an image and would be skipped.`);
    }
    if (file.size > MAX_IMAGE_SIZE) {
      uploadWarnings.push(`${file.name} exceeds the 6 MB evidence limit.`);
    }
  }

  if (issues.length) {
    return {
      ok: false,
      message: "The report needs more information before it can be submitted.",
      issues,
    };
  }

  const rustResponse = await postToRust("/api/sightings", {
    reporterHandle: stringField(formData, "reporterHandle"),
    reporterEmail: optionalStringField(formData, "reporterEmail"),
    title: stringField(formData, "title"),
    locationText: stringField(formData, "locationText"),
    waterType: stringField(formData, "waterType"),
    observedAt: optionalStringField(formData, "observedAt"),
    cowCount: Number(stringField(formData, "cowCount")),
    waterInvolvement: stringField(formData, "waterInvolvement"),
    confidenceLevel: stringField(formData, "confidenceLevel"),
    cowBehavior: stringField(formData, "cowBehavior"),
    energyDrinkPresent: optionalStringField(formData, "energyDrinkPresent"),
    description,
    evidence: files.map((file) => ({
      name: file.name,
      contentType: file.type || "application/octet-stream",
      size: file.size,
    })),
    honeypot,
  });
  if (rustResponse) {
    return rustResponse;
  }

  return {
    ok: true,
    message: [
      "Report received. Your sighting has been assigned preliminary review status. A moderator will evaluate the evidence before registry publication.",
      uploadWarnings.length
        ? `Upload warning: ${uploadWarnings.join(" ")} The report itself was still accepted.`
        : "",
    ]
      .filter(Boolean)
      .join(" "),
  };
}

export async function submitThread(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const issues = requiredFields(formData, ["category", "handle", "title", "body"]);

  if (stringField(formData, "homepage")) {
    return {
      ok: true,
      message:
        "Thread submitted for moderator review. It will appear after approval.",
    };
  }

  const title = stringField(formData, "title");
  const body = stringField(formData, "body");
  if (title.length > 140) {
    issues.push("Thread title must be 140 characters or fewer.");
  }
  if (body.length < 40) {
    issues.push("Thread body should include at least 40 characters.");
  }
  if (body.length > 3500) {
    issues.push("Thread body must be 3,500 characters or fewer.");
  }

  if (issues.length) {
    return {
      ok: false,
      message: "The thread needs more information before review.",
      issues,
    };
  }

  const rustResponse = await postToRust("/api/forum/threads", {
    category: stringField(formData, "category"),
    handle: stringField(formData, "handle"),
    email: optionalStringField(formData, "email"),
    title,
    body,
    honeypot: stringField(formData, "homepage"),
  });
  if (rustResponse) {
    return rustResponse;
  }

  return {
    ok: true,
    message: "Thread submitted for moderator review. It will appear after approval.",
  };
}

export async function submitReply(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const issues = requiredFields(formData, ["handle", "body"]);

  if (stringField(formData, "company")) {
    return {
      ok: true,
      message: "Your reply has been submitted for moderator review.",
    };
  }

  const body = stringField(formData, "body");
  if (body.length < 20) {
    issues.push("Reply should include at least 20 characters.");
  }
  if (body.length > 2500) {
    issues.push("Reply must be 2,500 characters or fewer.");
  }

  if (issues.length) {
    return {
      ok: false,
      message: "The reply needs more information before review.",
      issues,
    };
  }

  const threadSlug = stringField(formData, "threadSlug");
  const rustResponse = await postToRust(
    `/api/forum/threads/${encodeURIComponent(threadSlug)}/replies`,
    {
      threadSlug,
      handle: stringField(formData, "handle"),
      email: optionalStringField(formData, "email"),
      body,
      honeypot: stringField(formData, "company"),
    },
  );
  if (rustResponse) {
    return rustResponse;
  }

  return {
    ok: true,
    message: "Your reply has been submitted for moderator review.",
  };
}

export async function adminLogin(formData: FormData) {
  const password = stringField(formData, "password");
  const expected = process.env.ADMIN_PASSWORD || "seacow-review";
  if (password !== expected) {
    redirect("/admin?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("scar_admin", "review-authorized", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
  });
  redirect("/admin");
}

export async function moderateItem(
  _previousState: FormState,
  formData: FormData,
): Promise<FormState> {
  const cookieStore = await cookies();
  if (cookieStore.get("scar_admin")?.value !== "review-authorized") {
    return {
      ok: false,
      message: "Admin session is required before applying moderation actions.",
      issues: ["Sign in to the moderation panel, then retry the action."],
    };
  }

  const itemId = stringField(formData, "itemId");
  const itemType = stringField(formData, "itemType");
  const itemTitle = stringField(formData, "itemTitle");
  const action = stringField(formData, "moderationAction");

  if (!itemId || !itemType || !itemTitle || !action) {
    return {
      ok: false,
      message: "Select a moderation action before submitting.",
      issues: ["Missing moderation target or action."],
    };
  }

  const rustResponse = await postToRust(
    `/api/admin/${encodeURIComponent(itemType)}/${encodeURIComponent(itemId)}/moderate`,
    {
      action,
    },
    {
      admin: true,
      successMessage: `${itemTitle} updated: ${moderationActionLabel(action)}.`,
    },
  );
  if (rustResponse) {
    if (rustResponse.ok) {
      revalidatePath("/admin");
    }
    return rustResponse;
  }

  return {
    ok: true,
    message: `${itemTitle} updated: ${moderationActionLabel(action)}.`,
  };
}

function requiredFields(formData: FormData, names: string[]) {
  return names.flatMap((name) => {
    const value = formData.get(name);
    if (typeof value === "string") {
      return value.trim() ? [] : [`${fieldLabel(name)} is required.`];
    }
    return value ? [] : [`${fieldLabel(name)} is required.`];
  });
}

function stringField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function optionalStringField(formData: FormData, name: string) {
  const value = stringField(formData, name);
  return value || null;
}

function fieldLabel(name: string) {
  return name
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function isFileWithName(value: FormDataEntryValue): value is File {
  return typeof value !== "string" && Boolean(value.name) && value.size > 0;
}

async function postToRust(
  path: string,
  payload: unknown,
  options: { admin?: boolean; successMessage?: string } = {},
): Promise<FormState | null> {
  const baseUrl = process.env.RUST_API_URL;
  if (!baseUrl) {
    return null;
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(options.admin
          ? { "x-admin-password": process.env.ADMIN_PASSWORD || "seacow-review" }
          : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    const body = (await response.json().catch(() => null)) as
      | { message?: string; issues?: string[] }
      | null;

    if (!response.ok) {
      return {
        ok: false,
        message: body?.message || "The Rust backend rejected the submission.",
        issues: body?.issues,
      };
    }

    return {
      ok: true,
      message:
        body?.message ||
        options.successMessage ||
        "Submission received by the Rust backend for moderator review.",
    };
  } catch {
    return {
      ok: false,
      message:
        "RUST_API_URL is set, but the Rust backend could not be reached. Start it with `npm run backend:dev` or unset RUST_API_URL for local frontend-only review.",
    };
  }
}

function moderationActionLabel(action: string) {
  return action.replace(/_/g, " ");
}
