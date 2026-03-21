import { useTheme } from "local-components/theme-context"
import { Toggle } from "local-components/toggle"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Toggle
      variant="switch"
      checked={theme === "dark"}
      onCheckedChange={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    />
  )
}
