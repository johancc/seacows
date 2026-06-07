import Image from "next/image";

import { ArticleCard } from "@/components/article-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Research Archive",
};

export default function ResearchPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Research" }]} />
      <div className="space-y-6">
        <SectionHeader
          kicker="Public Research Archive"
          title="Articles, Field Notes, and Case Files"
        />
        <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
          <p className="max-w-4xl leading-7 text-[var(--charcoal)]">
            The research archive is where long forum arguments go after they
            stop being useful as arguments. Taxonomy notes, field methods,
            terminology memos, evidence standards, speculative models, and
            registry policy all end up here once somebody has cleaned the mud
            off the first draft.
          </p>
          <div className="border border-[var(--line)] bg-[var(--paper-strong)] p-3 text-sm">
            <h2 className="section-title">Archive Categories</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  className="border border-[var(--line)] bg-white px-2 py-1 text-[var(--navy)]"
                  key={category}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <figure className="border border-[var(--line)] bg-[var(--paper)] p-2">
          <div className="relative aspect-[16/6] min-h-48 overflow-hidden border border-[var(--line-strong)]">
            <Image
              alt="Field notebook and observation equipment beside a lake."
              className="object-cover"
              fill
              sizes="100vw"
              src="/images/field-methods-notebook.png"
            />
          </div>
          <figcaption className="mt-2 text-xs leading-5 text-[var(--muted)]">
            Field notes are archived after moderator cleanup. Original witness
            phrasing is preserved when it affects classification.
          </figcaption>
        </figure>
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
