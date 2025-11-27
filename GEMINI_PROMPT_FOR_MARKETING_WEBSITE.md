# RELIUS MARKETING WEBSITE - COMPLETE PRODUCT CONTEXT & CONTENT GENERATION INSTRUCTIONS

## YOUR ROLE
You are helping build out the marketing website for Relius (relius.ai), an AI-powered church management system built with React/Next.js. You have deep knowledge of the product and will generate **full React components** with real, substantive content for placeholder pages. You will also suggest visual assets (images, illustrations, icons) for each section.

## TECH STACK
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** React functional components with TypeScript
- **Icons:** Lucide React (already installed)
- **Links:** Use Next.js `<Link>` component for internal navigation

---

## SECTION 1: COMPLETE PRODUCT KNOWLEDGE

### What is Relius?
Relius is a next-generation church management system (ChMS) that combines comprehensive member management with AI-powered features. Unlike traditional ChMS platforms that are static data repositories, Relius actively assists church leaders through intelligent automation and AI insights.

### Core Problem Solved
1. **Information Fragmentation** - Multiple disconnected systems for members, donations, events, pastoral care
2. **Time-Consuming Administration** - Manual data entry, event management, volunteer scheduling
3. **Lost Institutional Knowledge** - Prayer requests and pastoral care notes forgotten/unorganized
4. **Ineffective Giving Management** - Limited donor insights and campaign tracking
5. **Content Creation Bottleneck** - Pastors spending hours creating sermon plans and promotional content
6. **Communication Gaps** - Difficulty reaching members across multiple channels
7. **Lack of Data-Driven Insights** - No visibility into church growth, giving trends, engagement metrics

### Target Audience
**Primary: Mid-Size Churches (200-2,000 members)**
- Growth-focused churches needing better organization
- Budget-conscious (appreciate lower pricing than incumbents)
- Tech-forward leadership wanting modern tools
- Annual church tech budget: $2,000-$8,000

**Key User Roles:**
- Lead Pastor/Church Director - Strategy, insights, sermon planning
- Admin Manager - Member management, event coordination
- Finance Manager - Donation tracking, financial reports, campaigns
- Volunteer Coordinator - Scheduling, team management
- Communications Director - Content creation, multi-channel marketing
- Ministry Leaders - Group management, event planning

---

## SECTION 2: COMPLETE FEATURE LIST

### CORE ChMS FEATURES

**1. Member Management**
- Comprehensive member profiles (contact info, demographics, join date)
- Advanced search with 5+ filtering criteria (role, group, email/phone presence, join date range)
- Bulk operations (add/remove multiple members)
- Person notes system - categorized pastoral care observations
- Life milestones tracking (baptism, membership, anniversaries)
- Soft deletes - recoverable data for compliance
- Family relationship mapping

**2. Group Management**
- Small group, class, committee creation and tracking
- Group member management with bulk operations
- Group-level messaging and updates
- Group attendance tracking

**3. Event Management**
- Full event calendar with recurring events
- RSVP tracking and attendance
- QR code check-in system
- Event resource booking
- Volunteer assignments per event
- Automated reminders
- Conflict detection (double-booked volunteers/resources)

**4. Donation & Financial Management**
- Donation tracking and categorization
- Multiple donation types support
- Donor analytics and insights
- Giving trend analysis
- Campaign management with progress tracking
- CSV batch import for giving data
- Digital receipts
- Payment processing via Stripe

**5. Volunteer Management**
- Volunteer scheduling and shift management
- Position templates for common roles
- Volunteer skill/availability matching
- Team assignments
- Bulk volunteer operations

**6. Room & Facility Management**
- Room inventory and availability
- Room rental booking and payments
- Resource conflict detection

### AI-POWERED FEATURES (Key Differentiator)

**1. AI Prayer Request Analysis**
- Sentiment analysis (0-100 scale)
- Automatic categorization (health, grief, anxiety, family, financial, thanksgiving)
- Urgency level detection (low, medium, high, critical)
- Key theme extraction
- Suggested pastoral responses
- 30-day intelligent caching (75% cost reduction)

**2. Sermon Planner (Gemini 2.5 Flash)**
- AI-generated sermon outlines using thinking mode
- Scripture passage suggestions
- Discussion question generation
- Iterative outline refinement based on pastor feedback
- Sermon series planning (multi-week coordination)
- Estimated duration calculation

