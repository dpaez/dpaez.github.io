import { ThemeProvider } from "local-components/theme-context"
import { Navigation } from "./Navigation"

type ThemeNavShellProps = {
  currentPath?: string
}

/** Single island: ThemeProvider + Navigation so useTheme() works in ThemeToggle. */
export function ThemeNavShell({ currentPath = "/" }: ThemeNavShellProps) {
  return (
    <ThemeProvider>
      <Navigation currentPath={currentPath} />
    </ThemeProvider>
  )
}
