import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Clock, Layers, ArrowLeft } from "lucide-react";
import { projects } from "@/data";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  const showGithub = (project.showGithub ?? true) && !!project.github && project.github !== "#";

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        {/* Back to home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 text-sm text-accent">{project.category}</p>
            {project.duration && (
              <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3.5 w-3.5" />
                <span>{project.duration}</span>
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!!project.demo && project.demo !== "#" && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-light"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </Link>
            )}

            {!!project.playStore && project.playStore !== "#" && (
              <Link
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-light"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Play Store
              </Link>
            )}

            {!!project.appStore && project.appStore !== "#" && (
              <Link
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-light"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                App Store
              </Link>
            )}

            {showGithub && (
              <Link
                href={project.github!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/50"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </Link>
            )}
          </div>
        </div>

        {/* Screenshots — grid for ≤2, carousel for 3+ */}
        {project.screenshots.length > 0 && (
          project.screenshots.length <= 2 ? (
            <div className="mb-10 grid gap-4 md:grid-cols-2">
              {project.screenshots.map((src) => (
                <div
                  key={src}
                  className="relative h-56 overflow-hidden rounded-2xl border border-border bg-surface-light sm:h-72"
                >
                  {src ? (
                    <Image
                      src={src}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Layers className="h-10 w-10 text-muted/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <ScreenshotCarousel
              screenshots={project.screenshots}
              title={project.title}
            />
          )
        )}

        {/* Description & details */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-heading text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.longDescription}
            </p>
          </div>

          <div className="space-y-6 rounded-2xl border border-border bg-surface p-5">
            <div>
              <h3 className="font-heading text-sm font-semibold">Tech Stack</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-accent/5 px-2 py-0.5 text-xs text-accent/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.role && (
              <div>
                <h3 className="font-heading text-sm font-semibold">Role</h3>
                <p className="mt-1 text-xs text-muted">{project.role}</p>
              </div>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="font-heading text-sm font-semibold">Highlights</h3>
                <ul className="mt-2 space-y-1.5 text-xs text-muted">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
