import { cn } from "@/shared/lib/utils"

function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 shrink-0 animate-spin rounded-full border-2 border-current border-e-transparent motion-reduce:animate-none",
        className
      )}
    />
  )
}

export { Spinner }
