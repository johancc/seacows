"use client";

import { useActionState, useState } from "react";
import { Send, Upload } from "lucide-react";

import {
  adminLogin,
  moderateItem,
  submitReply,
  submitSighting,
  submitThread,
  type FormState,
} from "@/lib/actions";
import { forumCategories } from "@/lib/data";

const initialFormState: FormState = { ok: false, message: "" };

export function ReportSightingForm() {
  const [state, formAction, pending] = useActionState(submitSighting, initialFormState);
  const [hiddenErrorMessage, setHiddenErrorMessage] = useState("");

  const visibleState =
    hiddenErrorMessage && !state.ok && hiddenErrorMessage === state.message
      ? initialFormState
      : state;

  return (
    <form
      action={formAction}
      className="form-panel"
      onChange={() => {
        if (state.message && !state.ok) {
          setHiddenErrorMessage(state.message);
        }
      }}
      onSubmit={() => setHiddenErrorMessage("")}
    >
      <FormStatus state={visibleState} />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="Reporter handle" name="reporterHandle" required />
        <TextField label="Optional email, private" name="reporterEmail" type="email" />
        <TextField label="Sighting title" name="title" required />
        <TextField label="Location text" name="locationText" required />
        <SelectField
          label="Body of water type"
          name="waterType"
          options={[
            "Lake",
            "Pond",
            "River",
            "Creek",
            "Canal",
            "Reservoir",
            "Coastal / ocean",
            "Flooded field",
            "Unknown",
          ]}
          required
        />
        <TextField label="Observation date" name="observedAt" type="date" />
        <TextField label="Cow count" min="1" name="cowCount" required type="number" />
        <SelectField
          label="Water involvement"
          name="waterInvolvement"
          options={[
            "Near water",
            "Hooves in water",
            "Standing in water",
            "Partially submerged",
            "Fully swimming",
            "Unclear",
          ]}
          required
        />
        <SelectField
          label="Confidence level"
          name="confidenceLevel"
          options={[
            "Possible",
            "Probable",
            "Confirmed by witness",
            "Confirmed with evidence",
          ]}
          required
        />
        <SelectField
          label="Cow behavior"
          name="cowBehavior"
          options={[
            "Calm",
            "Distressed",
            "Grazing",
            "Moving through water",
            "Stationary",
            "Unknown",
          ]}
          required
        />
        <SelectField
          label="Was an energy drink present during field observation?"
          name="energyDrinkPresent"
          options={["Yes", "No", "Unknown", "Prefer not to say"]}
        />
        <label className="form-label md:col-span-2">
          <span>Description</span>
          <textarea
            className="form-field min-h-40"
            maxLength={4000}
            name="description"
            required
            placeholder="What did you see? Include the waterline, distance, behavior, duration, return path, and what you could not tell."
          />
        </label>
        <label className="form-label md:col-span-2">
          <span className="flex items-center gap-2">
            <Upload aria-hidden="true" size={16} />
            Evidence metadata upload
          </span>
          <input
            accept="image/*"
            className="form-field file:mr-3 file:border-0 file:bg-[var(--navy)] file:px-3 file:py-2 file:text-white"
            multiple
            name="evidence"
            type="file"
          />
          <small className="text-[var(--muted)]">
            MVP storage records file names, types, and sizes only. Images should
            stay under 6 MB each once object storage is connected.
          </small>
        </label>
      </div>
      <input aria-hidden="true" className="hidden" name="website" tabIndex={-1} />
      <label className="flex items-start gap-2 text-sm text-[var(--charcoal)]">
        <input
          className="mt-1 accent-[var(--burgundy)]"
          name="reviewConsent"
          required
          type="checkbox"
          value="yes"
        />
        <span>I understand that submissions are reviewed before appearing publicly.</span>
      </label>
      <button className="button-primary" disabled={pending} type="submit">
        <Send aria-hidden="true" size={16} />
        {pending ? "Submitting for Review" : "Submit Field Report"}
      </button>
    </form>
  );
}

export function ThreadForm({ categorySlug }: { categorySlug?: string }) {
  const [state, formAction, pending] = useActionState(submitThread, initialFormState);
  const [hiddenErrorMessage, setHiddenErrorMessage] = useState("");

  const visibleState =
    hiddenErrorMessage && !state.ok && hiddenErrorMessage === state.message
      ? initialFormState
      : state;

  return (
    <form
      action={formAction}
      className="form-panel"
      onChange={() => {
        if (state.message && !state.ok) {
          setHiddenErrorMessage(state.message);
        }
      }}
      onSubmit={() => setHiddenErrorMessage("")}
    >
      <FormStatus state={visibleState} />
      <div className="grid gap-4 md:grid-cols-2">
        <SelectField
          label="Forum category"
          name="category"
          options={forumCategories.map((category) => category.name)}
          required
          value={
            categorySlug
              ? forumCategories.find((category) => category.slug === categorySlug)?.name
              : undefined
          }
        />
        <TextField label="Handle" name="handle" required />
        <TextField label="Optional email, private" name="email" type="email" />
        <TextField label="Thread title" maxLength={140} name="title" required />
        <label className="form-label md:col-span-2">
          <span>Body</span>
          <textarea
            className="form-field min-h-36"
            maxLength={3500}
            name="body"
            placeholder="Say what happened, what you know, what you don't know, and where people should start poking holes."
            required
          />
        </label>
      </div>
      <input aria-hidden="true" className="hidden" name="homepage" tabIndex={-1} />
      <button className="button-primary" disabled={pending} type="submit">
        <Send aria-hidden="true" size={16} />
        {pending ? "Posting" : "Post New Topic"}
      </button>
    </form>
  );
}

