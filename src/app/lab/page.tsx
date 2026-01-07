import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function Lab() {
  const pillars = [
    {
      index: "01",
      title: "case studies",
      description: "multimedia: interactive interfaces, images, soundscapes, videos, projections, & installations.",
      href: "/case-studies",
    },
    {
      index: "02",
      title: "editorial writing",
      description: "digital publication: technoculture, media theory, cognition, neuroaesthetics, & indigenous wisdom.",
      href: "/writing",
    },
    {
      index: "03",
      title: "protocols",
      description: "lab notes: raw research, code snippets, field recordings, sketches, photographs, & ongoing experiments.",
      href: "/protocols",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        the lab
      </StandardHeader>
      <SubHeader>
        research & selected works evolving human-tech relationships at the depths of digital culture
      </SubHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {pillars.map((pillar) => (
              <Link
                key={pillar.index}
                href={pillar.href}
                prefetch={false}
                className="group block p-8 sm:p-12 transition-all duration-500 hover:bg-slate hover:text-foundation"
              >
                <div className="text-sm sm:text-base font-mono text-inky opacity-60 group-hover:text-foundation group-hover:opacity-80 mb-4 transition-colors duration-500">
                  {pillar.index}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-500">
                  {pillar.title}
                </h2>
                <p className="text-base sm:text-lg font-sans font-medium leading-[1.6] text-inky opacity-80 group-hover:text-foundation group-hover:opacity-90 transition-colors duration-500">
                  {pillar.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
