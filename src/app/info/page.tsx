import PageLayout from "@/components/PageLayout";
import StandardHeader from "@/components/StandardHeader";
import SubHeader from "@/components/SubHeader";

export default function Info() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-foundation to-[#E8E8E4] pb-64">
      <StandardHeader>
        human (mostly)
      </StandardHeader>
      <SubHeader>
        studio signal: investigating the human-tech enigma at the intersection of biological life and digital cyberspace
      </SubHeader>
      
      <PageLayout>
        <section className="py-12 sm:py-24 md:py-48">
          <div className="space-y-6 sm:space-y-8">
            <div className="text-base sm:text-lg md:text-xl font-sans text-inky opacity-70 mb-6 sm:mb-8">
              Principal: Sarah Kim<br />
              ref: pronouns [she/her]
            </div>
            <div className="text-lg sm:text-xl md:text-[1.75rem] font-sans font-medium leading-[1.6] text-inky max-w-4xl">
              <p>
                Studio Signal operates as an intervention at the intersection of biological life and digital cyberspace, treating technology not as a utility, but as a profound environmental shift that reconfigures our psychology, our bodies, and our spirit. As a research-led design studio, we investigate the "Human Enigma" where the boundary between the organic and the digital is no longer a line, but a fusion. We believe that to navigate this era, we must move beyond passive consumption and recognize our digital tools as physical extensions of our nervous systems—an invisible architecture that requires intentional, neuro-informed stewardship.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12 sm:py-24 md:py-48">
          <div className="text-lg sm:text-xl md:text-2xl font-sans leading-[1.6] text-inky max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">the theoretical foundation</h2>
            <p>
              To understand our current subjectivity, we must look to the structural insights of Marshall McLuhan, who recognized that "the medium is the message"—a reminder that our digital tools physically extend our nervous systems. However, as we move deeper into the network, we face the risk of what Jean Baudrillard termed the "hyperreal," where simulated experiences replace our connection to the tangible. Studio Signal investigates this tension, utilizing the "TechGnosis" of Erik Davis to explore the spiritual and mythological impulses that drive our technological evolution. We ask: In a world of infinite data, how do we preserve the sacred spark of human presence?
            </p>
          </div>
        </section>
        
        <section className="py-12 sm:py-24 md:py-48">
          <div className="text-lg sm:text-xl md:text-2xl font-sans leading-[1.6] text-inky max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">the biological bridge: neuroscience & neuroaesthetics</h2>
            <p>
              We believe that the remedy to digital fragmentation lies within our own biology. Our work bridges abstract theory with the concrete principles of Neuroaesthetics and Neuroplasticity. By understanding how the brain rewires itself in response to aesthetic stimuli, we create "functional art" designed to regulate the human nervous system. Our research into Psychoacoustics explores how soundscapes can bypass the logical mind to reach the limbic system, creating a state of "audible safety". This allows for the reflection and release of repressed emotions, transforming digital media from a source of distraction into a vessel for therapeutic ritual and reflective awareness.
            </p>
          </div>
        </section>
        
        <section className="py-12 sm:py-24 md:py-48">
          <div className="text-lg sm:text-xl md:text-2xl font-sans leading-[1.6] text-inky max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">the visionary drive: a practice of alignment</h2>
            <p className="mb-8">
              Our creative drive is rooted in the belief that digital space can be a site of re-enchantment. We view technology not as an end in itself, but as a medium for the sensory richness of the felt-body. Through our interventions, we ideate potential innovations that promote:
            </p>
            <ul className="list-none space-y-4">
              <li className="pl-0">
                <strong className="font-bold">Presence Over Consumption:</strong> Moving from the fragmentation of the screen toward the stillness of active, sensory awareness.
              </li>
              <li className="pl-0">
                <strong className="font-bold">Ritualized Connection:</strong> Utilizing scientific research to align digital experiences with the rhythms of human biology, fostering "audible safety" and inner reflection.
              </li>
              <li className="pl-0">
                <strong className="font-bold">Creative Agency:</strong> Using neuro-informed design to unlock curiosity and restore the human capacity for wonder and creativity.
              </li>
            </ul>
          </div>
        </section>
        
        <section className="py-12 sm:py-24 md:py-48 pb-32 sm:pb-48 md:pb-64 pt-8 sm:pt-12">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold lowercase text-inky mb-8 sm:mb-12" style={{ letterSpacing: '0.1em' }}>
              about Sarah Kim
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Left Column */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gold">disciplines</h3>
                  <p className="text-sm sm:text-base md:text-lg font-sans leading-[1.6] text-inky opacity-80">
                    Interactive Media Design<br />
                    Computational Art<br />
                    Spatial Experience Design<br />
                    Generative Systems<br />
                    Human-Computer Interaction<br />
                    Neuroaesthetics<br />
                    Psychoacoustics
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gold">skills</h3>
                  <p className="text-sm sm:text-base md:text-lg font-sans leading-[1.6] text-inky opacity-80">
                    Creative Coding: p5.js, Processing, TouchDesigner<br />
                    Physical Computing: Arduino<br />
                    Web Development: React, Next.js, Three.js<br />
                    Sound Design: Max/MSP, Ableton Live, REAPER<br />
                    Video Editing: Adobe Premiere Pro, Final Cut Pro, Davinci Resolve<br />
                    Graphic Design: Adobe Photoshop, Illustrator, InDesign
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gold">education</h3>
                  <p className="text-sm sm:text-base md:text-lg font-sans leading-[1.6] text-inky opacity-80">
                    B.S. Integrated Design and Media<br />
                    Minor: Media, Culture, Communication<br />
                    New York University Tandon School of Engineering<br />
                    ref: May 2025
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4 text-gold">research focus</h3>
                  <p className="text-sm sm:text-base md:text-lg font-sans leading-[1.6] text-inky opacity-80">
                    Neuroplasticity<br />
                    Neuroaesthetics<br />
                    Psychoacoustics<br />
                    Media Theory<br />
                    Digital Anthropology<br />
                    Human-Computer Interaction<br />
                    Therapeutic Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}
