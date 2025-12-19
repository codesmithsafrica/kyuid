import Link from "next/link";
import { ArrowRight, Users, Megaphone, Lightbulb, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="font-sans">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,oklch(0.968_0.007_247.896)_0%,transparent_60%)]" />
        <div className="container mx-auto grid gap-8 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="h-7 rounded-full px-3">
              Youth Voice • National Impact
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Kenya Youth Unity in Diversity
            </h1>
            <p className="max-w-prose text-lg text-muted-foreground">
              A nationwide movement championing meaningful inclusion of young people in decision-making across government, private sector, and community institutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/join" className="inline-flex items-center gap-2">
                  Join Us <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="size-4" />
                10k+ members
              </div>
              <div className="flex items-center gap-2">
                <Megaphone className="size-4" />
                100+ policy dialogues
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-gradient-to-br from-primary/10 via-transparent to-primary/20 p-6 shadow-sm">
              <div className="grid h-72 w-full grid-cols-6 gap-3 sm:h-80">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border bg-background/70 backdrop-blur"
                    style={{
                      boxShadow:
                        i % 3 === 0
                          ? "0 0 0 1px var(--border) inset, 0 10px 30px -12px oklch(0.208 0.042 265.755 / 0.25)"
                          : undefined,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Focus Areas</h2>
            <p className="text-muted-foreground">Where we drive meaningful change</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="size-4" /> Youth Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Training and mentorship for emerging youth leaders across counties.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Megaphone className="size-4" /> Policy & Advocacy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Inclusive policy dialogues and civic engagement for youth representation.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Lightbulb className="size-4" /> Skills & Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Digital skills, entrepreneurship, and innovation for decent work.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Globe className="size-4" /> Community Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Grassroots projects co-created with communities for lasting outcomes.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Programs</h2>
            <p className="text-muted-foreground">Highlights from our national programs</p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/programs" className="inline-flex items-center gap-2">
              Explore All <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {["County Youth Forums", "Policy Fellows", "Digital Skills Labs"].map(
            (title, i) => (
              <Card key={i} className="h-full">
                <CardHeader>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod lectus sed diam bibendum.
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      <section id="newsletter" className="border-t bg-muted/30 py-14">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h3 className="text-xl font-semibold">Stay updated</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Get event invites, program updates, and opportunities in your inbox.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
            />
            <Button className="shrink-0" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
