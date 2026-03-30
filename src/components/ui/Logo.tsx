import { cn } from "local-components/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-sans font-extralight text-primary-500 tracking-wider hover:tracking-widest transition-all duration-400 ease-[cubic-bezier(0.123,0.993,1,0.742)]",
        className,
      )}
    >
      D Ξ K Δ
    </div>
  )
}
