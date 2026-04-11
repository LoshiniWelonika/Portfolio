import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <div className="absolute inset-0 bg-grid-pattern -z-20 opacity-30"></div>
      
      <div className="max-w-[1200px] w-full glass-card p-12 md:p-20 rounded-[48px] mx-auto shadow-[0_0_64px_rgba(109,221,255,0.02)] border border-outline-variant/20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-left z-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8 mt-4 md:mt-0">
            <span className="text-primary text-xs font-label uppercase tracking-[0.2em] font-bold">
              Available for new projects
            </span>
          </div>
          
          <h1 className="font-headline text-6xl md:text-[88px] font-black tracking-[-0.03em] leading-[0.95] mb-6">
            <span className="text-on-surface block">ALEXANDER</span>
            <span className="text-primary block">VON STERN</span>
          </h1>
          
          <h2 className="font-headline text-2xl md:text-[28px] text-on-surface-variant mb-8 font-medium">
            Full Stack Developer
          </h2>
          
          <p className="text-on-surface-variant/80 text-base md:text-lg max-w-lg mb-10 leading-[1.8] font-body">
            Architecting digital ecosystems where performance meets aesthetics. I build scalable, high-performance applications with a focus on technical precision and ethereal user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-14 items-center">
            <button className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-headline font-bold text-[15px] tracking-wide hover:shadow-[0_0_24px_rgba(109,221,255,0.4)] transition-all flex items-center justify-center gap-2 min-w-[180px]">
              View Projects 
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            
            <button className="px-8 py-3.5 rounded-full bg-surface-variant/40 border border-outline-variant/30 text-on-surface font-headline font-bold text-[15px] hover:bg-surface-variant transition-all min-w-[180px]">
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 mt-auto">
            <a href="#" className="text-primary opacity-90 hover:opacity-100 hover:text-primary-container transition-all drop-shadow-[0_0_15px_rgba(109,221,255,0.6)]">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-primary opacity-90 hover:opacity-100 hover:text-primary-container transition-all drop-shadow-[0_0_15px_rgba(109,221,255,0.6)]">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center md:mr-4">
          {/* Circular Rings Background */}
          <div className="absolute inset-0 rounded-full border border-primary/20 scale-100 shadow-[0_0_80px_rgba(109,221,255,0.05)] w-[110%] h-[110%] left-[-5%] top-[-5%]"></div>
          <div className="absolute inset-0 rounded-full border border-secondary/20 scale-[1.25] w-[110%] h-[110%] left-[-5%] top-[-5%]"></div>
          
          {/* Main Image Wrapper */}
          <div className="relative w-[340px] md:w-[380px] h-[360px] md:h-[400px] rounded-[32px] overflow-hidden border border-outline-variant/30 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-surface-container">
            <img 
              src={heroImg} 
              alt="Alexander Von Stern" 
              className="w-full h-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-500 scale-105"
            />
            {/* Very faint inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Active Node Badge */}
          <div className="absolute bottom-6 -right-2 glass-panel border border-outline-variant/40 px-4 py-2.5 rounded-full flex items-center gap-2.5 z-20 shadow-xl overflow-hidden before:absolute before:inset-0 before:bg-surface/50 before:-z-10">
            <div className="w-2 h-2 rounded-full bg-tertiary-fixed shadow-[0_0_8px_rgba(255,215,9,0.9)] animate-pulse"></div>
            <span className="font-label text-[10px] font-bold text-on-surface tracking-widest uppercase">
              ETH_NODE ACTIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
