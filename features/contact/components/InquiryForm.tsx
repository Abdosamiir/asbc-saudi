"use client"

import { useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { cn } from "cn"
import { useTranslations } from "next-intl"

import { Button } from "@/shared/components/ui/button"
import { Input, inputVariants } from "@/shared/components/ui/input"

import { MESSAGE_MIN_LENGTH, SERVICE_OPTIONS } from "../data/contact"

/** Shape of the inquiry — the payload a future API call will receive. */
export type InquiryFormValues = {
  fullName: string
  companyName: string
  email: string
  phone: string
  /** One of `SERVICE_OPTIONS`, so the value is the same in every locale. */
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

/** Emails and phone numbers are typed left-to-right, even on the Arabic site. */
const latinControlClassName = cn(controlClassName, "rtl:text-right")

/**
 * The "Send an Inquiry" form.
 *
 * Deliberately static: validation and state live here, but nothing is sent.
 * Wire the backend up by replacing the body of `onSubmit` with the request —
 * `values` is already the complete, validated payload.
 */
export default function InquiryForm() {
  // Translation
  const t = useTranslations("InquiryForm")
  // State
  const [isSent, setIsSent] = useState(false)
  // Form
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
  // Variables
  const messageLength = useWatch({ control, name: "message" }).length

  // Functions
  function onSubmit(values: InquiryFormValues) {
    // TODO: POST `values` to the inquiries endpoint once it exists.
    void values
    reset(DEFAULT_VALUES)
    setIsSent(true)
  }

  return (
    <div className="rounded-2xl border border-border bg-surface-raised p-5 sm:p-6 xl:p-8">
      <h3 className="type-heading-sm text-brand">{t("title")}</h3>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        onChange={() => setIsSent(false)}
        className="mt-6 flex flex-col gap-5"
      >
        <Input
          label={t("fullNameLabel")}
          required
          placeholder={t("fullNamePlaceholder")}
          className={controlClassName}
          error={errors.fullName?.message}
          {...register("fullName", { required: t("fullNameRequired") })}
        />

        <Input
          label={t("companyNameLabel")}
          required
          placeholder={t("companyNamePlaceholder")}
          className={controlClassName}
          error={errors.companyName?.message}
          {...register("companyName", {
            required: t("companyNameRequired"),
          })}
        />

        <Input
          label={t("emailLabel")}
          type="email"
          dir="ltr"
          required
          placeholder={t("emailPlaceholder")}
          className={latinControlClassName}
          error={errors.email?.message}
          {...register("email", {
            required: t("emailRequired"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("emailInvalid"),
            },
          })}
        />

        <Input
          label={
            <>
              {t("phoneLabel")}{" "}
              <span className="text-muted-foreground">{t("optional")}</span>
            </>
          }
          type="tel"
          dir="ltr"
          placeholder={t("phonePlaceholder")}
          className={latinControlClassName}
          {...register("phone")}
        />

        <div className="grid gap-2">
          <label
            htmlFor="serviceInterest"
            className="type-label-md text-foreground"
          >
            {t("serviceLabel")}
          </label>

          <select
            id="serviceInterest"
            className={cn(controlClassName, "pe-8 text-content")}
            {...register("serviceInterest")}
          >
            <option value="">{t("servicePlaceholder")}</option>

            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {t(`services.${service}`)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="type-label-md text-foreground">
            {t("messageLabel")}
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
            placeholder={t("messagePlaceholder", { min: MESSAGE_MIN_LENGTH })}
            className={cn(controlClassName, "h-auto resize-y py-3")}
            {...register("message", {
              required: t("messageRequired"),
              minLength: {
                value: MESSAGE_MIN_LENGTH,
                message: t("messageTooShort", { min: MESSAGE_MIN_LENGTH }),
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
              {t("messageHint", {
                count: messageLength,
                min: MESSAGE_MIN_LENGTH,
              })}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full rounded-2xl text-base"
        >
          {t("submit")}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className={isSent ? "type-body-sm text-success" : "sr-only"}
        >
          {isSent ? t("success") : ""}
        </p>
      </form>
    </div>
  )
}