export function ReplyForm({ threadSlug }: { threadSlug: string }) {
  const [state, formAction, pending] = useActionState(submitReply, initialFormState);
  const [hiddenErrorMessage, setHiddenErrorMessage] = useState("");

  const visibleState =
    hiddenErrorMessage && !state.ok && hiddenErrorMessage === state.message
      ? initialFormState
      : state;

  return (
    <form
      action={formAction}
      className="form-panel"
      onChange={() => {
        if (state.message && !state.ok) {
          setHiddenErrorMessage(state.message);
        }
      }}
      onSubmit={() => setHiddenErrorMessage("")}
    >
      <input name="threadSlug" type="hidden" value={threadSlug} />
      <FormStatus state={visibleState} />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="Handle" name="handle" required />
        <TextField label="Optional email, private" name="email" type="email" />
        <label className="form-label md:col-span-2">
          <span>Reply body</span>
          <textarea
            className="form-field min-h-32"
            maxLength={2500}
            name="body"
            placeholder="Evidence, useful objection, correction, or a normal reply. One-line dunking still gets tossed."
            required
          />
        </label>
      </div>
      <input aria-hidden="true" className="hidden" name="company" tabIndex={-1} />
      <button className="button-primary" disabled={pending} type="submit">
        <Send aria-hidden="true" size={16} />
        {pending ? "Posting" : "Post Reply"}
      </button>
    </form>
  );
}

export function AdminLoginForm({ error }: { error?: boolean }) {
  return (
    <form action={adminLogin} className="form-panel max-w-md">
      {error ? (
        <div className="rounded-md border border-[#c98e8e] bg-[#f2dddd] px-3 py-2 text-sm text-[#8f1f1f]">
          Password not recognized.
        </div>
      ) : null}
      <TextField label="Admin password" name="password" required type="password" />
      <button className="button-primary" type="submit">
        Enter Moderation Panel
      </button>
    </form>
  );
}

export function AdminModerationForm({
  itemId,
  itemType,
  itemTitle,
}: {
  itemId: string;
  itemType: "sighting" | "thread" | "reply";
  itemTitle: string;
}) {
  const [state, formAction, pending] = useActionState(moderateItem, initialFormState);
  const actionId = `moderation-${itemType}-${itemId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;

  return (
    <form action={formAction} className="space-y-2">
      <input name="itemId" type="hidden" value={itemId} />
      <input name="itemType" type="hidden" value={itemType} />
      <input name="itemTitle" type="hidden" value={itemTitle} />
      <label className="sr-only" htmlFor={actionId}>
        Moderation action for {itemTitle}
      </label>
      <select className="form-field" id={actionId} name="moderationAction" required>
        <option value="">Select action</option>
        <option value="approve">Approve</option>
        <option value="reject">Reject</option>
        <option value="mark_under_review">Mark under review</option>
        {itemType === "thread" ? (
          <>
            <option value="pin">Pin thread</option>
            <option value="lock">Lock thread</option>
          </>
        ) : null}
        <option value="archive">Archive</option>
      </select>
      <button className="button-secondary w-full justify-center" disabled={pending} type="submit">
        Apply
      </button>
      <FormStatus state={state} compact />
    </form>
  );
}

function FormStatus({ state, compact = false }: { state: FormState; compact?: boolean }) {
  if (!state.message) {
    return null;
  }

  return (
    <div
      className={`rounded-md border px-3 py-2 text-sm ${
        state.ok
          ? "border-[#9bb69f] bg-[#e7efe8] text-[var(--green)]"
          : "border-[#8da7c4] bg-[#e8edf5] text-[var(--navy)]"
      } ${compact ? "text-xs" : ""}`}
      role="status"
    >
      <p>{state.message}</p>
      {state.issues?.length ? (
        <ul className="mt-2 list-disc pl-5">
          {state.issues.map((issue) => (
            <li key={issue}>{issue}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required,
  maxLength,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  min?: string;
}) {
  return (
    <label className="form-label">
      <span>{label}</span>
      <input
        className="form-field"
        maxLength={maxLength}
        min={min}
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  value,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  value?: string;
}) {
  return (
    <label className="form-label">
      <span>{label}</span>
      <select className="form-field" defaultValue={value ?? ""} name={name} required={required}>
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
