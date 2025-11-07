import { Metadata } from "next";
import Link from "next/link";
import { stories, storyFilters } from "@/data/stories";
import { StoryIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StoriesFilterGrid } from "@/components/sections/stories-filter-grid";
import { Quote } from "lucide-react";

const featuredStory = stories[0]!;
const otherStories = stories.slice(1);

export const metadata: Metadata = {
  title: "Church Stories",
  description: "Real churches using Relius to care well, organize volunteers, and plan ministry with confidence.",
  openGraph: {
    title: "Churches using Relius",
    description: "Real churches, real outcomes, and honest lessons from ministry partners.",
  },
};

export default function StoriesPage() {
  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Stories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">Churches using Relius</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Real churches, real people, real ministry moments. These stories capture how Relius serves teams who want software that feels pastoral.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gradient" asChild>
                <Link href="/contact">Start your story</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact?intent=story">Share your story</Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/30 bg-primary-50/40 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-primary-600">Average response time</p>
                <p className="text-2xl font-bold text-slate-900">11 hours</p>
                <p className="text-sm text-slate-600">Care requests acknowledged within a half day.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-slate-500">Volunteer retention</p>
                <p className="text-2xl font-bold text-slate-900">+19%</p>
                <p className="text-sm text-slate-600">Average improvement across featured churches.</p>
              </div>
            </div>
          </div>
          <Card className="border border-slate-200 shadow-lg">
            <CardContent className="p-6 space-y-6">
              <StoryIllustration type="community" className="w-full" title="Community gathering illustration" />
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-accent" />
                <div>
                  <p className="text-lg text-slate-700 italic">
                    "The biggest surprise is how pastoral Relius feels. Our teams see real people, not just fields."
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mt-3">Churches across 17 states</p>
                  <p className="text-sm text-slate-500">Beta partners since Spring 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">Featured story</span>
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{featuredStory.size}</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{featuredStory.church}</h2>
              <p className="text-lg text-slate-600">{featuredStory.summary}</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {featuredStory.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <p className="text-xs uppercase text-slate-500">{metric.label}</p>
                    <p className="text-lg font-semibold text-slate-900">{metric.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold text-slate-800">Challenge</p>
                <p>{featuredStory.challengeDetail}</p>
                <p className="font-semibold text-slate-800">How Relius helped</p>
                <ul className="list-disc pl-5 space-y-1">
                  {featuredStory.whyRelius.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/stories/${featuredStory.slug}`}
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
              >
                Read the full story →
              </Link>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6">
              <StoryIllustration type={featuredStory.illustration} title={`${featuredStory.church} illustration`} />
              <blockquote className="mt-6 text-slate-700 italic leading-relaxed">
                "{featuredStory.quote.text}"
              </blockquote>
              <p className="text-sm font-semibold text-slate-900 mt-3">{featuredStory.quote.person}</p>
              <p className="text-sm text-slate-500">{featuredStory.quote.role}</p>
            </div>
          </div>
        </section>

        <StoriesFilterGrid stories={otherStories} filters={storyFilters} />

        <section className="text-center rounded-3xl border border-primary/20 bg-gradient-to-br from-primary-50 to-white p-12 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">Ready to write yours?</p>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Start (or share) your Relius story</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you need a calm place to organize ministry or you have a story to encourage other churches, we&apos;d love to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Start your story</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact?intent=story">Share what God is doing</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">Made for churches by people who care.</p>
        </section>
      </div>
    </div>
  );
}
