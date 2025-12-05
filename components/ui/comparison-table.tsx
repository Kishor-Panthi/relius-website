import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, X, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export type ComparisonFeature = {
  feature: string;
  relius: boolean | string;
  competitor: boolean | string;
  isAIPowered?: boolean;
};

interface ComparisonTableProps {
  features: ComparisonFeature[];
  competitorName: string;
  className?: string;
}

function FeatureValue({ value, isAIPowered }: { value: boolean | string; isAIPowered?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex items-center justify-center gap-1">
        <Check className="h-5 w-5 text-emerald-500" />
        {isAIPowered && (
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            AI
          </Badge>
        )}
      </div>
    ) : (
      <X className="h-5 w-5 text-slate-300 mx-auto" />
    );
  }
  return (
    <span className="text-sm text-slate-600 flex items-center justify-center gap-1">
      {value}
      {isAIPowered && (
        <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs ml-1">
          <Sparkles className="h-3 w-3 mr-1" />
          AI
        </Badge>
      )}
    </span>
  );
}

export function ComparisonTable({ features, competitorName, className }: ComparisonTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      {/* Desktop Table */}
      <table className="w-full hidden md:table">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
            <th className="text-center py-4 px-4 font-semibold text-accent-600 bg-accent-50/50 rounded-t-lg">
              Relius
            </th>
            <th className="text-center py-4 px-4 font-semibold text-slate-600">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={feature.feature}
              className={cn(
                "border-b border-slate-100 transition-colors hover:bg-slate-50",
                index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
              )}
            >
              <td className="py-4 px-4 text-slate-700">{feature.feature}</td>
              <td className="py-4 px-4 bg-accent-50/30">
                <FeatureValue value={feature.relius} isAIPowered={feature.isAIPowered} />
              </td>
              <td className="py-4 px-4">
                <FeatureValue value={feature.competitor} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {features.map((feature) => (
          <div
            key={feature.feature}
            className="bg-white border border-slate-200 rounded-lg p-4"
          >
            <div className="font-medium text-slate-900 mb-3 flex items-center gap-2">
              {feature.feature}
              {feature.isAIPowered && (
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex flex-col items-center p-2 bg-accent-50 rounded-md">
                <span className="text-xs text-slate-500 mb-1">Relius</span>
                <FeatureValue value={feature.relius} />
              </div>
              <div className="flex flex-col items-center p-2 bg-slate-50 rounded-md">
                <span className="text-xs text-slate-500 mb-1">{competitorName}</span>
                <FeatureValue value={feature.competitor} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
