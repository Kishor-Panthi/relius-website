'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DemoCollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  isIconOnly?: boolean;
}

export function DemoCollapsible({
  title,
  children,
  defaultExpanded = false,
  isIconOnly = false,
}: DemoCollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="pt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        title={title}
        className={`
          w-full flex items-center mb-2 px-3 py-1.5 rounded-md
          text-xs font-semibold uppercase tracking-wider text-gray-500
          hover:bg-gray-100 transition-colors
          ${isIconOnly ? 'justify-center lg:justify-between' : 'justify-between'}
        `}
      >
        <span className={isIconOnly ? 'hidden lg:inline' : ''}>{title}</span>
        <ChevronDown
          className={`
            h-3.5 w-3.5 text-gray-400 transition-transform duration-200
            ${isExpanded ? 'rotate-180' : ''}
          `}
        />
      </button>

      <div
        className={`
          overflow-hidden transition-all duration-200 ease-in-out
          ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="space-y-1">
          {children}
        </div>
      </div>
    </div>
  );
}
