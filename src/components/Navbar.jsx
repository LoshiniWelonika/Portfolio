export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full border border-outline-variant bg-surface-container/80 backdrop-blur-xl shadow-[0_0_48px_rgba(109,221,255,0.08)] flex justify-between items-center px-8 py-3 z-50">
      <div className="text-xl font-black tracking-tighter text-primary font-headline">ETH_ENGINEER</div>
      <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
        <a href="#home" className="text-on-surface-variant hover:text-on-surface transition-colors">Home</a>
        <a href="#skills" className="text-on-surface-variant hover:text-on-surface transition-colors">Skills</a>
        <a href="#projects" className="text-on-surface-variant hover:text-on-surface transition-colors">Projects</a>
        <a href="#contact" className="text-primary font-bold border-b border-primary/50 pb-1">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-primary hover:bg-surface-container-high hover:scale-[1.02] transition-all p-2 rounded-full">terminal</button>
        <button className="material-symbols-outlined text-primary hover:bg-surface-container-high hover:scale-[1.02] transition-all p-2 rounded-full">code</button>
      </div>
    </nav>
  );
}
