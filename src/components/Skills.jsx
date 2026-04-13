export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto w-full">
      <div className="space-y-6 mb-16 relative">
        <span className="font-label text-outline uppercase tracking-[0.2em] text-sm font-semibold">Technical Proficiency</span>
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6">
          <span className="text-on-surface block">Forging Digital</span>
          <span className="text-primary block">Architectures.</span>
        </h2>
        <p className="text-on-surface-variant/90 text-lg max-w-2xl leading-[1.8] font-body">
          A curated selection of core technologies mastered through rigorous development, architectural design, and high-performance engineering.
        </p>
        
        {/* Subtle compass icon on the right */}
        <div className="absolute right-4 md:right-12 top-4 w-24 h-24 rounded-full border border-outline-variant/30 hidden md:flex items-center justify-center opacity-40">
           <span className="material-symbols-outlined text-4xl text-outline-variant">explore</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-6">
         {/* Programming Skills */}
         <div className="col-span-1 lg:col-span-4 glass-card p-10 rounded-[40px] flex flex-col gap-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#17171e]/60 border border-outline-variant/10">
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>devices</span>
               <h3 className="text-2xl font-headline font-semibold text-on-surface">Programming Skills</h3>
            </div>
            
            <div className="flex flex-col gap-6 mt-2">
               <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F7DF1E]/10 flex items-center justify-center text-[#F7DF1E] font-mono text-[13px] font-black border border-[#F7DF1E]/20">JS</div>
                  <span className="text-on-surface-variant text-lg font-medium font-body">JavaScript (ES8+)</span>
               </div>
               <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-mono text-[15px] font-black border border-primary/20">{`<>`}</div>
                  <span className="text-on-surface-variant text-lg font-medium font-body">Python</span>
               </div>
               <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-lg bg-[#ff716c]/10 flex items-center justify-center text-[#ff716c] font-mono text-[15px] border border-[#ff716c]/20">
                     <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_cafe</span>
                  </div>
                  <span className="text-on-surface-variant text-lg font-medium font-body">Java</span>
               </div>
            </div>
         </div>

         {/* Frameworks */}
         <div className="col-span-1 lg:col-span-6 glass-card p-10 rounded-[40px] flex flex-col gap-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#17171e]/60 border border-outline-variant/10">
            <div className="flex items-center gap-3">
               <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
               <h3 className="text-2xl font-headline font-semibold text-on-surface">Frameworks</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
               <div className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-[24px] p-5 flex items-center gap-4 hover:bg-[#252530] transition-colors cursor-default shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#61DAFB]/5 rounded-full blur-[30px] pointer-events-none"></div>
                  <div className="w-12 h-12 flex items-center justify-center text-[#61DAFB] bg-[#61DAFB]/10 rounded-full relative z-10 shrink-0">
                     <span className="material-symbols-outlined text-[24px]">science</span>
                  </div>
                  <span className="text-on-surface-variant font-medium text-[17px] font-body relative z-10">React</span>
               </div>

               <div className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-[24px] p-5 flex items-center gap-4 hover:bg-[#252530] transition-colors cursor-default shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#339933]/5 rounded-full blur-[30px] pointer-events-none"></div>
                  <div className="w-12 h-12 flex items-center justify-center text-[#339933] bg-[#339933]/10 rounded-full relative z-10 shrink-0">
                     <span className="material-symbols-outlined text-[24px]">energy_savings_leaf</span>
                  </div>
                  <span className="text-on-surface-variant font-medium text-[17px] font-body relative z-10">Node.js</span>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-auto">
               <div className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-[20px] p-4 flex items-center gap-3 hover:bg-[#252530] transition-colors cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center text-[#ff716c] bg-[#ff716c]/10 rounded-full shrink-0">
                     <span className="material-symbols-outlined text-[20px]">layers</span>
                  </div>
                  <span className="text-on-surface-variant font-medium text-[15px] font-body truncate">Express</span>
               </div>

               <div className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-[20px] p-4 flex items-center gap-3 hover:bg-[#252530] transition-colors cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center text-on-surface bg-surface-variant rounded-full shrink-0">
                     <span className="material-symbols-outlined text-[20px]">cruelty_free</span>
                  </div>
                  <span className="text-on-surface-variant font-medium text-[15px] font-body truncate">Flask</span>
               </div>

               <div className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-[20px] p-4 flex items-center gap-3 hover:bg-[#252530] transition-colors cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center text-[#6DB33F] bg-[#6DB33F]/10 rounded-full shrink-0">
                     <span className="material-symbols-outlined text-[20px]">power</span>
                  </div>
                  <span className="text-on-surface-variant font-medium text-[15px] font-body truncate">Spring Boot</span>
               </div>
            </div>
         </div>
      </div>

      {/* Tools Section */}
      <div className="glass-card p-10 rounded-[40px] mb-8 flex flex-col gap-8 shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#17171e]/60 border border-outline-variant/10">
         <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>handyman</span>
            <h3 className="text-2xl font-headline font-semibold text-on-surface">Tools</h3>
         </div>

         <div className="flex flex-wrap gap-4 mt-2">
            {[
              { name: "Git", icon: "commit", color: "#f14e32" },
              { name: "Docker", icon: "directions_boat", color: "#2496ed" },
              { name: "MongoDB", icon: "database", color: "#4db33d" },
              { name: "Terraform", icon: "public", color: "#5c4ee5" },
              { name: "Jenkins", icon: "person", color: "#d24939" },
              { name: "Kubernetes", icon: "anchor", color: "#326ce5" },
              { name: "GraphQL", icon: "hub", color: "#e10098" },
              { name: "Redis", icon: "memory", color: "#dc382d" },
              { name: "AWS", icon: "cloud", color: "#ff9900" },
              { name: "Figma", icon: "draw", color: "#f24e1e" },
            ].map((tool, idx) => (
              <div key={idx} className="bg-[#1c1c24]/80 border border-outline-variant/10 rounded-full px-5 py-3 flex items-center gap-3 hover:bg-[#252530] transition-colors cursor-default">
                 <span className="material-symbols-outlined text-[18px]" style={{ color: tool.color, fontVariationSettings: "'FILL' 1" }}>{tool.icon}</span>
                 <span className="text-on-surface-variant text-[15px] font-medium font-body tracking-wide">{tool.name}</span>
              </div>
            ))}
         </div>
      </div>

      {/* Quote Banner */}
      <div className="relative overflow-hidden rounded-[40px] p-16 md:p-24 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(0,0,0,0.2)] bg-[#14141a] border border-outline-variant/10 mt-12">
         {/* Deep ambient background gradients */}
         <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-secondary/10 opacity-60 z-0"></div>
         <div className="absolute top-0 left-[-10%] w-[50%] h-[150%] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
         <div className="absolute bottom-0 right-[-10%] w-[50%] h-[150%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

         <span className="material-symbols-outlined text-primary text-3xl mb-8 relative z-10" style={{ fontVariationSettings: "'FILL' 1" }}>magic_button</span>
         
         <h3 className="font-headline text-3xl md:text-5xl font-medium text-on-surface leading-tight max-w-4xl mb-8 relative z-10 italic tracking-tight">
            "True engineering is the convergence <br className="hidden md:block" /> of performance and elegance."
         </h3>

         <div className="font-label text-sm uppercase tracking-[0.4em] font-bold text-on-surface-variant/60 relative z-10">
            Digital Systems Architect &middot; 2024
         </div>
      </div>
    </section>
  );
}
