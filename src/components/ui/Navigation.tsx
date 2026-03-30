import { useState, useCallback, useEffect } from "react"
import { Button } from "local-components/button"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "local-components/utils"
import { MenuIcon, XIcon as CloseIcon } from "lucide-react"

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  useEffect(() => {
    document.addEventListener("astro:after-swap", () => {
      setCurrentPath(window.location.pathname)
    })
  }, [document])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <header className="relative flex items-center justify-end h-12 z-40 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-end justify-end space-x-2 pr-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={currentPath === link.href || (link.href === "/blog" && currentPath.startsWith(link.href))}
          />
        ))}
        <div className="ml-4 border-l border-border pl-4">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <div className="flex justify-end items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="z-50"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CloseIcon className="size-6! text-primary-400 stroke-3" />
            ) : (
              <MenuIcon className="size-6! text-primary-400 stroke-3" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-0 right-0 w-full border-t border-border bg-background px-4 py-4"
        >
          <nav className="flex flex-col space-y-4 border-b border-border pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-sm uppercase font-mono font-bold tracking-wide transition-colors  hover:text-secondary-300   ${
                  currentPath === link.href || (link.href === "/blog" && currentPath.startsWith(link.href))
                    ? "text-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Button asChild variant="ghost" size="sm">
      <a
        href={href}
        className={cn(
          `text-base font-mono tracking-wide transition-colors uppercase hover:text-primary dark:hover:text-secondary-500 ${isActive ? "font-bold text-secondary" : "font-normal text-muted-foreground"}`,
        )}
      >
        {label}
      </a>
    </Button>
  )
}
