"use client"

import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { cn } from "cn"

import { Button } from "@/shared/components/ui/button"
import { Input, inputVariants } from "@/shared/components/ui/input"

import { MESSAGE_MIN_LENGTH, SERVICE_OPTIONS } from "../data/contact"

/** Shape of the inquiry — the payload a future API call will receive. */
export type InquiryFormValues = {
  fullName: string
  companyName: string
  email: string
  phone: string
  serviceInterest: string
  message: string
}

const DEFAULT_VALUES: InquiryFormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  serviceInterest: "",
  message: "",
}

/** Shared control styling: the design-system input at the Figma corner radius. */
const controlClassName = cn(inputVariants(), "rounded-xl")

/**
 * The "Send an Inquiry" form.
 *
 * Deliberately static: validation and state live here, but nothing is sent.
 * Wire the backend up by replacing the body of `onSubmit` with the request —
 * `values` is already the complete, validated payload.
 */
export default function InquiryForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
  })
  const [isSent, setIsSent] = useState(false)

  const messageLength = useWatch({ control, name: "message" }).length

  function onSubmit(values: InquiryFormValues) {
    // TODO: POST `values` to the inquiries endpoint once it exists.
    void values
    reset(DEFAULT_VALUES)
    setIsSent(true)
  }

  return (
    <div className="rounded-2xl border border-border bg-surface-raised p-5 sm:p-6 xl:p-8">
      <h3 className="type-heading-sm text-brand">Send an Inquiry</h3>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsSent(false)}
        className="mt-6 flex flex-col gap-5"
      >
        <Input
          label="Full Name"
          required
          placeholder="Your full name"
          className={controlClassName}
          error={errors.fullName?.message}
          {...register("fullName", { required: "Full name is required." })}
        />

        <Input
          label="Company Name"
          required
          placeholder="Your company name"
          className={controlClassName}
          error={errors.companyName?.message}
          {...register("companyName", {
            required: "Company name is required.",
          })}
        />

        <Input
          label="Email Address"
          type="email"
          required
          placeholder="your.email@company.com"
          className={controlClassName}
          error={errors.email?.message}
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address.",
            },
          })}
        />

        <Input
          label={
            <>
              Phone Number{" "}
              <span className="text-muted-foreground">(Optional)</span>
            </>
          }
          type="tel"
          placeholder="+966 5XX XXX XXXX"
          className={controlClassName}
          {...register("phone")}
        />

        <div className="grid gap-2">
          <label
            htmlFor="serviceInterest"
            className="type-label-md text-foreground"
          >
            Service Interest
          </label>

          <select
            id="serviceInterest"
            className={cn(controlClassName, "pr-8 text-content")}
            {...register("serviceInterest")}
          >
            <option value="">Select a service...</option>

            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="type-label-md text-foreground">
            Project Brief / Message
            <span aria-hidden="true" className="ms-1 text-danger">
              *
            </span>
          </label>

          <textarea
            id="message"
            rows={4}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            placeholder={`Tell us about your project requirements... (minimum ${MESSAGE_MIN_LENGTH} characters)`}
            className={cn(controlClassName, "h-auto resize-y py-3")}
            {...register("message", {
              required: "A short project brief is required.",
              minLength: {
                value: MESSAGE_MIN_LENGTH,
                message: `Please use at least ${MESSAGE_MIN_LENGTH} characters.`,
              },
            })}
          />

          {errors.message ? (
            <p
              id="message-error"
              role="alert"
              className="type-body-sm text-danger"
            >
              {errors.message.message}
            </p>
          ) : (
            <p id="message-hint" className="type-body-xs text-muted-foreground">
              {messageLength}/{MESSAGE_MIN_LENGTH} characters minimum
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-2xl text-base"
        >
          Send Inquiry →
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={isSent ? "type-body-sm text-success" : "sr-only"}
        >
          {isSent ? "Thank you — we will be in touch within 24 hours." : ""}
        </p>
      </form>
    </div>
  )
}
