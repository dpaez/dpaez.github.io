import { Button } from "local-components/button"
import Logo from "./ui/Logo"

import XTwitterIcon from "@/components/ui/icons/X"
import GeutIcon from "@/components/ui/icons/Geut"

import { Text } from "local-components/typography/text"
import { Badge } from "local-components/badge"

const Separator = () => {
  return <span className="text-secondary-500 font-extralight text-2xl">/</span>
}

export function Hero() {
  return (
    <div className="flex flex-1 min-h-0 flex-col px-8 justify-between">
      <a href="/" className="scroll-mt-12 flex items-center tracking-tight transition-colors" aria-label="D Ξ K Δ Home">
        <Logo className="text-6xl md:text-9xl" />
      </a>

      <div className="mx-auto px-1 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-3 items-center gap-4 pb-8">
          {/* Tagline */}
          <Text
            size="sm"
            className="flex items-start xl:items-center flex-col md:flex-row md:gap-1 font-sans tracking-wide text-primary-400"
          >
            <span className="flex items-center gap-1">
              Developer <Separator />
            </span>{" "}
            <span className="flex items-center gap-1">
              P2P Enthusiast <Separator />
            </span>{" "}
            <span className="flex items-center gap-1">
              Entrepreneur <Separator />
            </span>{" "}
            <span className="flex items-center gap-1 leading-[32px]">Sport Climber</span>
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-start xl:justify-center">
            <Badge variant="outline" size="sm">
              <span className="inline-flex text-secondary-500 items-center h-full gap-1 uppercase">
                <span className="relative size-3 inline-flex items-center justify-center ">
                  <span className="absolute inline-flex size-full bg-secondary dark:opacity-75 opacity-25 rounded-full animate-ping" />
                  <span className="relative bg-secondary rounded-full size-1.5 outline-offset-1 outline-1 outline-(--secondary)" />
                </span>
                Available for hiring
              </span>
            </Badge>
            <Button asChild variant="ghost" size="sm" className="uppercase">
              <a href="/about#connect">Connect</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex h-8 items-center justify-start xl:justify-end space-x-6 text-muted-foreground">
            <a
              href="https://github.com/dpaez"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://twitter.com/carax"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <XTwitterIcon className="size-5 stroke-4" />
            </a>
            <a
              href="https://geutstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GEUT Studio"
            >
              <GeutIcon className="size-5" />
            </a>
          </div>
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
