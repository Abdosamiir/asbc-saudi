"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/shared/lib/utils"

type ThemeToggleProps = {
  className?: string
}

/**
 * Switches between the light and dark token sets. Renders a stable placeholder
 * until mounted, because the resolved theme is only known on the client.
 */
const subscribe = () => () => {}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const t = useTranslations("ThemeToggle")
  const { resolvedTheme, setTheme } = useTheme()
  /** `false` on the server and through hydration, `true` once on the client. */
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  /* The resolved theme is unknown until the client runs, so every attribute
     that depends on it has to render its neutral form during hydration. */
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t("switchToLight") : t("switchToDark")}
      aria-pressed={mounted ? isDark : undefined}
      title={t("hint")}
      className={cn(
        "relative inline-flex size-11 shrink-0 items-center justify-center rounded-full",
        "border border-line text-content-muted",
        "transition-colors duration-200 hover:bg-interactive-ghost hover:text-brand",
        className
      )}
    >
      {/* Both icons stay mounted and cross-fade, so the button never reflows. */}
      <Sun
        size={18}
        aria-hidden="true"
        className={cn(
          "absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none",
          isDark
            ? "scale-50 rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        )}
      />
      <Moon
        size={18}
        aria-hidden="true"
        className={cn(
          "absolute transition-[opacity,transform] duration-300 motion-reduce:transition-none",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-50 -rotate-90 opacity-0"
        )}
      />
    </button>
  )
}
