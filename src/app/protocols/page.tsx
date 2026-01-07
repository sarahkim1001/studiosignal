import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function Protocols() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        protocols
      </StandardHeader>
      <SubHeader>
        lab notes: raw research, code snippets, field recordings, ongoing experiments
      </SubHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40">
          <div className="text-lg sm:text-xl md:text-[1.75rem] font-sans font-medium leading-[1.6] text-inky max-w-4xl">
            <p>
              protocols coming soon. this section will archive raw research notes, code snippets, field recordings, and documentation of ongoing experimental processes.
            </p>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
