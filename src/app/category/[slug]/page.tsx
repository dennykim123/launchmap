import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import type { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.emoji} ${category.title} - LaunchMap`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const currentIndex = categories.findIndex((c) => c.slug === slug);
  const prev = currentIndex > 0 ? categories[currentIndex - 1] : null;
  const next =
    currentIndex < categories.length - 1 ? categories[currentIndex + 1] : null;

  const totalResources = category.sections.reduce(
    (total, sec) => total + sec.resources.length,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          홈
        </Link>
        <span>/</span>
        <span className="text-foreground">
          {category.emoji} {category.title}
        </span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{category.emoji}</span>
          <div>
            <h1 className="text-3xl font-bold">{category.title}</h1>
            <p className="text-muted">{category.subtitle}</p>
          </div>
        </div>
        <p className="text-foreground/80 leading-relaxed mb-4">
          {category.description}
        </p>
        <div className="text-sm text-muted">
          🔗 {totalResources}개 리소스 · {category.sections.length}개 섹션
        </div>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {category.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold mb-1 flex items-center gap-2">
              {section.title}
              <span className="text-xs font-normal text-muted">
                ({section.resources.length})
              </span>
            </h2>
            {section.note && (
              <p className="text-sm text-muted mb-4 italic">{section.note}</p>
            )}
            <ul className="space-y-2">
              {section.resources.map((resource, j) => (
                <li key={j}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:bg-card-hover hover:border-accent/30 transition-all"
                  >
                    <span className="text-accent-light mt-0.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-foreground group-hover:text-accent-light transition-colors">
                        {resource.title}
                      </span>
                      {resource.description && (
                        <p className="text-xs text-muted mt-1">
                          {resource.description}
                        </p>
                      )}
                      <p className="text-xs text-muted/50 mt-1 truncate">
                        {new URL(resource.url).hostname}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Tips */}
      {category.tips && category.tips.length > 0 && (
        <div className="mt-10 rounded-xl border border-accent/20 bg-accent/5 p-6">
          <h3 className="font-bold text-sm text-accent-light mb-3">💡 팁</h3>
          <ul className="space-y-2">
            {category.tips.map((tip, i) => (
              <li key={i} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-muted">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex items-center justify-between mt-12 pt-8 border-t border-border">
        {prev ? (
          <Link
            href={`/category/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>
              {prev.emoji} {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/category/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <span>
              {next.emoji} {next.title}
            </span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
