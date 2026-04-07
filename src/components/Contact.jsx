export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Information Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">Initiate Connection</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">future</span>.
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              Currently available for select architectural challenges. Reach out to discuss technical consulting, full-stack development, or protocol design.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 gap-4">
            <a href="#" className="glass-panel ghost-border p-6 rounded-lg flex items-center justify-between group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Email</p>
                  <p className="font-headline font-medium">hello@ethereal.engineer</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">north_east</span>
            </a>

            <a href="#" className="glass-panel ghost-border p-6 rounded-lg flex items-center justify-between group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">GitHub</p>
                  <p className="font-headline font-medium">github.com/ethereal-eng</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">north_east</span>
            </a>

            <a href="#" className="glass-panel ghost-border p-6 rounded-lg flex items-center justify-between group hover:bg-surface-container-high transition-all duration-300">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
                <div>
                  <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">LinkedIn</p>
                  <p className="font-headline font-medium">linkedin.com/in/eth-engineer</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">north_east</span>
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7 relative">
          {/* Ambient Glow Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="glass-panel ghost-border rounded-lg p-8 md:p-12 relative z-10 shadow-[0_0_48px_rgba(109,221,255,0.05)]">
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="name" className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">Name</label>
                  <input type="text" id="name" placeholder="John Doe" className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all outline-none" />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="email" className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all outline-none" />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="font-label text-xs uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary transition-colors">Message</label>
                <textarea id="message" rows="5" placeholder="Describe your vision..." className="w-full bg-surface-container-highest border-none rounded-lg p-4 text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary transition-all outline-none resize-none"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-5 px-8 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline font-bold text-lg tracking-tight hover:shadow-[0_0_24px_rgba(109,221,255,0.4)] transition-all active:scale-95 flex items-center justify-center gap-3">
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </div>
            </form>

            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="h-px bg-outline-variant/30 flex-grow"></div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-outline whitespace-nowrap">Security Guaranteed</span>
              <div className="h-px bg-outline-variant/30 flex-grow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
