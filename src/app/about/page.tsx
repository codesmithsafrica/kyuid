export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-3 text-muted-foreground">
        Kenya Youth Unity in Diversity (KYUID) is a youth-led movement advocating for meaningful inclusion of young people in decision-making across government, private sector, and community institutions.
      </p>
      <div className="prose prose-sm mt-8 dark:prose-invert">
        <p>
          We foster leadership, civic engagement, and socio-economic empowerment by organizing county forums, policy dialogues, innovation labs, and community projects. Our work is non-partisan, evidence-driven, and grounded in lived experiences of youth across Kenya.
        </p>
        <p>
          Our vision is a Kenya where diversity is celebrated and young people shape policies, institutions, and opportunities that affect their lives.
        </p>
      </div>
    </div>
  );
}