**3. Content Studio - Multi-Channel Generation**
- Email content generation (subject lines, preview text, body)
- Platform-specific social media posts:
  - Facebook (engagement-focused)
  - Instagram (visual content)
  - Twitter/X (concise updates)
  - LinkedIn (professional tone)
  - Newsletter sections
- Tone customization (warm, formal, casual, urgent, encouraging)
- A/B testing support
- One sermon → 5+ content pieces

**4. AI Insights & Recommendations**
- Automated follow-up suggestions
- Volunteer matching recommendations
- Giving pattern insights
- Attendance trend analysis
- Member engagement predictions

**5. Translation & Localization**
- Google Cloud Translation API integration
- Support for 10+ languages
- Character quota management
- Automatic language detection

### PRICING MODEL

**BASIC - $29/month**
- Up to 100 members
- Core ChMS features (People, Groups, Events, Donations)
- Basic reporting
- Email/SMS communication
- No AI features

**PRO - $79/month** (Primary target tier)
- Up to 500 members
- Everything in Basic, plus:
- AI Sermon Planner
- Content Studio (multi-channel)
- Prayer request AI analysis
- AI Insights & recommendations
- Translation (limited quota)
- Volunteer matching AI
- Advanced analytics

**ENTERPRISE - $199+/month**
- Unlimited members
- Everything in Pro, plus:
- Higher AI quotas
- Multi-church support
- Custom integrations
- Dedicated support
- SLA guarantees

---

## SECTION 3: COMPETITIVE POSITIONING

| Feature | Relius | Planning Center | Church Community Builder |
|---------|--------|-----------------|--------------------------|
| AI Content Generation | Yes (Gemini 2.5) | No | No |
| Multi-Channel Content | Yes | No | Limited |
| Prayer AI Analysis | Yes | No | No |
| Sermon Planning AI | Yes | No | No |
| Starting Price | $29/mo | $199/mo | $99/mo |
| Modern Tech Stack | React 19, FastAPI | Legacy | Legacy |
| Cloud-Native | Yes | Legacy | Legacy |

**Key Differentiators:**
1. AI-first architecture (not bolted on)
2. 70% lower starting price than Planning Center
3. Multi-channel content generation (unique in market)
4. Modern, intuitive interface
5. Cloud-native scalability

---

## SECTION 4: EXISTING WEBSITE STRUCTURE

**Current Pages:**
- Homepage (/) - Hero, value props, features overview, testimonials
- Features (/features) - Feature category pages
- AI (/ai) - AI features showcase
- Pricing (/pricing) - Pricing tiers
- Stories (/stories) - Customer testimonials
- Resources (/resources) - Guides, checklists, templates, playbooks (PLACEHOLDER)
- Blog (/blog) - Articles and insights (PLACEHOLDER)

**Resource Types Shown (need content):**
- GUIDE: "Switching from another system"
- CHECKLIST: "Setting up your church in Relius"
- TEMPLATE: "Training your team"
- PLAYBOOK: "Volunteer recruitment strategies"

**Blog Categories (need content):**
- MINISTRY INSIGHT
- PERSPECTIVE
- BEST PRACTICE

**Existing Blog Titles (need full articles):**
- "5 ways to prevent volunteer burnout (from churches doing it well)"
- "Why most church software fails (and how to pick better)"
- "Making first-time guests feel welcome: practical tips"
- "Running a church of 200 vs 2,000: what actually changes"

---

## SECTION 5: CONTENT GENERATION INSTRUCTIONS

### For Resource Pages

**GUIDE: "Switching from another system"**
Generate a comprehensive migration guide covering:
- Pre-migration checklist (what data to export from old system)
- Questions to ask your previous provider
- Data cleaning best practices
- Step-by-step import process into Relius
- Common migration pitfalls and how to avoid them
- Timeline expectations (realistic: 1-2 weeks)
- Training team on new system

**CHECKLIST: "Setting up your church in Relius"**
Generate a detailed setup checklist:
- Account creation and initial configuration
- Importing or entering member data
- Setting up groups and ministries
- Configuring volunteer positions
- Setting up donation categories
- Creating first events
- Configuring user permissions/roles
- Testing check-in system
- Connecting Stripe for payments
- Inviting staff members

**TEMPLATE: "Training your team"**
Generate training materials:
- Session 1: Overview and navigation (30 min)
- Session 2: Member management deep dive (45 min)
- Session 3: Events and check-ins (30 min)
- Session 4: Donations and reports (30 min)
- Session 5: AI features (Sermon Planner, Content Studio) (45 min)
- Talking points for change management
- FAQ document for staff
- Quick reference cards for common tasks

