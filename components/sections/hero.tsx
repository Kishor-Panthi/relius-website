import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,61,145,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-semibold text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Now in Beta
        </div>

        <h1 className="text-balance mb-6">
          Run your church with clarity. Let AI handle the busywork.
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Relius combines a complete Church Management System with built-in AI for sermons, events, giving, volunteers, and care—so leaders can focus on people.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="primary" size="lg" asChild className="group">
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-gold/20 to-primary/20 rounded-3xl blur-3xl opacity-30" />
          <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-2 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-primary-50 to-gray-100 rounded-xl flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <p className="text-sm font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
