"use client"

import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Spinner } from "@/shared/components/ui/spinner"

const inputVariants = cva(
  "w-full min-w-0 rounded-md border px-4 font-sans text-base leading-5 text-foreground transition-colors duration-150 outline-none file:me-3 file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-content-subtle read-only:cursor-default hover:not-disabled:not-read-only:border-line-brand focus:border-brand focus:ring-2 focus:ring-ring/30 disabled:cursor-not-allowed disabled:bg-muted disabled:text-content-subtle disabled:opacity-60 aria-invalid:border-critical aria-invalid:hover:border-critical aria-invalid:focus:border-critical aria-invalid:focus:ring-critical/25 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "border-line-strong bg-surface",
        filled: "border-line-strong bg-surface-sunken",
      },
      inputSize: {
        sm: "h-11 py-3 md:text-sm",
        default: "h-12 py-3 md:text-sm",
        lg: "h-[52px] py-4",
      },
    },
    defaultVariants: { variant: "default", inputSize: "default" },
  }
)

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    label?: React.ReactNode
    helperText?: React.ReactNode
    error?: React.ReactNode
    loading?: boolean
    loadingText?: string
    wrapperClassName?: string
  }

function Input({
  className,
  wrapperClassName,
  type,
  id,
  label,
  helperText,
  error,
  loading = false,
  loadingText = "Checking…",
  disabled,
  readOnly,
  required,
  variant,
  inputSize,
  "aria-describedby": describedBy,
  ...props
}: InputProps) {
  const generatedId = React.useId()
  const inputId = id ?? generatedId
  const hasError = Boolean(error)
  const descriptionIds =
    [
      describedBy,
      helperText ? inputId + "-hint" : undefined,
      hasError ? inputId + "-error" : undefined,
      loading ? inputId + "-loading" : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined

  return (
    <div
      data-slot="input-field"
      className={cn("grid w-full gap-2", wrapperClassName)}
    >
      {label && (
        <label htmlFor={inputId} className="type-label-md text-content">
          {label}
          {required && (
            <span aria-hidden="true" className="ms-1 text-critical">
              *
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <InputPrimitive
          {...props}
          id={inputId}
          type={type}
          required={required}
          disabled={disabled}
          readOnly={readOnly || loading}
          data-slot="input"
          data-loading={loading}
          aria-busy={loading || undefined}
          aria-invalid={hasError || props["aria-invalid"]}
          aria-describedby={descriptionIds}
          className={cn(
            inputVariants({ variant, inputSize }),
            (loading || hasError) && "pe-11",
            loading && "cursor-wait",
            className
          )}
        />
        {(loading || hasError) && (
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-y-0 end-4 flex items-center",
              hasError ? "text-critical" : "text-brand"
            )}
          >
            {loading ? (
              <Spinner />
            ) : (
              <span className="flex size-[18px] items-center justify-center rounded-full border-[1.5px] border-current text-xs font-bold">
                !
              </span>
            )}
          </span>
        )}
      </div>
      {helperText && (
        <p
          id={inputId + "-hint"}
          className="type-body-sm text-muted-foreground"
        >
          {helperText}
        </p>
      )}
      {hasError && (
        <p
          id={inputId + "-error"}
          role="alert"
          className="type-body-sm text-critical"
        >
          {error}
        </p>
      )}
      <span
        id={inputId + "-loading"}
        role="status"
        className={loading ? "type-body-sm text-muted-foreground" : "sr-only"}
      >
        {loading ? loadingText : ""}
      </span>
    </div>
  )
}

export { Input, inputVariants, type InputProps }
