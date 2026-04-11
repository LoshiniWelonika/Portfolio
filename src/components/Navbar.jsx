import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if top is slightly above the viewport middle or similar
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      // If we are at the top of the page, default to home
      if (window.scrollY < 100) {
        current = 'home';
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full border border-outline-variant bg-surface-container/80 backdrop-blur-xl shadow-[0_0_48px_rgba(109,221,255,0.08)] flex justify-between items-center px-8 py-3 z-50 transition-all duration-300">
      <div className="text-xl font-black tracking-tighter text-primary font-headline">ETH_ENGINEER</div>
      
      <div className="hidden md:flex items-center gap-8 font-headline font-bold text-[15px] tracking-tight">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveSection(link.id)}
            className={`transition-all duration-300 pb-1 border-b-2 ${
              activeSection === link.id
                ? 'text-primary border-primary/80 drop-shadow-[0_0_8px_rgba(109,221,255,0.4)]'
                : 'text-on-surface-variant border-transparent hover:text-on-surface hover:border-on-surface/30'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-primary hover:bg-surface-container-high hover:scale-[1.02] transition-all p-2 rounded-full">terminal</button>
        <button className="material-symbols-outlined text-primary hover:bg-surface-container-high hover:scale-[1.02] transition-all p-2 rounded-full">code</button>
      </div>
    </nav>
  );
}
