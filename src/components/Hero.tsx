import { Button } from "local-components/button"

interface HeroProps {
  currentPath?: string
}

export function Hero({ currentPath = "/" }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Brand Logo */}
        <div className="font-mono text-6xl md:text-8xl font-bold tracking-tighter">DΞKΔ</div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">Developer, P2P Enthusiast, Entrepreneur</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild variant="primary" size="lg">
            <a href="/projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/about">About Me</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6 pt-8 text-muted-foreground">
          <a
            href="https://github.com/dpaez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/carax"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <TwitterIcon className="h-6 w-6" />
          </a>
          <a
            href="https://geutstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GEUT Studio"
          >
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  )
}
