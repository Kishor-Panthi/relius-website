import Link from "next/link";
import { ArrowRight, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MIGRATION_URLS } from "@/lib/migration-urls";

const platforms = [
  {
    name: "Planning Center",
    slug: "planning-center",
    dataTypes: "People & Donations",
  },
  {
    name: "ChurchTrac",
    slug: "churchtrac",
    dataTypes: "People & Donations",
  },
  {
    name: "Tithe.ly",
    slug: "tithely",
    dataTypes: "People, Donations, Tags & More",
  },
];

export function MigrationCallout() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-50">
      <div className="container-width">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-sm font-medium mb-6">
            <RefreshCw className="h-4 w-4 text-accent-500" />
            Easy Migration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Already using church software?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Bring everything with you. Our guided migration wizard makes switching simple, and your entire history comes along.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {platforms.map((platform) => (
            <Link
              key={platform.slug}
              href={`${MIGRATION_URLS.HUB}/${platform.slug}`}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-accent-600 transition-colors">
                  {platform.name}
                </h3>
                <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-accent-500 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Import your {platform.dataTypes}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 rounded-full">
                  Average: 2-3 hours
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link href={MIGRATION_URLS.HUB}>
              See all migration guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Your data stays yours</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Nothing gets lost</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Free migration assistance</span>
          </div>
        </div>
      </div>
    </section>
  );
}
