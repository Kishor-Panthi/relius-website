import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function SocialProof() {
  const stats = [
    "Built for churches 50–5,000+ members",
    "Trusted by growing congregations",
    "Modern technology meets ministry",
  ];

  const testimonials = [
    {
      quote: "Relius has transformed how we manage our church. The AI features save us countless hours every week.",
      author: "Pastor James Miller",
      church: "Grace Community Church",
      size: "450 members",
    },
    {
      quote: "The event scheduling and volunteer management features are game-changers. Everything just works together.",
      author: "Sarah Thompson",
      church: "New Life Fellowship",
      size: "850 members",
    },
    {
      quote: "Finally, a church management system that doesn't feel like it's from the 90s. Our whole team loves it.",
      author: "David Chen",
      church: "City Church",
      size: "1,200 members",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {stats.map((stat, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {stat}
              </Badge>
            ))}
          </div>
          <h2 className="text-balance mb-4">Trusted by Church Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what pastors and church administrators are saying about Relius
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.church}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.size}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
