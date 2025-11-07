import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Calendar,
  DollarSign,
  UserCheck,
  ClipboardCheck,
  LayoutDashboard,
  FileText,
  Newspaper,
  Languages,
  Heart,
  TrendingUp,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import {
  WorshipCelebrationIllustration,
  VolunteerCoordinationIllustration,
  GrowthPlanningIllustration,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "How Relius Works",
  description: "Explore the ministry workflows Relius supports-from people care to planning, volunteers, giving, and AI helpers that sound pastoral.",
};

export default function FeaturesPage() {
  const coreFeatures = [
    {
      id: "people",
      icon: Heart,
      title: "Serve Your People",
      description: "Know your members better so you can care for them better. Track pastoral care, prayer requests, and life events all in one place.",
      highlights: [
        "Complete member profiles with families and relationships",
        "Track prayer requests and pastoral care visits",
        "Remember birthdays, anniversaries, and milestones",
        "See engagement history at a glance",
        "Identify members who might need extra support",
        "Maintain confidentiality with privacy controls",
      ],
    },
    {
      id: "groups",
      icon: Users,
      title: "Equip Your Teams",
      description: "Coordinate volunteers, organize groups, and communicate effortlessly. Everyone knows their role and feels connected.",
      highlights: [
        "Schedule volunteers without the back-and-forth",
        "Manage small groups and ministry teams",
        "Send targeted messages to the right people",
        "Track participation and prevent burnout",
        "Match volunteers to roles that fit their gifts",
      ],
    },
    {
      id: "events",
      icon: Calendar,
      title: "Plan Your Ministry",
      description: "From weekly services to annual events, manage everything seamlessly. Set it up once, and Relius remembers.",
      highlights: [
        "Create events with all the details you need",
        "Set up recurring services automatically",
        "Avoid scheduling conflicts before they happen",
        "Send reminders so people actually show up",
        "Coordinate volunteers for every event",
        "Track attendance and follow up with absentees",
        "Sync with your personal calendar",
      ],
    },
    {
      id: "giving",
      icon: TrendingUp,
      title: "Grow Your Impact",
      description: "Track giving with transparency, understand engagement trends, and make informed decisions that strengthen your ministry.",
      highlights: [
        "See giving patterns and trends at a glance",
        "Send thank-you messages that feel personal",
        "Generate year-end statements effortlessly",
        "Support multiple funds and campaigns",
        "Identify donors who might need a check-in",
        "Online giving integration coming soon",
      ],
    },
    {
      id: "checkins",
      icon: ClipboardCheck,
      title: "Welcome People Well",
      description: "Fast, secure check-in for services and events. Kids are safe, parents have peace of mind, and you know who's present.",
      highlights: [
        "Quick check-in with kiosks, mobile, or QR codes",
        "Child security features for kids' ministry",
        "See attendance trends over time",
        "Identify first-time guests automatically",
        "Follow up with people who haven't been in a while",
      ],
    },
    {
      id: "dashboard",
      icon: LayoutDashboard,
      title: "Stay Informed",
      description: "Get a complete view of your church at a glance. See what's working, what needs attention, and take action quickly.",
      highlights: [
        "See attendance and engagement at a glance",
        "Track trends across all your ministries",
        "Get AI-powered insights and recommendations",
        "Quick access to common tasks",
      ],
    },
  ];

  const aiFeatures = [
    {
      id: "sermon-generator",
      icon: FileText,
      title: "Sermon Preparation",
      description: "Get a head start on sermon prep. AI helps you draft outlines and develop ideas, so you can spend more time refining your message.",
      highlights: [
        "Start with scripture, topics, or themes",
        "Generate outlines in your preaching style",
        "Get illustration suggestions and discussion questions",
        "Maintain your unique voice and theology",
        "Save time on structure, focus on substance",
        "Export to Word or PDF when ready",
      ],
    },
    {
      id: "content-studio",
      icon: Newspaper,
      title: "Extend Your Message",
      description: "Turn one sermon into a week of content. Create emails, social posts, study guides, and devotionals without starting from scratch.",
      highlights: [
        "Transform sermon notes into newsletters",
        "Generate social media posts automatically",
        "Create small group discussion guides",
        "Develop daily devotionals for your congregation",
        "Adapt content for youth or kids' ministry",
        "Reach people throughout the week, not just Sunday",
      ],
    },
    {
      id: "translation",
      icon: Languages,
      title: "Break Language Barriers",
      description: "Welcome everyone by providing live captions and translations. No one misses the message because of language.",
      highlights: [
        "Live captions during services",
        "Translate into 50+ languages in real-time",
        "Simple QR code access for attendees",
        "Recorded services get subtitles automatically",
        "Download transcripts for later use",
      ],
    },
    {
      id: "pastoral-care",
      icon: Heart,
      title: "Care for People Better",
      description: "Never miss an opportunity to support someone in need. AI helps you spot patterns and remember to follow up.",
      highlights: [
        "Organize prayer requests in one place",
        "Get alerts when someone might need extra care",
        "Identify members who haven't engaged recently",
        "Automatic reminders to follow up",
        "Maintain confidentiality and privacy",
        "Assign care team members easily",
      ],
    },
    {
      id: "donations-manager",
      icon: DollarSign,
      title: "Understand Giving Patterns",
      description: "See trends before they become problems. Identify donors who might need encouragement or celebration.",
      highlights: [
        "Forecast giving to plan ministry budgets",
        "Spot donors who might be drifting away",
        "Know the best times to communicate",
        "Get suggestions for re-engagement",
        "Personalize thank-you messages",
        "Celebrate milestones and generosity",
      ],
    },
    {
      id: "insights",
      icon: BarChart3,
      title: "Make Informed Decisions",
      description: "Get recommendations based on your church's patterns. Plan volunteers, resources, and outreach with confidence.",
      highlights: [
        "Predict attendance for better planning",
        "See engagement trends across ministries",
        "Optimize volunteer schedules",
        "Get resource planning recommendations",
        "Understand seasonal patterns in your church",
        "Prioritize what needs attention most",
      ],
    },
  ];

  return (
    <div className="py-16 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center mb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-3">Ministry operating system</p>
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-slate-900 text-balance">Everything Relius does to serve your church</h1>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Relius brings people, services, giving, and communication into one warm, ministry-focused home. Plan with confidence, care with clarity, and never lose track of what matters.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Unified calendar + volunteer schedules",
                "Pastoral care and prayer follow-up",
                "Insights that feel pastoral",
                "AI helpers that sound like you",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent-500" />
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="gradient" asChild>
                <Link href="/contact">Walk through the platform</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/stories">See church stories</Link>
              </Button>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute inset-x-10 top-8 h-32 bg-primary-50/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            <WorshipCelebrationIllustration className="relative z-10 w-full" title="Coordinated worship services" />
            <div className="relative z-10 mt-6 grid gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-slate-500 tracking-wide">Upcoming Sunday</p>
                  <p className="text-lg font-semibold text-slate-900">3 services | 9 teams ready</p>
                </div>
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">No conflicts</span>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary-50/40 px-4 py-3">
                <p className="text-xs uppercase text-primary-700 tracking-wide">Volunteer health</p>
                <p className="text-2xl font-bold text-slate-900">96%</p>
                <p className="text-sm text-slate-600">Serving rotations balanced this month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex items-center gap-5 mb-12">
            <div className="hidden md:block w-32">
              <VolunteerCoordinationIllustration className="h-24 w-full" title="Volunteer coordination illustration" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">Core workflows</p>
              <h2 className="text-3xl font-bold text-slate-900">Ministry essentials</h2>
            </div>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <div className="flex flex-col gap-6 mb-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="hidden md:block w-32">
                <GrowthPlanningIllustration className="h-24 w-full" title="Planning illustration" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 mb-2">Optional helpers</p>
                <div className="flex items-center gap-3">
                  <h2 id="ai" className="text-3xl font-bold text-slate-900">Work smarter with AI</h2>
                  <Badge variant="default" className="text-xs">Optional Add-on</Badge>
                </div>
              </div>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl">
              AI features that save you hours every week, so you can spend more time on what matters. They amplify ministry-they never replace it.
            </p>
          </div>

          <div className="space-y-12">
            {aiFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} id={feature.id} className="scroll-mt-24">
                  <Card className="border-2 border-primary/30 bg-gradient-to-br from-white to-accent-50/30">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-slate-500">{feature.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-white border border-slate-200 rounded-2xl p-12 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">See how it all works together</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s talk about your church&apos;s unique needs. We&apos;ll show you how Relius can help you spend less time on logistics and more time on ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
          <p className="text-sm text-slate-500 mt-6">No pressure, just answers.</p>
        </div>
      </div>
    </div>
  );
}
