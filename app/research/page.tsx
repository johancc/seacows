import Link from "next/link";
import { BookOpen, Clock, FileText, FolderOpen } from "lucide-react";

import { ForumPanel } from "@/components/forum-components";
import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";
import { articles } from "@/lib/data";

export const metadata = {
  title: "Research Archive",
};

export default function ResearchPage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));
  const pinnedArticles = articles.slice(0, 3);
  const remainingArticles = articles.slice(3);

  return (
    <PageShell>
      <Breadcrumbs items={[{ label: "Research" }]} />
      <div className="space-y-5">
        <SectionHeader kicker="Research Desk" level={1} title="Research" />

        <div className="forum-panel">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="border-b border-[var(--line)] p-4 lg:border-b-0 lg:border-r">
              <p className="max-w-4xl text-sm leading-6 text-[var(--charcoal)] sm:text-base sm:leading-7">
                this is where the board keeps the arguments people still need:
                Lorida notes, photo rules, field methods, terminology fights,
                and old case logic. if you are new, read the Lorida notes first.
                they explain why land movement does not end a water report.
              </p>
              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-3">
                {pinnedArticles.map((article) => (
                  <Link
                    className="flex items-start gap-2 border border-[var(--line)] bg-white p-2 hover:bg-[rgba(64,95,134,0.055)]"
                    href={`/research/${article.slug}`}
                    key={article.id}
                  >
                    <FileText aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--burgundy)]" size={15} />
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                        pinned
                      </span>
                      <span className="block font-semibold leading-5 text-[var(--navy)]">
                        {article.title}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <aside className="p-4">
              <h2 className="section-title flex items-center gap-2">
                <FolderOpen aria-hidden="true" size={16} />
                Sections
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    className="border border-[var(--line)] bg-[var(--paper-strong)] px-2 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[var(--navy)]"
                    key={category}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
                category labels are filing labels, not final truth. yes, this
                caused a 9-page thread.
              </p>
            </aside>
          </div>
        </div>

        <ForumPanel title="Pinned Research Notes">
          <div className="divide-y divide-[var(--line)]">
            {pinnedArticles.map((article) => (
              <ResearchRow article={article} key={article.id} />
            ))}
          </div>
        </ForumPanel>

        <ForumPanel title="Archive Index">
          <div className="overflow-x-auto">
            <table className="forum-table">
              <caption className="sr-only">Research archive articles</caption>
              <thead>
                <tr>
                  <th scope="col">Note</th>
                  <th scope="col" className="w-44">
                    Section
                  </th>
                  <th scope="col" className="w-40">
                    Desk
                  </th>
                  <th scope="col" className="w-28 text-right">
                    Read
                  </th>
                </tr>
              </thead>
              <tbody>
                {remainingArticles.map((article) => (
                  <tr key={article.id}>
                    <td data-label="Note">
                      <div className="flex gap-3">
                        <span className="forum-status-icon mt-1">
                          <BookOpen aria-hidden="true" size={16} />
                        </span>
                        <div>
                          <Link
                            className="font-semibold text-[var(--navy)] hover:text-[var(--burgundy)]"
                            href={`/research/${article.slug}`}
                          >
                            {article.title}
                          </Link>
                          <p className="mt-1 max-w-3xl text-sm leading-5 text-[var(--muted)]">
                            {article.subtitle}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="text-sm" data-label="Section">
                      {article.category}
                    </td>
                    <td className="text-sm" data-label="Desk">
                      {article.authorName}
                    </td>
                    <td className="text-right text-sm text-[var(--muted)]" data-label="Read">
                      {article.readingTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ForumPanel>
      </div>
    </PageShell>
  );
}

function ResearchRow({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="grid gap-3 p-3 sm:grid-cols-[minmax(0,1fr)_10rem] sm:items-center">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
          {article.category}
        </p>
        <Link
          className="mt-1 block font-serif text-lg font-bold leading-tight text-[var(--navy)] hover:text-[var(--burgundy)]"
          href={`/research/${article.slug}`}
        >
          {article.title}
        </Link>
        <p className="mt-1 text-sm leading-6 text-[var(--charcoal)]">{article.subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-[var(--muted)] sm:block sm:text-right">
        <p>{article.authorName}</p>
        <p className="flex items-center gap-1 sm:mt-1 sm:justify-end">
          <Clock aria-hidden="true" size={13} />
          {article.readingTime}
        </p>
      </div>
    </article>
  );
}
