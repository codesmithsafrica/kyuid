"use client";
import React, { useState } from 'react';
// import ModelCard from '@/components/ModelCard';
import TeamCard from '@/components/TeamCard';
import { teamMembers, teamMembers1 } from '@/data/teamMembers';
export default function ContactPage() {

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
      <p className="mt-3 text-muted-foreground">The
         <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} > Gen Z protests of  2024 </span>served as a profound "eye-opener" for Kenya’s leadership and
        society at large. It highlighted the urgent need for youth inclusion in high-level
        decision-making.
      </p>
      <p className="mt-3 text-muted-foreground">
        The youth came out in unprecedented numbers to:
      </p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">   <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Voice their decision</span> regarding the Finance Bill.</li>
        <li className="mb-2">   <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Force a change in direction</span>Force a change in direction, resulting in the dropping of the Finance Bill.</li>
        <li className="mb-2"  > <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Hold leadership accountable</span>, leading to the dissolution of the Cabinet.</li>
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
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Environment</span></li>
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Culture</span></li>
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Education </span>(Bridging the gap via TVET and certified training)</li>
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Gender</span></li>
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Social Welfare (Community support and Mercy Homes)</span></li>
        <li className="mb-2">  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Health</span>(Physician-led community outreach)</li>
      </ol>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">Strategic Partners</h1>
      <p className="mt-3 text-muted-foreground">
        We are proud to work alongside:
      </p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2"> <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Un sustainable development goals</span></li>
        <li className="mb-2"> <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Global dialogue</span></li>
        <li className="mb-2"> <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >World Bank (NAVCDP)</span></li>
        <li className="mb-2"> <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Generation Global (Tony Blair Institute)</span></li>
        <li className="mb-2"> <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >UN Alliance of Civilizations</span></li>
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
        generation stood up as  <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >"Leaderless and Tribeless."</span> * <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Leaderless: </span> Ensuring the movement
        cannot be silenced by targeting individuals or "buying off" spokespeople.
      </p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2"><span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Tribeless: </span> Rejecting the "my tribe, my people" politics that has divided Kenya for
          decades.</li>
      </ul>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">How <span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >KYUID </span> Supports This Movement</h1>
      <p className="mt-3 text-muted-foreground">
        While the movement's strength is its decentralization, its challenge is maintaining momentum
        within the formal structures of government. KYUID acts as the "Safe and Brave Space" that
        translates this organic energy into long-term systemic change.
      </p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">Moving from "Leaderless" to "Polycentric Leadership"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
          KYUID doesn't seek to appoint a single leader. Instead, we train<span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >thousands of
          decentralized leaders</span>  across all 47 counties. By providing training in policy formulation and

          oversight, we ensure that every youth in every village is equipped to be their own leader,
          making the movement impossible to co-opt.
        </p>
        <li className="mb-2">Institutionalizing "Tribelessness"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
          Unity in Diversity is not just our name—it is our strategy. KYUID helps youth "cross their
          bridges" by:
        </p>
        <ul className="list-inside ml-4 text-muted-foreground list-disc">
          <li className="mb-2"><span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Cultural Exchange & Dialogue: </span>Breaking down ethnic stereotypes through shared
            social welfare and health projects.</li>
          <li className="mb-2"><span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Issue-Based Advocacy:</span> Focusing on the Finance Bill, healthcare, and
            education—issues that affect every Kenyan regardless of their surname.</li>
        </ul>
        <li className="mb-2">Formalizing the "Safe and Brave Space"</li>
        <p className="mt-3 ml-4 text-muted-foreground">
          The street is a powerful place to speak, but the boardroom is where the laws are written.
          KYUID provides a structured platform for "Tribeless" youth to:
        </p>
        <ul className="list-inside ml-4 text-muted-foreground list-disc">
          <li className="mb-2"><span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} > Participate in Budgeting:</span> Engaging in County Integrated Development Plans
            (CIDPs).</li>
          <li className="mb-2"><span style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} >Policy Oversight: </span>Using the physician and professional skills of our founders (like
            Athanas Mwangagi) to help youth audit health and social welfare policies.</li>
        </ul>
      </ol>
            <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 mt-4 font-semibold tracking-tight">The KYUID Framework for Youth Inclusion</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">A Message from our Founder, Dr. Peris Nyambura</h1>
      <p className="mt-3  text-muted-foreground">
          "The youth have shown that they are not the leaders of tomorrow—they are the leaders of
          today. Our goal at WRI is to ensure that the 'Leaderless and Tribeless' spirit is protected and
          empowered with the technical tools of governance so that no youth voice is ever silenced
          again."
        </p>
              <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 font-semibold tracking-tight">Meet Our Directors: The KYUID Leadership</h1>
      <p className="mt-3  text-muted-foreground">
      Behind the Kenya Youth Unity in Diversity (KYUID) program is a team of legal
      professionals and advocates dedicated to the constitutional empowerment of Kenyan youth.
      </p>
              <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 font-semibold tracking-tight">ADVOCATES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 xl:grid-cols-2 gap-2">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              userpic={member.userpic}
              name={member.name}
              quote={member.quote}
              bio={member.bio}

              role={member.role}
            />
          ))}
        </div>
                      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 font-semibold tracking-tight">TRAINERS</h1>
            <p className="mt-3  text-muted-foreground">
   Behind the Kenya Youth Unity in Diversity (KYUID) program is a faculty of legal
professionals and advocates dedicated to the intellectual and constitutional arming of
Kenyan youth.
        </p>
                              <h1 style={{
        color: "#418FE2"
      }} className="text-3xl mt-4 mb-6 font-semibold tracking-tight">Our Education & Mentorship Leadership</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 lg:grid-cols-3 xl:grid-cols-2 gap-2">
          {teamMembers1.map((member) => (
            <TeamCard
              key={member.id}
              userpic={member.userpic}
              name={member.name}
              quote={member.quote}
              bio={member.bio}
              role={member.role}
            />
          ))}
        </div>
    </div>
  );
}
