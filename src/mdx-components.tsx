import { Heading } from "local-components/typography/heading"
import { Text } from "local-components/typography/text"
import { Blockquote } from "local-components/typography/blockquote"
import { Lead } from "local-components/typography/lead"
import { cn } from "local-components/utils"

const makeHeading =
  (as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading
      as={as}
      {...props}
      className={cn(
        "bg-primary-500 text-primary-foreground dark:bg-secondary-500 dark:text-secondary-foreground w-fit rounded-3xl corner-tl-bevel corner-br-bevel corner-tr-square corner-bl-square px-6 py-2 ",
        as === "h1" ? "my-4" : "",
      )}
    />
  )

const makeText = (props: React.ComponentPropsWithoutRef<typeof Text>) => (
  <Text {...props} className="not-prose text-pretty py-2" />
)

const ListItem = (props: React.ComponentPropsWithoutRef<"li">) => (
  <li
    {...props}
    className="marker:text-primary-600 dark:marker:text-secondary-600 text-pretty text-primary-500 dark:text-secondary-200"
  />
)

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
}
