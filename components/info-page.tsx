import { Breadcrumbs, PageShell, SectionHeader } from "@/components/site-shell";

export function InfoPage({
  title,
  kicker,
  paragraphs,
  sections,
}: {
  title: string;
  kicker: string;
  paragraphs: string[];
  sections?: Array<{ title: string; body: string }>;
}) {
  return (
    <PageShell>
      <Breadcrumbs items={[{ label: title }]} />
      <div className="space-y-5">
        <SectionHeader kicker={kicker} level={1} title={title} />
        <div className="max-w-4xl space-y-3 leading-7 text-[var(--charcoal)]">
          {paragraphs.map((paragraph, index) => (
            <p key={`${index}-${paragraph}`}>{paragraph}</p>
          ))}
        </div>
        {sections ? (
          <div className="grid gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <section className="note-panel" key={section.title}>
                <h2 className="section-title">{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        ) : null}
      </div>
    </PageShell>
  );
}
