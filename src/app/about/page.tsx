export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
            <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">About World Radiance International (WRI)</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Our Inception and History</h1>
      {/* <p className="mt-3 text-muted-foreground">
          World Radiance International is a dedicated youth organization that has been active since its
          inception in 2007.
      </p> */}
      <div className="prose text-muted-foreground prose-sm mt-6 pb-4 dark:prose-invert">
        <p>
          World Radiance International is a dedicated youth organization that has been active since its
          inception in 2007.
        </p>
        <p>
          Our story began with the vision of Peris Nyambura, a young Kenyan who recognized the
          need for a platform to empower her peers. She invited Mohamed Adan and Athanas
          Mwangagi to join her in this vision, and together, they founded WRI to serve the youth of
          Kenya.
        </p>
      </div>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Our Founders' Legacy</h1>
      {/* <p className="mt-3 text-muted-foreground">
          World Radiance International is a dedicated youth organization that has been active since its
          inception in 2007.
      </p> */}
      <div className="prose text-muted-foreground prose-sm mt-6 dark:prose-invert">
        <p>
          World Radiance International (WRI) was founded in 2007 by three visionary Kenyans who
          believed in the power of the youth.
        </p>
        <h2 style={{
          color: "#418FE2"
        }} className="text-xl my-4 text-muted-foreground font-semibold tracking-tight">Peris Nyambura – Visionary & Philanthropist</h2>
        <p className="mt-3 ml-4 text-muted-foreground">
          Peris is the driving force behind the vision of WRI. Her commitment to community
          development has been recognized with an Honorary Doctorate Degree in Community
          Development from Peace Christian University. Beyond WRI, her impact includes:
        </p>
        <ul className="list-inside ml-4 list-disc">
          <li className="mb-2">Education: Founder of World Radiance Bible Training College (TVET Approved).
            This institution helps pastors with a calling but lower grades attain certified academic
            papers, moving them away from the market of fake professional papers. This work is
            proudly supported by Capstone Church Canada.</li>
          <li className="mb-2">Financial Empowerment: Founder of Lifeway’s Saving and Credit Cooperative
            (Sacco), which provides low-interest credit to small business owners and youth. The
            Sacco’s impact was recognized when it was shortlisted for funding by the World
            Bank through NAVCDP in Nakuru.</li>
          <li className="mb-2">Global Collaborations: Peris has bridged the gap between Kenya and the world,
            collaborating with the UN Sustainable Development Goals (SDGs), Generation
            Global (Tony Blair Foundation), and the United Nations Alliance of Civilizations
            (UNAOC) Unity in Diversity.</li>
        </ul>
        <h2 style={{
          color: "#418FE2"
        }} className="text-xl my-4 font-semibold tracking-tight">Mohamed Adan – Chairman</h2>
        <p className="mt-3 ml-4 text-muted-foreground">
          As the Chairman of WRI, Mohamed is a philanthropist dedicated to making a better world.
          He is also the founder of Alexander Mercy Home, showcasing his deep commitment to
          social welfare and humanitarian service.
        </p>
        <h2 style={{
          color: "#418FE2"
        }} className="text-xl my-4 text-muted-foreground font-semibold tracking-tight">Athanas Mwangagi – Co-Founder</h2>
        <p className="mt-3 ml-4 text-muted-foreground">
          Athanas brings a heart of service through his background in Medicine. A devoted Christian,
          he utilizes his physician skills to provide medical assistance to the needy within the
          community, ensuring health remains a pillar of our development work.
        </p>
        <h2 style={{
          color: "#418FE2"
        }} className="text-xl my-4 font-semibold tracking-tight">Main Objective</h2>
        <p className="mt-3 text-muted-foreground">
          Our primary goal is to promote good governance, ethics, and livelihoods, especially
          amongst the youth. We believe that by equipping young people today, we enable them to
          become effective leaders within their homes and their countries.
        </p>
        <h2 style={{
          color: "#418FE2"
        }} className="text-xl my-4 font-semibold tracking-tight">Our Mandate</h2>
        <p className="mt-3 text-muted-foreground">
              WRI is mandated to provide training and advocacy. We focus on changing the attitudes of
          youth across our specific focus areas:
        </p>
        <ul className="list-inside list-disc">
          <li className="mb-2">Environment</li>
          <li className="mb-2">Culture</li>
          <li className="mb-2">Education</li>
          <li className="mb-2">Gender</li>
          <li className="mb-2">Social Welfare</li>
          <li className="mb-2">Health</li>

        </ul>
      </div>
    </div>
  );
}
