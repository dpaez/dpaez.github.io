import { useTheme } from "local-components/theme-context"
import { Toggle } from "local-components/toggle"
import { cn } from "local-components/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <Toggle
      variant="switch"
      onClick={toggleTheme}
      className={cn("*:dark:bg-foreground", className)}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    />
  )
}
