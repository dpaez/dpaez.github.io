import { ThemeProvider } from "local-components/theme-context"
import { Navigation } from "./Navigation"

export function ThemeNavShell() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  )
}
