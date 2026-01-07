import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function Writing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        writing
      </StandardHeader>
      <SubHeader>
        digital magazine: cultural media analysis, neuroaesthetics, editorial
      </SubHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40">
          <div className="text-lg sm:text-xl md:text-[1.75rem] font-sans font-medium leading-[1.6] text-inky max-w-4xl">
            <p>
              writing coming soon. this section will feature cultural media analysis, explorations in neuroaesthetics, and editorial content examining the human-tech relationship.
            </p>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
