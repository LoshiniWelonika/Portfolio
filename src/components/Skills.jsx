export default function Skills() {
  const skills = [
    { title: "Frontend Architecture", items: ["React", "Vue", "Next.js", "WebAssembly"] },
    { title: "Core Systems", items: ["Rust", "Go", "TypeScript", "Node.js"] },
    { title: "Web3 & Decentralization", items: ["Solidity", "Ethers.js", "Smart Contracts", "Protocols"] }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full relative">
      <div className="absolute top-1/2 right-[-10%] w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start relative z-10">
        <div className="lg:col-span-5 space-y-6 sticky top-32">
          <span className="font-label text-primary uppercase tracking-[0.2em] text-xs font-bold">Capabilities</span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
            TECHNICAL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-dim">ARSENAL</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
            Bridging the gap between low-level performance and high-level user interface. Proficiency across the full modern stack.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className={`glass-panel ghost-border rounded-lg p-8 hover:bg-surface-container-highest transition-all duration-300 ${idx === 2 ? 'md:col-span-2' : ''}`}>
              <h3 className="font-headline font-black text-xl mb-6 tracking-wide uppercase text-on-surface">{skillGroup.title}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="px-4 py-2 rounded-full glass-card ghost-border text-xs font-label font-bold tracking-wider uppercase text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
