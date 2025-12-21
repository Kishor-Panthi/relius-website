"use client";

import { useState } from "react";
import Link from "next/link";
import { UseCase, UseCaseFilterOptions } from "@/data/use-cases";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

type UseCasesFilterGridProps = {
  useCases: UseCase[];
  filters: UseCaseFilterOptions;
};

export function UseCasesFilterGrid({ useCases, filters }: UseCasesFilterGridProps) {
  const [sizeFilter, setSizeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredUseCases = useCases.filter((useCase) => {
    const matchesSize = sizeFilter === "all" || useCase.sizeCategory === sizeFilter;
    const matchesCategory = categoryFilter === "all" || useCase.category === categoryFilter;
    return matchesSize && matchesCategory;
  });

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-900">More Use Cases</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-slate-600 self-center mr-2">Church Size:</span>
            <Badge
              variant={sizeFilter === "all" ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSizeFilter("all")}
            >
              All Sizes
            </Badge>
            {filters.sizes.map((size) => (
              <Badge
                key={size}
                variant={sizeFilter === size ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSizeFilter(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-slate-600 self-center mr-2">Category:</span>
            <Badge
              variant={categoryFilter === "all" ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setCategoryFilter("all")}
            >
              All
            </Badge>
            {filters.categories.map((category) => (
              <Badge
                key={category}
                variant={categoryFilter === category ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setCategoryFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUseCases.map((useCase) => (
          <Link key={useCase.slug} href={`/use-cases/${useCase.slug}`}>
            <Card className="h-full border border-slate-200 hover:border-primary-200 hover:shadow-md transition-all">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {useCase.churchSize}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {useCase.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">{useCase.subtitle}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Challenge</p>
                    <p className="text-sm text-slate-600 line-clamp-2">{useCase.challenge}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                    Explore use case <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredUseCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-600">No use cases match your current filters.</p>
          <button
            onClick={() => {
              setSizeFilter("all");
              setCategoryFilter("all");
            }}
            className="mt-2 text-primary-600 font-medium hover:text-primary-700"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}
