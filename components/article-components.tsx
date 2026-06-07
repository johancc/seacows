import Link from "next/link";
import { BookOpen, Clock } from "lucide-react";

import type { Article } from "@/lib/types";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="border border-[var(--line)] bg-[var(--paper)]">
      <div className="border-b border-[var(--line)] bg-[var(--paper-strong)] px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--burgundy)]">
          {article.category}
        </p>
        <h2 className="mt-1 font-serif text-2xl font-bold text-[var(--navy)]">
          <Link href={`/research/${article.slug}`} className="hover:text-[var(--burgundy)]">
            {article.title}
          </Link>
        </h2>
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold leading-6 text-[var(--charcoal)]">
          {article.subtitle}
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{article.abstract}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
          <span>{article.authorName}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
          <span className="flex items-center gap-1">
            <Clock aria-hidden="true" size={13} />
            {article.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <article className="border border-[var(--line)] bg-[var(--paper)]">
      <header className="border-b border-[var(--line)] bg-[var(--paper-strong)] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--burgundy)]">
          {article.category}
        </p>
        <h1 className="mt-2 max-w-4xl font-serif text-4xl font-bold leading-tight text-[var(--navy)]">
          {article.title}
        </h1>
        <p className="mt-3 max-w-3xl font-serif text-xl leading-8 text-[var(--charcoal)]">
          {article.subtitle}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
          <span>{article.authorName}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
          <span className="flex items-center gap-1">
            <BookOpen aria-hidden="true" size={14} />
            {article.readingTime}
          </span>
        </div>
      </header>
      <div className="grid gap-6 p-5 lg:grid-cols-[1fr_16rem]">
        <div className="prose-archive max-w-none">
          <div className="mb-6 border-l-4 border-[var(--burgundy)] bg-white px-4 py-3">
            <h2>Abstract</h2>
            <p>{article.abstract}</p>
          </div>
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          {article.table ? (
            <div className="my-6 overflow-x-auto">
              <table className="forum-table">
                <thead>
                  <tr>
                    {article.table.headers.map((header) => (
                      <th key={header} scope="col">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {article.table.rows.map((row) => (
                    <tr key={row.join("-")}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
        <aside className="space-y-4">
          <div className="border border-[var(--line)] bg-[var(--paper-strong)] p-3">
            <h2 className="section-title">Archive Metadata</h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                  Category
                </dt>
                <dd className="font-semibold text-[var(--navy)]">{article.category}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                  Status
                </dt>
                <dd className="font-semibold text-[var(--green)]">Published</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                  Registry phrase
                </dt>
                <dd className="font-semibold text-[var(--burgundy)]">
                  The category remains open.
                </dd>
              </div>
            </dl>
          </div>
          <div className="border border-[var(--line)] bg-white p-3 text-sm leading-6 text-[var(--charcoal)]">
            This article is part of the public archive. It is not a claim of
            institutional recognition. It preserves terminology, field methods,
            and classification discussion for community review.
          </div>
        </aside>
      </div>
    </article>
  );
}
