import { cn } from "@/lib/utils";
import { Quote, Clock, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { MigrationTestimonial } from "@/data/migrations";

interface MigrationTestimonialsProps {
  testimonials: MigrationTestimonial[];
  className?: string;
}

export function MigrationTestimonials({ testimonials, className }: MigrationTestimonialsProps) {
  return (
    <div className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-3", className)}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <Quote className="h-8 w-8 text-slate-200 mb-4" />
          <blockquote className="text-slate-700 mb-6 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="border-t border-slate-100 pt-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold text-sm">
                {testimonial.person.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.person}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
                <p className="text-sm text-slate-500">{testimonial.church}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                <Clock className="h-3 w-3" />
                {testimonial.migrationTime}
              </Badge>
            </div>

            {testimonial.dataPreserved.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1">
                  <Database className="h-3 w-3" />
                  Data Preserved
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  {testimonial.dataPreserved.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Single testimonial variant for platform-specific pages
interface SingleMigrationTestimonialProps {
  testimonial: MigrationTestimonial;
  className?: string;
}

export function SingleMigrationTestimonial({ testimonial, className }: SingleMigrationTestimonialProps) {
  return (
    <div className={cn("bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-10", className)}>
      <Quote className="h-12 w-12 text-accent-200 mb-6" />
      <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed font-medium">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-accent-100 flex items-center justify-center text-accent-600 font-bold text-lg">
            {testimonial.person.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-lg">{testimonial.person}</p>
            <p className="text-slate-500">{testimonial.role}</p>
            <p className="text-slate-500">{testimonial.church}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-accent-500" />
            <span className="text-slate-600">Migration time:</span>
            <span className="font-semibold text-slate-900">{testimonial.migrationTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {testimonial.dataPreserved.map((item, i) => (
              <Badge key={i} variant="success" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
