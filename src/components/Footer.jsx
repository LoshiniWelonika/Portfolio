export default function Footer() {
  return (
    <footer className="w-full border-t border-surface-container bg-surface-container-low/60 flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-6 mt-12">
      <div className="font-body text-sm uppercase tracking-widest text-outline">
        © 2024 THE ETHEREAL ENGINEER. BUILT WITH PRECISION.
      </div>
      <div className="flex gap-8">
        <a href="#" className="font-body text-sm uppercase tracking-widest text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100">GitHub</a>
        <a href="#" className="font-body text-sm uppercase tracking-widest text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100">LinkedIn</a>
        <a href="#" className="font-body text-sm uppercase tracking-widest text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100 text-primary">Source</a>
      </div>
    </footer>
  );
}
