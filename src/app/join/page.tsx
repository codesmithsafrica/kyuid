"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">Get Involved: Your Voice, Your Power</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">The Script is Flipped: Join the Movement</h1>
      <p className="mt-3 text-muted-foreground">
        The 2024 Gen Z protests proved one thing: The youth are the reformers of today, not the
        leaders of tomorrow. You showed the world that a movement can be Leaderless
        (impossible to buy off) and Tribeless (impossible to divide).
      </p>
      <p className="mt-3 text-muted-foreground">
        At World Radiance International (WRI) and the KYUID Program, we don’t want to be your
        "bosses." We want to be your resource hub. We provide the safe and brave space for you
        to sharpen your skills and keep the pressure on.
      </p>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 font-semibold tracking-tight">How You Can Plugin</h1>

      <ol className="list-inside mt-3 text-muted-foreground list-decimal">
        <li className="mb-2">Become a "Citizen Oversight Agent"</li>
        <p className="mt-4 mb-4 ml-6 text-muted-foreground">
        Don't just protest the bill; help us rewrite the policy.
        </p>

        <ul className="list-inside text-muted-foreground ml-6 list-disc">
          <li className="mb-2">What you’ll do: Learn to read the Constitution, interrogate county budgets, and
            submit memoranda to Parliament.</li>
          <li className="mb-2">The Goal: Moving from the streets to the boardroom without losing our "Tribeless"
            identity.</li>
    
        </ul>

        <li className="mb-2">Skill-Up at World Radiance College (TVET)</li>
                <p className="mt-4 mb-4 ml-6 text-muted-foreground">
       Passion is great, but certified skills are "power."
        </p>

        <ul className="list-inside text-muted-foreground ml-6 list-disc">
          <li className="mb-2">What you’ll do: Enroll in TVET-approved courses that give you the professional
papers to lead in your community.</li>
          <li className="mb-2">Special Focus: Helping those with a calling but who lacked university entry grades
to get certified and market-ready.</li>
    
        </ul>

        <li className="mb-2">Join the "Safe & Brave Space" Dialogues</li>
                        <p className="mt-4 mb-4 ml-6 text-muted-foreground">
       We host monthly sessions (physical and digital) where we "cross the bridges" of our
diversity.
        </p>

        <ul className="list-inside text-muted-foreground ml-6 list-disc">
          <li className="mb-2">What you’ll do: Participate in "Mock Parliament" sessions and issue-based debates
(Climate, Health, Economy).</li>
          <li className="mb-2">The Rule: We leave tribal labels at the door. We speak as Kenyans.</li>
    
        </ul>
   
        <li className="mb-2">Volunteer in Community Outreach</li>
        <p className="mt-4 mb-4 text-muted-foreground">
          At World Radiance International (WRI) and the KYUID Program, we don’t want to be your
          "bosses." We want to be your resource hub. We provide the safe and brave space for you
          to sharpen your skills and keep the pressure on.
        </p>
      </ol>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Membership Form</CardTitle>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <div className="text-sm">Thank you! We will contact you soon.</div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-2">
                <label className="text-sm">Full Name</label>
                <Input required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Email</label>
                <Input required type="email" placeholder="jane@example.com" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">County</label>
                <Input required placeholder="e.g., Nairobi" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm">How would you like to contribute?</label>
                <Textarea rows={4} placeholder="Tell us about your interests..." />
              </div>
              <Button type="submit" className="mt-2">Submit</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
