"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const daysOfWeek = [
    { id: '001', label: 'Mombasa', short: 'Mon' },
    { id: '002', label: ' Kwale', short: 'Tue' },
    { id: '003', label: ' Kilifi', short: 'Wed' },
    { id: '004', label: 'Tana River', short: 'Thu' },
    { id: '005', label: 'Lamu', short: 'Fri' },
    { id: '006', label: 'Taita–Taveta', short: 'Sat' },
    { id: '007', label: 'Garissa', short: 'Sun' },
    { id: '008', label: 'Wajir', short: 'Sun' },
    { id: '009', label: ' Mandera', short: 'Sun' },
    { id: '010', label: 'Marsabit', short: 'Sun' },
    { id: '011', label: ' Isiolo', short: 'Sun' },
    { id: '012', label: 'Meru', short: 'Sun' },
    { id: '013', label: ' Tharaka-Nithi', short: 'Sun' },
    { id: '014', label: 'Embu', short: 'Sun' },
    { id: '015', label: 'Kitui', short: 'Sun' },
    { id: '016', label: ' Machakos', short: 'Sun' },
    { id: '017', label: 'Makueni', short: 'Sun' },
    { id: '018', label: 'Nyandarua', short: 'Sun' },
    { id: '019', label: 'Nyeri', short: 'Sun' },
    { id: '020', label: 'Kirinyaga', short: 'Sun' },
    { id: '021', label: `Murang'a`, short: 'Sun' },
    { id: '022', label: ' Kiambu', short: 'Sun' },
    { id: '023', label: 'Turkana', short: 'Sun' },
    { id: '024', label: 'West Pokot', short: 'Sun' },
    { id: '025', label: 'Samburu', short: 'Sun' },
    { id: '026', label: 'Trans-Nzoia', short: 'Sun' },
    { id: '027', label: 'Uasin Gishu', short: 'Sun' },
    { id: '028', label: ' Elgeyo-Marakwet', short: 'Sun' },
    { id: '029', label: ' Nandi', short: 'Sun' },
    { id: '030', label: 'Baringo', short: 'Sun' },
    { id: '031', label: 'Laikipia', short: 'Sun' },
    { id: '032', label: 'Nakuru', short: 'Sun' },
    { id: '033', label: 'Narok', short: 'Sun' },
    { id: '034', label: 'Kajiado', short: 'Sun' },
    { id: '035', label: 'Kericho', short: 'Sun' },
    { id: '036', label: 'Bomet', short: 'Sun' },
    { id: '037', label: 'Kakamega', short: 'Sun' },
    { id: '038', label: 'Vihiga', short: 'Sun' },  
    { id: '039', label: 'Bungoma', short: 'Sun' },
    { id: '040', label: 'Busia', short: 'Sun' },
    { id: '041', label: 'Siaya', short: 'Sun' },
    { id: '042', label: ' Kisumu', short: 'Sun' }, 
    { id: '043', label: 'Homa Bay', short: 'Sun' },
    { id: '044', label: 'Migori', short: 'Sun' },
    { id: '045', label: 'Kisii', short: 'Sun' },
    { id: '046', label: 'Nyamira', short: 'Sun' },
    { id: '047', label: ' Nairobi', short: 'Sun' },





  ];
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
          Work alongside our founders in real-world impact projects.
        </p>
        <ul className="list-inside text-muted-foreground ml-6 list-disc">
          <li className="mb-2">Health: Help Athanas Mwangagi with medical camps.</li>
          <li className="mb-2">Welfare: Support Mohamed Adan at the Alexander Mercy Home.</li>
          <li className="mb-2">Finance: Learn about low-interest credit and Sacco management through Dr. Peris
            Nyambura’s Lifeway’s Sacco..</li>

        </ul>
      </ol>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 font-semibold tracking-tight">No Gatekeepers. Just Impact</h1>
      <p className="mt-4 mb-4 text-muted-foreground">
        We are rejecting the old ways of "political handouts" and "voter bribery." We believe in
        Active Citizenship and Economic Independence.
      </p>
      <p style={{
        fontWeight: "bold"
      }} className="mt-4 mb-4 text-muted-foreground">
        "We are the ones we’ve been waiting for."
      </p>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-base">Sign Up to Volunteer</CardTitle>
          <CardDescription className="text-base">Are you ready to be a "Solution-Driven" activist? Tell us where you want to plug in.</CardDescription>
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
                <label className="text-sm"> Name (or alias)</label>
                <Input required placeholder="Jane Doe" />
              </div>
              {/* <div className="grid gap-2">
                <label className="text-sm">County</label>
                <Input required type="email" placeholder="jane@example.com" />
              </div> */}
              <div className="grid gap-2">
                <label className="text-sm">County</label>
                {/* <Input required placeholder="e.g., Nairobi" /> */}
                <select
                  style={{

                    // height: '39px'
                  }}
                  // value={selectedCategory} onChange={handleCategoryChange}
                  onSelect={e => console.log('change')}

                  // value={role}
                  id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value=""> -- Select County --</option>

                  {daysOfWeek.map((county) => (
                    <option key={county.id} value={county.label}>
                      {county.label}
                    </option>
                  ))}

                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-sm">Interest Area:</label>
                {/* <Input required type="email" placeholder="jane@example.com" /> */}

                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2] focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Policy Oversight</label>
                </div>
                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2] focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Environment</label>
                </div>
                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2] focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Health</label>
                </div>
                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2]focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Culture Education</label>
                </div>
                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2] focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">social welfare</label>
                </div>
                <div className="flex items-center ">
                  <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs accent-[#418FE2] focus:ring-2 focus:ring-brand-soft" />
                  <label htmlFor="default-checkbox" className="select-none ms-2 text-sm font-medium text-heading">Gender</label>
                </div>

              </div>
              <div className="grid gap-2">
                <label className="text-sm">Message to the Founders</label>
                <Textarea rows={4} placeholder="Tell us about your feedback, suggestions and how you'd like to contribute." />
              </div>
              <Button type="submit" className="mt-2">Submit</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
