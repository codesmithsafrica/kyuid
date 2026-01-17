import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const programs = [
  {
    title: "County Youth Forums",
    desc: "Inclusive dialogues connecting youth with county leadership to co-create solutions.",
  },
  {
    title: "Policy Fellows",
    desc: "A cohort-based program equipping young advocates with policy and research skills.",
  },
  {
    title: "Digital Skills Labs",
    desc: "Practical workshops on digital literacy, no-/low-code, and employability.",
  },
  {
    title: "Community Impact Projects",
    desc: "Grassroots initiatives led by youth with measurable, sustainable outcomes.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12 m max-w-4xl ">
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-4xl mb-4 font-semibold tracking-tight">The KYUID Program</h1>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Kenya Youth: Unity in Diversity</h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        The KYUID program is a tailor-made initiative specifically designed to meet the needs of
        Kenyan youth as anchored in the Constitution of Kenya.We provide a safe and brave
        space for youth to fulfill their democratic rights through:
      </p>
      <p className="mt-3 text-muted-foreground">Decision Making: Participation in the formulation and implementation of policies.</p>
      <p className="mt-3 max-w-prose text-muted-foreground">Oversight: Promoting good governance, ethics, and livelihoods.</p>
      <p className="mt-3 max-w-prose text-muted-foreground">Unity: Encouraging Kenya's diversities to "cross their bridges," enhancing peaceful
        coexistence and socio-economic growth.</p>
      <p className="mt-3 text-muted-foreground">We provide a safe and brave space where youth can:</p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">Engage and be heard: Fulfill their democratic rights by participating in
          decision-making processes.</li>
        <li className="mb-2">Influence Policy: Involve themselves in the formulation, implementation, and
          oversight of policies to promote ethics and good governance.</li>
        <li className="mb-2">Bridge Diversities: We encourage Kenyan youth to "cross their bridges," fostering
          peaceful coexistence and driving social and economic growth.</li>
      </ul>
      <h1 style={{
        color: "#418FE2"
      }} className="text-3xl font-semibold tracking-tight">Empowerment Through Legal Knowledge: The Training Pillar</h1>

      <p className="mt-3 text-muted-foreground">Behind the Kenya Youth Unity in Diversity (KYUID) program is a faculty of legal
        professionals and advocates dedicated to the intellectual and constitutional arming of
        Kenyan youth.</p>
      <p className="mt-3 text-muted-foreground">We don’t just advocate for you; we train you to be your own best advocate. Our legal team
        transforms complex constitutional mandates into practical, everyday skills. Through our
        specialized training modules, we equip the 'Leaderless and Tribeless' generation with:</p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">Constitutional Literacy: Understanding the laws that protect your right to
          participate.</li>
        <li className="mb-2">Policy Analysis Skills: Training you to dissect bills and government budgets with
          the precision of a lawyer.</li>
        <li className="mb-2">Civic Competence: Mastering the technical procedures of public participation so
          your voice cannot be dismissed on technicalities.</li>


      </ul>
      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-3xl font-semibold tracking-tight">The Two Hands of KYUID: Training & Advocacy</h1>
      <p className="mt-3 text-muted-foreground">To empower the "Leaderless and Tribeless" generation, KYUID operates with two powerful
        hands. One hand builds the person, and the other hand changes the system.</p>
      <h1 style={{
        color: "#418FE2",

      }} className="text-3xl font-semibold tracking-tight">Hand 1: Training (Building Your Capacity)</h1>
      <p style={{
        fontStyle: "italic"
      }} className="mt-3 text-muted-foreground">Knowledge is the engine of the revolution.</p>
      <p className="mt-3 text-muted-foreground">Training is about equipping you with the skills, tools, and mindset to be independent and
        effective. We don’t just want you to be loud; we want you to be competent.</p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">STEM & Logic: Led by Teacher Alfred Karani, we train you in critical thinking and
          problem-solving.</li>
        <li className="mb-2">Legal Literacy: Led by Robert Kinyua and the legal team, we train you on how to
          read the Constitution, understand the Finance Bill, and know your rights during arrest
          or protest.</li>
      </ul>
      <h1 style={{
        color: "#418FE2",
      }} className="text-3xl font-semibold tracking-tight">Hand 2: Advocacy (Creating Your Space)</h1>
      <p style={{
        fontStyle: "italic"
      }} className="mt-3 text-muted-foreground">Your voice is the fuel for change.</p>

      <p className="mt-3 text-muted-foreground">Advocacy is about taking the skills you’ve learned and using them to influence the people in
        power. It is about making sure the "Leaderless and Tribeless" voice is present where
        decisions are made.</p>
      <ul className="list-inside text-muted-foreground list-disc">
        <li className="mb-2">Policy Oversight: We create "Safe and Brave Spaces" where you can audit
          government spending and demand transparency.</li>
        <li className="mb-2">Civic Justice: Our legal advocates (Triza and Matildah) push for laws that protect
          youth interests and human rights.</li>
        <li className="mb-2">Bridging Diversities: We advocate for a "Tribeless" Kenya by creating platforms
          where youth from all 47 counties speak as one voice on issues like Health and
          Education.</li>
        <li className="mb-2">Global Representation: Collaborating with the UN and Generation Global to bring
          Kenyan youth issues to the world stage.</li>
      </ul>
      <p className="mt-3 mb-3 text-muted-foreground">The Goal of Advocacy: To ensure there is "No Decision About Us, Without Us.</p>

      <h1 style={{
        color: "#418FE2",
        fontWeight: "bold"
      }} className="text-3xl mt-6 font-semibold tracking-tight">How the Two Hands Work Together</h1>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs mt-4 rounded-base border border-default">
        <table className="w-full text-sm  text-muted-foreground text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                The Scenario
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                The Training Hand
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                The Advocacy Hand
              </th>

            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary border-b border-default">
              <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                Finance Bill
              </th>
              <td className="px-6 py-4">
                Teaches you how to read
                and analyze the budget.
              </td>
              <td className="px-6 py-4">
                Organizes
              </td>

            </tr>

          </tbody>
        </table>
      </div>

      <h1 style={{
        color: "#418FE2",
      }} className="text-3xl mt-3 font-semibold tracking-tight">A Note to the Youth:</h1>
      <p className="mt-3 mb-3 text-muted-foreground">Training without Advocacy makes you a "silent expert"—you have the skill but no power to
        use it.</p>
      <p className="mt-3 mb-3 text-muted-foreground">Advocacy without Training makes you a "loud amateur"—you have the passion but no
        facts to back it up.</p>
      <h1 style={{
        color: "#418FE2",
      }} className="text-3xl mt-3 font-semibold tracking-tight">Why We Train (The Strategy)</h1>
      <p className="mt-3 mb-3 text-muted-foreground">We believe that information is the greatest equalizer. By putting legal expertise into the
        hands of the youth, we ensure that:</p>
      <ol className="list-inside text-muted-foreground list-decimal">
        <li className="mb-2">You are protected: You know your rights under the Constitution.</li>
        <li className="mb-2">You are professional: Your engagement with the government is backed by facts and
          legal logic.</li>
        <li className="mb-2">You are independent: You no longer need "middlemen" to speak for you.</li>
      </ol>

      <h1 style={{
        color: "#418FE2",
      }} className="text-3xl mt-3 font-semibold tracking-tight">How this connects to your "Leaderless/Tribeless" goal:</h1>
      <p className="mt-3 mb-3 text-muted-foreground">In a leaderless movement, every member must be trained. If only one person knows the
        law, the movement is vulnerable. When all youth are trained in their constitutional rights, the
        movement becomes an unstoppable force for ethical governance.</p>
      <p className="mt-6 mb-3 text-muted-foreground">KYUID gives you both.</p>
      {/* <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
}
