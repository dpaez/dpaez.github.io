import { Badge } from "local-components/badge"
import { Button } from "local-components/button"
import type { CollectionEntry } from "astro:content"
import { Heading } from "local-components/typography/heading"
import { Text } from "local-components/typography/text"

interface BlogPostProps {
  post: CollectionEntry<"blog">
  children: React.ReactNode
}

export function BlogPost({ post, children }: BlogPostProps) {
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <article className="p-4 lg:p-0 prose prose-strong:font-bold prose-strong:text-primary-foreground max-w-none">
      <header className="mb-8 not-prose">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.data.tags.map((tag: string) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          <Heading as="h1" className="font-bold tracking-tight py-4 text-primary-500 dark:text-secondary-foreground">
            {post.data.title}
          </Heading>
          <Text color="muted">{post.data.description}</Text>
        </div>

        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <time
            className="not-prose font-thin text-xs tracking-tight font-mono"
            dateTime={post.data.pubDate.toISOString()}
          >
            Published: {formattedDate}
          </time>
          {post.data.updatedDate && (
            <time dateTime={post.data.updatedDate.toISOString()}>
              Updated:{" "}
              {new Date(post.data.updatedDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
      </header>
      {post.data.heroImage && (
        <>
          <img
            src={post.data.heroImage}
            alt={post.data.title}
            className="w-full object-cover aspect-video rounded-xs"
          />
          <Text
            color="muted"
            size="sm"
            dangerouslySetInnerHTML={{ __html: post.data.heroImageAlt ?? ("" as string) }}
          />
        </>
      )}
      {!post.data.heroImage && (
        <div className="w-64 h-1 bg-muted rounded-full corner-tl-bevel my-8 corner-br-bevel corner-tr-square corner-bl-square mx-auto" />
      )}

      <section className="">{children}</section>

      <footer className="mt-12 pt-8 not-prose">
        <Button variant="ghost" asChild>
          <a href="/blog">← Back to all posts</a>
        </Button>
      </footer>
    </article>
  )
}
