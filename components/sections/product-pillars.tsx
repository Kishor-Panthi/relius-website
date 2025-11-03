import Link from "next/link";
import { Users, Calendar, DollarSign, UserCheck, ClipboardCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ProductPillars() {
  const pillars = [
    {
      icon: Users,
      title: "People & Groups",
      description: "One directory. Rich profiles. Clear timelines.",
      href: "/features#people",
    },
    {
      icon: Calendar,
      title: "Events & Calendar",
      description: "Plan once, avoid conflicts, keep everyone in the loop.",
      href: "/features#events",
    },
    {
      icon: DollarSign,
      title: "Giving & Donors",
      description: "Understand trends, thank faster, grow generosity.",
      href: "/features#giving",
    },
    {
      icon: UserCheck,
      title: "Volunteers & Services",
      description: "Right people, right roles, right times.",
      href: "/features#volunteers",
    },
    {
      icon: ClipboardCheck,
      title: "Check-ins & Attendance",
      description: "Secure, fast, and kid-friendly.",
      href: "/features#checkins",
    },
    {
      icon: Sparkles,
      title: "AI Studio",
      description: "Draft sermons, repurpose content, care at scale.",
      href: "/features#ai",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4">Everything You Need to Run Your Church</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six powerful modules working together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link key={pillar.title} href={pillar.href}>
                <Card className="h-full border-2 hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      {pillar.title}
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardTitle>
                    <CardDescription className="text-base">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
