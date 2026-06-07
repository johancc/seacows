import { notFound } from "next/navigation";
import Link from "next/link";
import { PenLine } from "lucide-react";

import { ThreadForm } from "@/components/forms";
import { ThreadList } from "@/components/forum-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import { forumCategories, getCategory, getThreadsByCategory } from "@/lib/data";

export function generateStaticParams() {
  return forumCategories.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategory(categorySlug);
  return {
    title: category ? category.name : "Forum Category",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) {
    notFound();
  }
  const threads = getThreadsByCategory(category.slug);

  return (
    <PageShell>
      <Breadcrumbs
        items={[
          { href: "/forum", label: "Forum" },
          { label: category.name },
        ]}
      />
      <div className="space-y-6">
        <SectionHeader
          action={
            <a className="button-primary" href="#start-thread">
              <PenLine aria-hidden="true" size={16} />
              Start a Thread
            </a>
          }
          kicker="Forum Category"
          level={1}
          title={category.name}
        />
        <div className="rounded-md border border-[var(--line)] bg-[var(--paper)] p-4 shadow-[0_8px_24px_rgba(16,35,63,0.04)]">
          <p className="max-w-4xl leading-7 text-[var(--charcoal)]">
            {category.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <span>{category.topics.toLocaleString()} topics</span>
            <span aria-hidden="true">·</span>
            <span>{category.posts.toLocaleString()} posts</span>
            <span aria-hidden="true">·</span>
            <span>Sort: latest · most replied · newest</span>
          </div>
        </div>
        <ThreadList threads={threads} />
        <div className="flex flex-wrap gap-2">
          <Link className="button-secondary" href="/forum">
            Back to Forum Index
          </Link>
          <Link className="button-secondary" href="/research">
            Read Research Notes
          </Link>
        </div>
        <section className="space-y-3" id="start-thread">
          <SectionHeader kicker="Public Submission" title="Start a Thread" />
          <ThreadForm categorySlug={category.slug} />
        </section>
      </div>
    </PageShell>
  );
}
