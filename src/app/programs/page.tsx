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
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Programs</h1>
      <p className="mt-3 max-w-prose text-muted-foreground">
        Our national programs empower young people through leadership, advocacy, skills, and community impact.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <Card key={p.title}>
            <CardHeader>
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{p.desc}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
