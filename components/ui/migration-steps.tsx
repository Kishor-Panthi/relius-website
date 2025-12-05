import * as React from "react";
import { cn } from "@/lib/utils";
import { Check, Upload, Columns, Users, Loader2, FileCheck } from "lucide-react";

export type MigrationStep = {
  step: number;
  title: string;
  description: string;
};

const stepIcons = [
  { icon: Check, color: "bg-blue-100 text-blue-600" },
  { icon: Upload, color: "bg-purple-100 text-purple-600" },
  { icon: Columns, color: "bg-amber-100 text-amber-600" },
  { icon: Users, color: "bg-emerald-100 text-emerald-600" },
  { icon: Loader2, color: "bg-rose-100 text-rose-600" },
  { icon: FileCheck, color: "bg-indigo-100 text-indigo-600" },
];

interface MigrationStepsProps {
  steps: MigrationStep[];
  className?: string;
  variant?: "horizontal" | "vertical";
}

export function MigrationSteps({ steps, className, variant = "horizontal" }: MigrationStepsProps) {
  if (variant === "vertical") {
    return (
      <div className={cn("space-y-6", className)}>
        {steps.map((step, index) => {
          const IconConfig = stepIcons[index] || stepIcons[0];
          const Icon = IconConfig.icon;
          return (
            <div key={step.step} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110",
                    IconConfig.color
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full min-h-[40px] bg-slate-200 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={cn("", className)}>
      {/* Desktop horizontal layout */}
      <div className="hidden lg:grid lg:grid-cols-6 gap-4">
        {steps.map((step, index) => {
          const IconConfig = stepIcons[index] || stepIcons[0];
          const Icon = IconConfig.icon;
          return (
            <div key={step.step} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[60%] w-full h-0.5 bg-slate-200" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 relative z-10",
                    IconConfig.color
                  )}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Step {step.step}
                </span>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-snug">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile/tablet grid layout */}
      <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-6">
        {steps.map((step, index) => {
          const IconConfig = stepIcons[index] || stepIcons[0];
          const Icon = IconConfig.icon;
          return (
            <div key={step.step} className="flex flex-col items-center text-center group">
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110",
                  IconConfig.color
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Step {step.step}
              </span>
              <h3 className="text-sm font-semibold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-snug">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
