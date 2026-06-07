"use client";

import { useActionState } from "react";
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

  return (
    <form action={formAction} className="form-panel">
      <FormStatus state={state} />
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
            placeholder="What did you see? Start with the waterline. Include distance, behavior, how long it lasted, and the parts you are not sure about."
          />
        </label>
        <label className="form-label md:col-span-2">
          <span className="flex items-center gap-2">
            <Upload aria-hidden="true" size={16} />
            Evidence upload
          </span>
          <input
            accept="image/*"
            className="form-field file:mr-3 file:border-0 file:bg-[var(--navy)] file:px-3 file:py-2 file:text-white"
            multiple
            name="evidence"
            type="file"
          />
          <small className="text-[var(--muted)]">
            Images only. Max 6 MB each. Wide, boring photos are often better
            than dramatic close crops.
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

  return (
    <form action={formAction} className="form-panel">
      <FormStatus state={state} />
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
            placeholder="Make the claim, give the context, and say what you want the board to help sort out."
            required
          />
        </label>
      </div>
      <input aria-hidden="true" className="hidden" name="homepage" tabIndex={-1} />
      <button className="button-primary" disabled={pending} type="submit">
        <Send aria-hidden="true" size={16} />
        {pending ? "Submitting" : "Start Thread"}
      </button>
    </form>
  );
}

export function ReplyForm({ threadSlug }: { threadSlug: string }) {
  const [state, formAction, pending] = useActionState(submitReply, initialFormState);

  return (
    <form action={formAction} className="form-panel">
      <input name="threadSlug" type="hidden" value={threadSlug} />
      <FormStatus state={state} />
      <div className="grid gap-4 md:grid-cols-2">
        <TextField label="Handle" name="handle" required />
        <TextField label="Optional email, private" name="email" type="email" />
        <label className="form-label md:col-span-2">
          <span>Reply body</span>
          <textarea
            className="form-field min-h-32"
            maxLength={2500}
            name="body"
            placeholder="Reply with evidence, a classification point, or a useful objection. One-line dunking gets rejected."
            required
          />
        </label>
      </div>
      <input aria-hidden="true" className="hidden" name="company" tabIndex={-1} />
      <button className="button-primary" disabled={pending} type="submit">
        <Send aria-hidden="true" size={16} />
        {pending ? "Submitting" : "Submit Reply"}
      </button>
    </form>
  );
}

export function AdminLoginForm({ error }: { error?: boolean }) {
  return (
    <form action={adminLogin} className="form-panel max-w-md">
      {error ? (
        <div className="border border-[#c98e8e] bg-[#f2dddd] px-3 py-2 text-sm text-[#8f1f1f]">
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

export function AdminModerationForm({ item }: { item: string }) {
  const [state, formAction, pending] = useActionState(moderateItem, initialFormState);

  return (
    <form action={formAction} className="space-y-2">
      <input name="item" type="hidden" value={item} />
      <label className="sr-only" htmlFor={`action-${item}`}>
        Moderation action for {item}
      </label>
      <select className="form-field" id={`action-${item}`} name="moderationAction" required>
        <option value="">Select action</option>
        <option value="approved">Approve</option>
        <option value="rejected">Reject</option>
        <option value="under review">Mark under review</option>
        <option value="pinned">Pin thread</option>
        <option value="locked">Lock thread</option>
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
      className={`border px-3 py-2 text-sm ${
        state.ok
          ? "border-[#9bb69f] bg-[#e7efe8] text-[var(--green)]"
          : "border-[#d5b073] bg-[#f6ecd6] text-[var(--navy)]"
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
