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

          <div className="flex flex-col sm:flex-row gap-5 items-center mt-auto mb-4">
            <button className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-headline font-bold text-[15px] tracking-wide hover:shadow-[0_0_24px_rgba(109,221,255,0.4)] transition-all flex items-center justify-center gap-2 min-w-[180px]">
              View Projects 
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            
            <button className="px-8 py-3.5 rounded-full bg-surface-variant/40 border border-outline-variant/30 text-on-surface font-headline font-bold text-[15px] hover:bg-surface-variant transition-all min-w-[180px]">
              Contact Me
            </button>
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
