import { notFound } from "next/navigation";

import { ArticleLayout } from "@/components/article-components";
import { Breadcrumbs, PageShell } from "@/components/site-shell";
import { articles, getArticle } from "@/lib/data";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  return {
    title: article ? article.title : "Research Article",
    description: article?.abstract,
  };
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/research", label: "Research" },
          { label: article.title },
        ]}
      />
      <ArticleLayout article={article} />
    </PageShell>
  );
}
