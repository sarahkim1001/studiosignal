import Link from "next/link";
import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";

export default function Correspondence() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        contact & collaboration
      </StandardHeader>
      
      <PageLayout>
        <section className="py-16 sm:py-24 md:py-40 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Left Column: The Invitation */}
            <div>
              <div className="text-lg sm:text-xl md:text-2xl font-sans leading-[1.6] max-w-xl">
                <p>
                  Studio Signal is open to commissions, collaborations, and full-time opportunities within innovative design and media industries. Let's build a more creative present togethers.
                </p>
              </div>
            </div>
            
            {/* Right Column: Direct Action - Vertical Stack */}
            <div>
              <h3 className="text-base sm:text-lg font-bold lowercase mb-6 sm:mb-8" style={{ letterSpacing: '0.1em' }}>reach out</h3>
              <div className="space-y-4 sm:space-y-6">
                <Link 
                  href="mailto:sarah@sarahkim.com" 
                  className="block text-2xl sm:text-3xl md:text-[2.5rem] font-bold lowercase text-inky hover:text-gold transition-colors duration-300 min-h-[44px] flex items-center"
                  style={{ letterSpacing: '0.1em' }}
                >
                  email
                </Link>
                <Link 
                  href="https://linkedin.com/in/sarahkim" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl sm:text-3xl md:text-[2.5rem] font-bold lowercase text-inky hover:text-gold transition-colors duration-300 min-h-[44px] flex items-center"
                  style={{ letterSpacing: '0.1em' }}
                >
                  linkedin
                </Link>
                <Link 
                  href="/cv.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl sm:text-3xl md:text-[2.5rem] font-bold lowercase text-inky hover:text-gold transition-colors duration-300 min-h-[44px] flex items-center"
                  style={{ letterSpacing: '0.1em' }}
                >
                  download cv/resume
                </Link>
              </div>
              
              {/* Archival Stamp */}
              <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 my-12 sm:my-20">
                <p className="font-sans text-sm sm:text-base md:text-lg opacity-60">
                  STUDIO SIGNAL<br />
                  Principal: Sarah Kim<br />
                  ref: Palo Alto, CA
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
