import { cn } from "local-components/utils"

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-sans font-extralight font-feature-['smcp'] font-stretch-expanded text-primary-500 tracking-wider hover:tracking-widest will-change-transform transition-all duration-300 ease-[cubic-bezier(0.78,0,0.22,1)]",
        className,
      )}
    >
      D Ξ K Δ
    </div>
  )
}
