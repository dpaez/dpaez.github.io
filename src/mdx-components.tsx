import { isValidElement, type ReactNode } from "react"

import { Heading } from "local-components/typography/heading"
import { Text } from "local-components/typography/text"
import { Blockquote } from "local-components/typography/blockquote"
import { Lead } from "local-components/typography/lead"
import { Code } from "local-components/typography/code"
import { cn } from "local-components/utils"

const makeHeading =
  (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading
      as={as}
      {...props}
      className={cn(
        "bg-primary-500 text-primary-foreground dark:bg-secondary-500 dark:text-secondary-foreground w-fit rounded-3xl corner-tl-bevel corner-br-bevel corner-tr-square corner-bl-square px-6 py-2 ",
        as === "h1" ? "my-2" : "",
      )}
    />
  )

const makeText = (props: React.ComponentPropsWithoutRef<typeof Text>) => (
  <Text {...props} className="not-prose text-pretty py-2" />
)

const Anchor = (props: React.ComponentPropsWithoutRef<"a">) => (
  <a
    {...props}
    className={cn(
      "text-primary-600 underline underline-offset-4",
      "dark:text-secondary-300",
      "transition-[text-shadow,color] duration-150 hover:text-shadow-[0_0_0.8px_currentColor,0_0_0.8px_currentColor]",
      props.className,
    )}
  />
)

const ListItem = (props: React.ComponentPropsWithoutRef<"li">) => (
  <li
    {...props}
    className="marker:text-primary-600 dark:marker:text-secondary-600 text-pretty text-primary-500 dark:text-secondary-200"
  />
)

function slotValue(children: ReactNode): string {
  if (typeof children === "string") return children
  if (isValidElement(children) && children.props && "value" in children.props) {
    return String((children.props as { value: unknown }).value)
  }
  return ""
}

const MadCode = (props: React.ComponentPropsWithoutRef<"code">) => {
  const html = slotValue(props.children)
  const isBlock = html.includes("<span") || html.includes("\n")

  if (isBlock) return <code {...props} />

  return (
    <Code {...props} className={cn("text-pretty text-primary-500 dark:text-secondary-200", props.className)}>
      {props.children}
    </Code>
  )
}

export default {
  h1: makeHeading("h1"),
  h2: makeHeading("h2"),
  h3: makeHeading("h3"),
  h4: makeHeading("h4"),
  h5: makeHeading("h5"),
  h6: makeHeading("h6"),
  p: makeText,
  blockquote: Blockquote,
  Lead,
  li: ListItem,
  a: Anchor,
  code: MadCode,
}