**PLAYBOOK: "Volunteer recruitment strategies"**
Generate actionable playbook:
- Using Relius to identify potential volunteers
- Creating volunteer position templates
- Automated outreach workflows
- Tracking volunteer journey from interest to active
- Recognition and retention strategies
- Using AI to match volunteers to roles
- Measuring volunteer program health

### For Blog Articles

**"5 ways to prevent volunteer burnout"**
- Introduction: The hidden cost of volunteer burnout
- Way 1: Smart scheduling (don't over-schedule same people)
- Way 2: Match skills to roles (Relius AI matching)
- Way 3: Recognition rhythms (monthly appreciation)
- Way 4: Clear expectations and training
- Way 5: Regular check-ins and feedback loops
- How Relius helps: Scheduling visibility, workload tracking, automated appreciation reminders

**"Why most church software fails"**
- The spreadsheet trap (software that creates more work)
- Feature bloat vs. focused functionality
- The training cliff (too complex to adopt)
- Integration nightmares
- Cost surprises (hidden fees)
- How to evaluate software through a pastoral lens
- What makes Relius different (ministry-first design)

**"Making first-time guests feel welcome"**
- The 7-minute window (first impressions matter)
- Digital check-in as welcome (not barrier)
- Automated but personal follow-up (within 24 hours)
- Guest pathway: Visit → Connect → Belong
- Using Relius for guest tracking and follow-up
- Sample follow-up email templates
- Measuring guest retention

**"Running a church of 200 vs 2,000"**
- What changes at scale (systems, staffing, communication)
- The delegation shift (pastor can't know everyone)
- Small group importance increases
- Data-driven decisions become essential
- Communication becomes multi-channel
- How Relius scales with you
- Case study examples

### Content Style Guidelines
- **Tone:** Warm, practical, ministry-focused (not salesy)
- **Length:** Blog posts 1,500-2,500 words; Resources 2,000-4,000 words
- **Format:** Use headers, bullet points, practical examples
- **Voice:** "We" for Relius team, "You" for reader
- **Call-to-action:** Soft CTAs ("See how Relius can help" not "BUY NOW")
- **Include:** Real scenarios churches face, practical tips, Relius features woven in naturally

---

## SECTION 6: OUTPUT FORMAT - REACT/NEXT.JS COMPONENTS

Generate complete, production-ready React components using this format:

### Component Structure
```tsx
// File: app/resources/[slug]/page.tsx or app/blog/[slug]/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Clock, Calendar, Users, Sparkles } from 'lucide-react';

// Metadata for Next.js
export const metadata = {
  title: 'Page Title | Relius',
  description: 'Meta description for SEO',
};

export default function PageName() {
  return (
    <article className="...">
      {/* Content here */}
    </article>
  );
}
```

### Visual Asset Suggestions Format
For each major section, include a comment block like:
```tsx
{/*
  VISUAL ASSET SUGGESTION:
  - Type: Illustration / Photo / Icon / Screenshot
  - Description: [Detailed description of what the image should show]
  - Style: Warm, ministry-focused, diverse congregation
  - Recommended: [Unsplash search term] or [Illustration style suggestion]
  - Alt text: [Accessibility description]
*/}
```

### Design System Classes (Tailwind)
Use these consistent patterns:
- **Headings:** `text-3xl font-bold text-slate-900` (h1), `text-2xl font-semibold text-slate-800` (h2)
- **Body text:** `text-slate-600 leading-relaxed`
- **Cards:** `bg-white rounded-xl shadow-sm border border-slate-100 p-6`
- **CTAs:** `bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg`
- **Tags:** `bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm`
- **Section spacing:** `py-16` or `py-24` for major sections

---

## SECTION 7: SPECIFIC TASK INSTRUCTIONS

When I share a screenshot or ask you to work on a specific page:

1. **Analyze** the current placeholder/design visually
2. **Generate** a complete React/Next.js component with full content
3. **Include** visual asset suggestions as comments throughout
4. **Add** appropriate CTAs using `<Link href="/get-started">` or `<Link href="/pricing">`
5. **Match** the existing site design patterns from the screenshots
6. **Provide** production-ready code that can be directly used

### Pages to Generate (All of These):

**RESOURCES (4 pages):**
1. `/resources/switching-from-another-system` - Migration guide
2. `/resources/setting-up-your-church` - Setup checklist
3. `/resources/training-your-team` - Training template
4. `/resources/volunteer-recruitment-strategies` - Volunteer playbook

**BLOG (5 articles):**
1. `/blog/prevent-volunteer-burnout` - 5 ways to prevent volunteer burnout
2. `/blog/why-church-software-fails` - Why most church software fails
3. `/blog/first-time-guests-welcome` - Making first-time guests feel welcome
4. `/blog/church-200-vs-2000` - Running a church of 200 vs 2,000
5. `/blog/ai-changing-church-administration` - How AI is changing church administration (highlight Relius AI features)

---

## ADDITIONAL CONTEXT FILES TO REFERENCE

These files in the Relius repository contain detailed information:
- `AI_INTEGRATION_SUMMARY.md` - AI features technical details
- `SERMON_PLANNER_CONTENT_STUDIO_SUMMARY.md` - Content generation system
- `BILLING_INTEGRATION_COMPLETE.md` - Pricing and subscription details
- Backend API routers in `/backend/app/routers/` - Feature implementations

---

## EXAMPLE OUTPUT FORMAT - FULL REACT COMPONENT

When generating a blog post, output like this:

```tsx
// File: app/blog/prevent-volunteer-burnout/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, Users, Heart, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '5 Ways to Prevent Volunteer Burnout | Relius',
  description: 'We asked churches of different sizes how they keep volunteers energized. Here are the rhythms they practice every month.',
};

export default function PreventVolunteerBurnout() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            Ministry Insight
          </span>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Jan 11, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>7 min read</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          5 Ways to Prevent Volunteer Burnout (From Churches Doing It Well)
        </h1>

        <p className="text-xl text-slate-600">
          We asked churches of different sizes how they keep volunteers energized.
          Here are the rhythms they practice every month.
        </p>
      </header>

      {/*
        VISUAL ASSET SUGGESTION:
        - Type: Photo
        - Description: Diverse group of church volunteers smiling, perhaps at a serve day or greeting station
        - Style: Warm lighting, authentic candid moment, not posed stock photo feel
        - Recommended: Unsplash search "church volunteers serving" or "community helpers diverse"
        - Alt text: Church volunteers working together with joy
      */}
      <div className="relative h-80 w-full rounded-xl overflow-hidden mb-12 bg-slate-100">
        {/* <Image src="/blog/volunteer-burnout-hero.jpg" alt="Church volunteers working together" fill className="object-cover" /> */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          [Hero Image: Volunteers serving together]
        </div>
      </div>

      {/* Article Content */}
      <div className="prose prose-lg prose-slate max-w-none">
        <p className="lead text-xl text-slate-600 mb-8">
          Your volunteers are the heartbeat of your church. They greet at the door,
          run the sound booth, teach kids, and show up week after week. But when the
          same faithful few carry most of the load, burnout isn't a question of if—it's when.
        </p>

        <p>
          We talked to churches of all sizes—from plants of 50 to congregations of 2,000—to
          learn what actually works. Not theory. Not ideals. Real practices from churches
          that have figured out how to keep their volunteers energized for the long haul.
        </p>

        {/*
          VISUAL ASSET SUGGESTION:
          - Type: Illustration or icon
          - Description: Simple calendar icon with warning symbol
          - Style: Line art, blue/slate color scheme
          - Alt text: Calendar showing over-scheduling warning
        */}

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
          Stop Over-Scheduling the Willing
        </h2>

        <p>
          Here's a pattern we see constantly: Sarah is reliable. Sarah always says yes.
          So Sarah gets asked for everything—and eventually, Sarah disappears.
        </p>

        <p>
          The churches doing this well have a simple rule: <strong>no one serves more than
          two weekends in a row</strong>. Some go further—capping volunteers at two Sundays
          per month, period.
        </p>

        <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <p className="text-slate-700 mb-0">
            <strong>"We realized our best volunteers were burning out because we kept
            going back to the same well."</strong> — Pastor of a 400-member church in Texas
          </p>
        </div>

        <p>
          The key is visibility. When you can see at a glance who's been serving frequently,
          you can intentionally spread the load. Relius shows you volunteer frequency on
          their profile—so you never accidentally over-ask the willing.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
          Match Gifts to Roles (Not Just Availability)
        </h2>

        <p>
          A common mistake: filling slots based on who's available rather than who's gifted.
          The introvert forced into greeting duty. The detail-oriented person stuck in
          free-form kids' ministry.
        </p>

        <p>
          Mismatched volunteers don't just perform poorly—they burn out faster because
          serving feels like a drain instead of an outlet.
        </p>

        <ul className="space-y-2 my-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>Ask about gifts and interests during onboarding, not just availability</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>Create role descriptions that specify personality fit, not just tasks</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <span>Make it easy to switch roles without guilt</span>
          </li>
        </ul>

        <p>
          Relius lets you tag volunteers with skills and preferences, then suggests
          matches when you're filling positions. It's like having an assistant who
          remembers everyone's gifts.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
          Build Recognition Into Your Rhythms
        </h2>

        <p>
          Appreciation can't be an afterthought. The churches retaining volunteers well
          have built recognition into their regular rhythms:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h4 className="font-semibold text-slate-900 mb-2">Weekly</h4>
            <p className="text-slate-600 text-sm mb-0">
              Personal thank-you from a staff member (even a quick text counts)
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h4 className="font-semibold text-slate-900 mb-2">Monthly</h4>
            <p className="text-slate-600 text-sm mb-0">
              Shout-out in service or newsletter highlighting specific contributions
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h4 className="font-semibold text-slate-900 mb-2">Quarterly</h4>
            <p className="text-slate-600 text-sm mb-0">
              Volunteer gathering—not a meeting, a celebration (food helps)
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-5">
            <h4 className="font-semibold text-slate-900 mb-2">Annually</h4>
            <p className="text-slate-600 text-sm mb-0">
              Service anniversary recognition (1 year, 5 years, etc.)
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
          Set Clear Expectations (Then Protect Them)
        </h2>

        <p>
          Burnout often starts with unclear boundaries. "Can you help out?" becomes
          "Can you run this?" becomes "You're basically staff now, right?"
        </p>

        <p>
          Define what each role actually requires—time commitment, training, duration—and
          then protect those boundaries fiercely. If you said the kids' check-in role is
          one Sunday a month, don't guilt people into more.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
          Create Easy Off-Ramps
        </h2>

        <p>
          This one's counterintuitive: make it easy to step back, and people will
          stay longer.
        </p>

        <p>
          When volunteers feel trapped—like stepping down would let everyone down—they
          don't gracefully transition. They disappear. Sometimes from the church entirely.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
          <h4 className="font-semibold text-slate-900 mb-2">What healthy off-ramps look like:</h4>
          <ul className="space-y-2 text-slate-700">
            <li>• Regular check-ins: "How are you doing? Is this still life-giving?"</li>
            <li>• Defined seasons: "This role is a 6-month commitment, then we'll talk"</li>
            <li>• Graceful transitions: "Thanks for your service—we'd love to celebrate you"</li>
            <li>• No guilt: Stepping back is normal, not failure</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-4">
          The Technology Piece
        </h2>

        <p>
          None of this requires fancy software. A spreadsheet can track schedules.
          A calendar reminder can prompt appreciation.
        </p>

        <p>
          But when you're managing dozens of volunteers across multiple ministries,
          the mental load of tracking all this manually becomes its own source of
          burnout—for your staff.
        </p>

        <p>
          That's where Relius helps. You can see volunteer history at a glance,
          get alerts when someone's been over-scheduled, track skills and preferences,
          and automate appreciation reminders. Not to replace the human touch—to make
          sure it actually happens.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          Ready to support your volunteers better?
        </h3>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          Relius helps you track schedules, prevent over-scheduling, and automate
          appreciation—so your team stays energized for the long haul.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Start your free trial
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Related Articles */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">Related reading</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/why-church-software-fails" className="group">
            <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <span className="text-sm text-slate-500">Perspective</span>
              <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Why most church software fails (and how to pick better)
              </h4>
            </div>
          </Link>
          <Link href="/resources/volunteer-recruitment-strategies" className="group">
            <div className="bg-white border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
              <span className="text-sm text-slate-500">Playbook</span>
              <h4 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                Volunteer recruitment strategies
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}
```

---

## HOW TO USE THIS PROMPT

1. **Copy this entire document** into Antigravity IDE as context
2. **Share the screenshots** of your current placeholder pages with Gemini
3. **Ask it to generate** specific pages one at a time, e.g.:
   - "Generate the full React component for /resources/switching-from-another-system"
   - "Generate the blog post for /blog/why-church-software-fails"
4. **Gemini will output** complete, production-ready React/Next.js components with:
   - Full content based on Relius product knowledge
   - Visual asset suggestions as comments
   - Proper Tailwind styling matching your site
   - Internal links and CTAs

---

END OF PROMPT DOCUMENT
