import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStory } from "@/data/stories";
import { StoryIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type StoryPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const story = getStory(params.slug);
  if (!story) {
    return {
      title: "Story not found",
      description: "The church story you are looking for is not available.",
    };
  }

  return {
    title: `${story.church} | Relius Stories`,
    description: story.summary,
    openGraph: {
      title: `${story.church} on Relius`,
      description: story.challenge,
    },
  };
}

export default function StoryDetailPage({ params }: StoryPageProps) {
  const story = getStory(params.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-5xl space-y-12">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{story.useCase}</span>
            <span>{story.location}</span>
            <span>{story.size}</span>
            {story.denomination ? <span>{story.denomination}</span> : null}
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Story</p>
              <h1 className="text-4xl font-bold text-slate-900">{story.church}</h1>
              <p className="text-xl text-slate-600">{story.summary}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {story.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs uppercase text-slate-500">{metric.label}</p>
                    <p className="text-lg font-semibold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
              <StoryIllustration type={story.illustration} className="w-full" title={`${story.church} illustration`} />
              <blockquote className="mt-6 text-slate-700 italic leading-relaxed">
                "{story.quote.text}"
              </blockquote>
              <p className="text-sm font-semibold text-slate-900 mt-3">{story.quote.person}</p>
              <p className="text-sm text-slate-500">{story.quote.role}</p>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <StorySection title="Church background" body={story.background} />
          <StorySection title="The challenge" body={story.challengeDetail} />
          <StoryBullets title="Why they chose Relius" items={story.whyRelius} />
          <StoryBullets title="Implementation experience" items={story.implementation} />
          <StoryBullets title="Results" items={story.results} />
          <StorySection title="Advice for other churches" body={story.advice} />
        </section>

        <Card className="border border-slate-200 bg-white">
          <CardContent className="p-8 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">Next step</p>
            <h2 className="text-3xl font-bold text-slate-900">What story do you want to tell?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Let's walk through Relius together or record what God is already doing in your ministry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Start your story</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact?intent=story">Share your story</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StorySection({ title, body }: { title: string; body: string }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function StoryBullets({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <ul className="list-disc pl-6 space-y-2 text-slate-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
