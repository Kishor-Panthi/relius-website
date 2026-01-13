'use client';

import { Lock, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface DemoBrowserFrameProps {
  children: React.ReactNode;
}

export function DemoBrowserFrame({ children }: DemoBrowserFrameProps) {
  return (
    <div className="relative">
      {/* Subtle glow behind frame */}
      <div className="absolute -inset-4 bg-gradient-to-b from-accent-100/30 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Browser frame */}
      <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white">
        {/* Browser chrome */}
        <div className="bg-gray-100 border-b border-gray-200">
          {/* Top bar with traffic lights and address bar */}
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3">
            {/* Traffic lights */}
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: '#FEBC2E' }} />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: '#28C840' }} />
            </div>

            {/* Navigation buttons - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1 text-gray-400">
              <button className="p-1 hover:bg-gray-200 rounded transition-colors" aria-label="Back">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded transition-colors" aria-label="Forward">
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded transition-colors" aria-label="Refresh">
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Address bar */}
            <div className="flex-1 flex items-center gap-2 bg-white rounded-lg px-2.5 sm:px-3 py-1.5 shadow-sm border border-gray-200">
              <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-700 truncate">
                app.relius.ai
              </span>
            </div>
          </div>
        </div>

        {/* App content area - responsive height */}
        <div className="h-[420px] sm:h-[520px] lg:h-[600px] overflow-hidden bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}
