import { Layout } from "local-components/layout";
import { Card } from "local-components/card";
import { Button } from "local-components/button";

export default function Main({
  title,
  description,
  meta,
}: {
  title: string;
  description: string;
  meta: { label: string; value: string };
}) {
  return (
    <Layout padding="none" maxWidth="md">
      <Card variant="square" title={title} description={description} meta={meta} />

      <Button variant="secondary">Click me</Button>
    </Layout>
  );
}
