import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary to-primary-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(212,175,55,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-balance mb-6 text-white">
          See Relius in Action
        </h2>
        <p className="text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          Discover how Relius can help your church save time, increase engagement, and focus on what matters most—your people.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-gray-50 group shadow-lg"
          >
            <Link href="/contact">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-2 border-white text-white hover:bg-white/10"
          >
            <Link href="/contact">Join the Beta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
