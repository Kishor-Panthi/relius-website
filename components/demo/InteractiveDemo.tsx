'use client';

import { DemoBrowserFrame } from './DemoBrowserFrame';
import { DemoApp } from './DemoApp';

export function InteractiveDemo() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-grid opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container-width relative z-10">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 border border-accent-200 text-accent-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Interactive Demo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Experience Relius in action
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the platform that helps churches serve their communities better. Click around to see how it works.
          </p>
        </div>

        {/* Demo container */}
        <div className="max-w-6xl mx-auto">
          <DemoBrowserFrame>
            <DemoApp />
          </DemoBrowserFrame>
        </div>

        {/* Hint text */}
        <p className="text-center mt-6 text-sm text-slate-500">
          Try clicking on sidebar items to navigate between views. Add new people or groups using the buttons.
        </p>
      </div>
    </section>
  );
}
