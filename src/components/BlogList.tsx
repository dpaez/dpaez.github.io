import { Card } from "local-components/card"
import { Badge } from "local-components/badge"

import type { CollectionEntry } from "astro:content"
import { Section } from "local-components/section"

interface BlogListProps {
  posts: CollectionEntry<"blog">[]
}

export function BlogList({ posts }: BlogListProps) {
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return (
    <div className="space-y-6">
      <Section title="Recent Posts">
        <div className="grid gap-6 md:grid-cols-2">
          {sortedPosts.map((post) => {
            return (
              <a key={post.id} href={`/blog/${post.slug}`} className="block no-underline">
                <Card
                  variant="hoverable"
                  title={post.data.title}
                  description={post.data.description}
                  meta={{ label: "◉", value: post.data.tags[0] || "Article" }}
                >
                  {post.data.tags.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {post.data.tags.slice(1, 4).map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.data.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.data.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  )}
                </Card>
              </a>
            )
          })}
        </div>
      </Section>
    </div>
  )
}
