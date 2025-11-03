import { Sparkles, Zap, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyRelius() {
  const features = [
    {
      icon: Sparkles,
      title: "All-in-One Platform",
      description: "Replace multiple tools with one modern ChMS. Manage people, groups, events, giving, volunteers, and more.",
    },
    {
      icon: Zap,
      title: "AI-Powered Workflows",
      description: "Generate sermons, create content, provide pastoral care, and gain insights—all powered by AI that saves hours every week.",
    },
    {
      icon: Users,
      title: "Modern, Intuitive UI",
      description: "Beautiful, easy-to-use interface that your entire team will love. No clunky legacy software.",
    },
    {
      icon: TrendingUp,
      title: "Scales with You",
      description: "Built for churches from 50 to 5,000+ members. Grow without outgrowing your tools.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-balance mb-4">Why Choose Relius?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The complete church management platform designed for the modern church
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-primary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
