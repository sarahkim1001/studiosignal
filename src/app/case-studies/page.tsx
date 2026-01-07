import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function CaseStudies() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        case studies
      </StandardHeader>
      <SubHeader>
        multimedia work: sound, interactive interfaces, installations
      </SubHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40">
          <div className="text-lg sm:text-xl md:text-[1.75rem] font-sans font-medium leading-[1.6] text-inky max-w-4xl">
            <p>
              case studies coming soon. this section will showcase multimedia interventions exploring the intersection of sound design, interactive interfaces, and spatial installations.
            </p>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
