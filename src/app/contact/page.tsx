"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">Get Involved: Your Voice, Your Power</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">A New Era of Youth Inclusion</h1>
      <p className="mt-3 text-muted-foreground">
        The Gen Z protests of 2024 were a historic "eye-opener" for Kenyan leadership. The youth
        came out in numbers to voice their rejection of the Finance Bill, eventually forcing its
        withdrawal and the dissolution of the Cabinet.
      </p>
      <p className="mt-3 text-muted-foreground">
        WRI and the KYUID program serve as the official platform to ensure that youth inclusion is
        not just a moment, but a permanent seat at the decision-making table.
      </p>
      <p className="mt-3 text-muted-foreground">
        The Gen Z protests of 2024 served as a profound "eye-opener" for Kenya’s leadership and
        society at large. It highlighted the urgent need for youth inclusion in high-level
        decision-making.
      </p>
      <p className="mt-3 text-muted-foreground">
        The youth came out in unprecedented numbers to:
      </p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">Voice their decision regarding the Finance Bill.</li>
        <li className="mb-2">Force a change in direction, resulting in the dropping of the Finance Bill.</li>
        <li className="mb-2">Hold leadership accountable, leading to the dissolution of the Cabinet.</li>
      </ol>
      <p className="mt-3 text-muted-foreground">
        KYUID stands as the bridge to ensure this energy is channeled into formal, peaceful, and
        constructive governance oversight.
      </p>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 mt-4 font-semibold tracking-tight">Vision, Mission & Core Values</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Our Vision</h1>
      <p className="mt-3 text-muted-foreground">
        To foster a united, ethical, and empowered Kenyan youth population that leads in national
        development and governance.
      </p>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Our Mission</h1>
      <p className="mt-3 text-muted-foreground">
        To provide training and advocacy that transforms youth attitudes and enables active
        participation in the social, economic, and political spheres of Kenya.
      </p>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold mt-4 tracking-tight">Our Focus Areas (The Mandate)</h1>
      <p className="mt-3 text-muted-foreground">
        Since our inception in 2007, our mandate has been to train and advocate for youth to
        change their attitudes in:
      </p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">Environment</li>
        <li className="mb-2">Culture</li>
        <li className="mb-2">Education (Bridging the gap via TVET and certified training)</li>
        <li className="mb-2">Gender</li>
        <li className="mb-2">Social Welfare (Community support and Mercy Homes)</li>
        <li className="mb-2">Health (Physician-led community outreach)</li>
      </ol>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">Strategic Partners</h1>
      <p className="mt-3 text-muted-foreground">
        We are proud to work alongside:
      </p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">Un sustainable development goals</li>
        <li className="mb-2">Global dialogue</li>
        <li className="mb-2">World Bank (NAVCDP)</li>
        <li className="mb-2">Generation Global (Tony Blair Institute)</li>
        <li className="mb-2">UN Alliance of Civilizations</li>

      </ul>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 mt-4 font-semibold tracking-tight">Bridging the Gen Z Revolution: From Protest to Policy</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">The New Era: Leaderless & Tribeless</h1>
      <p className="mt-3 text-muted-foreground">
        The 2024 Gen Z movement changed the rules of engagement in Kenya. For the first time, a
        generation stood up as "Leaderless and Tribeless." * Leaderless: Ensuring the movement
        cannot be silenced by targeting individuals or "buying off" spokespeople.
      </p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">Tribeless: Rejecting the "my tribe, my people" politics that has divided Kenya for
          decades.</li>
      </ul>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">How KYUID Supports This Movement</h1>
      <p className="mt-3 text-muted-foreground">
        While the movement's strength is its decentralization, its challenge is maintaining momentum
        within the formal structures of government. KYUID acts as the "Safe and Brave Space" that
        translates this organic energy into long-term systemic change.
      </p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">Moving from "Leaderless" to "Polycentric Leadership"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
          KYUID doesn't seek to appoint a single leader. Instead, we train thousands of
          decentralized leaders across all 47 counties. By providing training in policy formulation and

          oversight, we ensure that every youth in every village is equipped to be their own leader,
          making the movement impossible to co-opt.
        </p>
        <li className="mb-2">Institutionalizing "Tribelessness"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
          Unity in Diversity is not just our name—it is our strategy. KYUID helps youth "cross their
          bridges" by:
        </p>
              <ul className="list-inside ml-4 text-muted-foreground list-disc">
        <li className="mb-2">Cultural Exchange & Dialogue: Breaking down ethnic stereotypes through shared
social welfare and health projects.</li>
        <li className="mb-2">Issue-Based Advocacy: Focusing on the Finance Bill, healthcare, and
education—issues that affect every Kenyan regardless of their surname.</li>
  

      </ul>
        <li className="mb-2">Formalizing the "Safe and Brave Space"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
      The street is a powerful place to speak, but the boardroom is where the laws are written.
KYUID provides a structured platform for "Tribeless" youth to:
        </p>
      <ul className="list-inside ml-4 text-muted-foreground list-disc">
        <li className="mb-2">Participate in Budgeting: Engaging in County Integrated Development Plans
(CIDPs).</li>
        <li className="mb-2">Policy Oversight: Using the physician and professional skills of our founders (like
Athanas Mwangagi) to help youth audit health and social welfare policies.</li>
    

      </ul>
      </ol>
    </div>
  );
}
