"use client"

import { useId, type ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Spinner } from "@/shared/components/ui/spinner"

/* Every variant reads from semantic tokens, so it re-colors itself for the
   theme AND for the surface scope it lands in. That is why the `*-on-navy`
   variants below no longer need their own palette — they are aliases kept for
   existing call sites. */
const primary =
  "bg-interactive text-on-brand shadow-e1 enabled:hover:bg-interactive-hover enabled:active:bg-interactive-active"
const secondary =
  "border-line-strong bg-transparent text-brand enabled:hover:bg-interactive-ghost enabled:active:bg-interactive-ghost-strong"
const accent =
  "bg-accent-gold text-on-gold shadow-e1 enabled:hover:bg-accent-gold-deep enabled:active:bg-accent-gold-deep"
const danger =
  "bg-critical text-on-brand enabled:hover:bg-critical/90 enabled:active:bg-critical/80"

const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-sans font-medium whitespace-nowrap transition-colors duration-150 outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-critical aria-invalid:focus-visible:outline-critical data-[loading=true]:cursor-wait motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: primary,
        primary,
        secondary,
        outline: secondary,
        accent,
        ghost:
          "text-brand enabled:hover:bg-interactive-ghost enabled:active:bg-interactive-ghost-strong",
        danger,
        destructive: danger,
        link: "text-brand underline-offset-4 enabled:hover:underline enabled:active:text-heading",
        /** On an inverse surface this resolves to white-on-navy on its own. */
        "primary-on-navy":
          "bg-surface-overlay text-content shadow-e2 enabled:hover:bg-interactive-ghost-strong enabled:active:bg-interactive-ghost",
        "outline-on-navy": secondary,
        "accent-on-navy": accent,
        "glass-on-navy":
          "border-line bg-interactive-ghost text-content backdrop-blur-sm enabled:hover:bg-interactive-ghost-strong enabled:active:bg-interactive-ghost-strong",
      },
      size: {
        default: "h-11 min-w-11 gap-2 px-6 text-sm leading-5 tracking-[0.35px]",
        md: "h-11 min-w-11 gap-2 px-6 text-sm leading-5 tracking-[0.35px]",
        sm: "h-9 min-w-11 gap-2 px-[18px] text-xs leading-4 tracking-[0.3px] before:absolute before:inset-x-0 before:-inset-y-1",
        xs: "h-9 min-w-11 gap-2 px-[18px] text-xs leading-4 tracking-[0.3px] before:absolute before:inset-x-0 before:-inset-y-1",
        lg: "h-[52px] min-w-[52px] gap-2 px-8 text-base leading-5",
        icon: "size-11",
        "icon-xs": "size-11",
        "icon-sm": "size-11",
        "icon-lg": "size-[52px]",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

type ButtonProps = Omit<ButtonPrimitive.Props, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string
    loading?: boolean
    loadingText?: string
    /** A persistent action error, associated with the button for assistive technology. */
    error?: ReactNode
  }

function Button({
  className,
  variant = "default",
  size = "default",
  loading = false,
  loadingText = "Loading…",
  disabled,
  children,
  error,
  "aria-describedby": describedBy,
  ...props
}: ButtonProps) {
  const errorId = useId()
  const hasError = Boolean(error)
  return (
    <>
      <ButtonPrimitive
        {...props}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        data-loading={loading}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-invalid={hasError || props["aria-invalid"]}
        aria-describedby={
          [describedBy, hasError ? errorId : undefined]
            .filter(Boolean)
            .join(" ") || undefined
        }
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {loading ? (
          <>
            <Spinner />
            <span className={size?.startsWith("icon") ? "sr-only" : undefined}>
              {loadingText}
            </span>
          </>
        ) : (
          children
        )}
      </ButtonPrimitive>
      {hasError && (
        <p id={errorId} role="alert" className="type-body-sm text-critical">
          {error}
        </p>
      )}
    </>
  )
}

export { Button, buttonVariants, type ButtonProps }
