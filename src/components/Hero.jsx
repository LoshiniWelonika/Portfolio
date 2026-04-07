export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden px-6">
      <div className="absolute inset-0 bg-grid-pattern -z-10"></div>
      <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      
      <div className="max-w-5xl w-full flex flex-col items-center text-center z-10 glass-card p-12 md:p-24 rounded-3xl mx-auto shadow-[0_0_64px_rgba(109,221,255,0.05)] border border-outline-variant/30">
        <span className="font-label text-primary uppercase tracking-[0.2em] text-sm font-bold mb-6 block">
          Creative North Star
        </span>
        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-primary via-primary-container to-secondary bg-clip-text text-transparent leading-tight -ml-2">
          THE DIGITAL ARCHITECT
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Code meets craftsmanship. Designing high-end, atmospheric environments that transcend the standard boxy layout into an expansive digital experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold text-lg tracking-tight hover:shadow-[0_0_24px_rgba(109,221,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2">
            Explore Protocol
            <span className="material-symbols-outlined text-xl">rocket_launch</span>
          </button>
          
          <button className="px-8 py-4 rounded-full glass-panel ghost-border font-headline font-bold text-lg text-primary hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
            View Source
            <span className="material-symbols-outlined text-xl">code</span>
          </button>
        </div>
      </div>
    </section>
  );
}
