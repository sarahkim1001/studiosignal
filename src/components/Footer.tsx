import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate text-foundation">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-20 py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 lg:gap-32">
          {/* Left Column: Navigation */}
          <div>
            <div className="text-xl sm:text-2xl font-geist-mono font-bold lowercase text-foundation mt-8 sm:mt-12 mb-8 sm:mb-12" style={{ letterSpacing: '0.1em' }}>
              studio<br />signal
            </div>
            <div className="text-base sm:text-lg md:text-xl font-sans text-foundation opacity-80 mb-8 sm:mb-12">
              Principal: Sarah Kim
            </div>
            <nav className="flex flex-col gap-4 sm:gap-6">
              <Link 
                href="/lab"
                prefetch={false}
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                lab
              </Link>
              <Link 
                href="/info"
                prefetch={false}
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                info
              </Link>
              <Link 
                href="/contact"
                prefetch={false}
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                contact
              </Link>
            </nav>
          </div>
          
          {/* Right Column: Contact & Location */}
          <div>
            <div className="text-xl sm:text-2xl font-sans font-bold lowercase text-foundation mb-8 sm:mb-12" style={{ letterSpacing: '0.1em' }}>
              contact
            </div>
            <div className="flex flex-col gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Link 
                href="mailto:sarah@sarahkim.com" 
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                email
              </Link>
              <Link 
                href="https://linkedin.com/in/sarahkim" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                linkedin
              </Link>
              <Link 
                href="/cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl md:text-2xl font-sans font-bold lowercase text-foundation hover:opacity-80 transition-opacity min-h-[44px] flex items-center"
                style={{ letterSpacing: '0.1em' }}
              >
                cv
              </Link>
            </div>
            
            <div className="text-xl sm:text-2xl font-sans font-bold lowercase text-foundation mb-4 sm:mb-6" style={{ letterSpacing: '0.1em' }}>
              location
            </div>
            <div className="text-base sm:text-lg font-sans leading-[1.6] text-foundation opacity-80">
              <p className="mb-4">
                Currently: Palo Alto, CA
              </p>
              <p>
                Previously: New York, NY, Florence, IT
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
