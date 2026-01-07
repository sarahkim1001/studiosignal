import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        studio signal
      </StandardHeader>
      <SubHeader>
        an intervention at the intersection of biological life and digital cyberspace
      </SubHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40">
          <div className="text-lg sm:text-xl md:text-[1.75rem] font-sans font-medium leading-[1.6] max-w-4xl">
            <p>
            Studio Signal operates as a research-led design studio investigating the Human-Tech Enigma. We treat technology not as a utility, but as a profound environmental shift that reconfigures our psychology, our bodies, and our spirit. Through neuro-informed design, we create interventions that facilitate presence and continuity within our increasingly fragmented technological environments.
            </p>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
