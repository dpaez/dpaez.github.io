import { Button } from "local-components/button"

import Logo from "./ui/Logo"

export default function Footer() {
  return (
    <footer className="mt-auto px-8 py-4 border-t border-border w-full">
      <div className=" flex flex-col items-center">
        <a href="/">
          <Logo className="text-2xl" />
        </a>

        <Button variant="ghost" asChild className="text-xs" size="sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <a href="mailto:diego@geutstudio.com">diego at geutstudio.com</a>
          </span>
        </Button>
      </div>
    </footer>
  )
}
