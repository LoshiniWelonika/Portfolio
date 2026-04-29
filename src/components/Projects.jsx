import donationImg from '../assets/bloodDonation.png';
import parkingImg from '../assets/parkingSys.png';
import truthlabImg from '../assets/truthlab.png';
import bookSearchImg from '../assets/bookSearch.jpg';
import movieAppImg from '../assets/movie.png';
import { motion } from 'framer-motion';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return (
    <section id="projects" className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-20 text-center"
      >
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-label font-bold mb-4 block">Projects Archive</span>
        <h2 className="text-6xl md:text-7xl font-black font-headline tracking-tighter mb-6 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
          DIGITAL<br />CRAFTSMANSHIP
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          A collection of projects built through experimentation, iteration, and continuous learning—bridging theory with practical development.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8 lg:gap-12 items-stretch"
        >

          {/* Project 1 */}
          <motion.div variants={itemVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,221,255,0.12)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Sentinel Protocol" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={donationImg} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">React</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">Flask</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">SQLite</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase">Blood Donation & Management System</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A web application built to streamline blood requests, donor registration, and awareness to save lives faster and more efficiently.
                </p>
                <a href="https://github.com/LoshiniWelonika/Blood-Donation-Site" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={itemVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(96,165,250,0.12)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Prism DEX" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={parkingImg} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-label font-bold uppercase">HTML</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-label font-bold uppercase">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-label font-bold uppercase">MongoDB</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">group</span> Group Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase">PARKING MANAGEMENT SYSTEM</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A smart parking management system that automates space allocation, permits, and monitoring to make parking easier, faster, and more efficient.                </p>
                <a href="https://github.com/SE4106-Project-Group-11/Parking-Management-System" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={itemVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,221,255,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Aether Bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={truthlabImg} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">REACT</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">FLASK</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">PYTHON</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">group</span> Group Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">AI FAKE NEWS DETECTOR</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  TRUTHLAB is an AI-powered system that detects fake news in real time by analyzing content and verifying credibility using NLP and machine learning.
                </p>
                <a href="https://github.com/SE5104-Mini-Project-Group-08/TruthLab" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-primary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={itemVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,231,146,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Fractal Engine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={bookSearchImg} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-label font-bold uppercase">REACT</span>
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-label font-bold uppercase">GOOGLE BOOKS API</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">BOOK SEARCHING WEB TOOL</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  This tool allows users to explore, search, and discover books with ease. It’s fast, responsive, and designed to make book discovery more intuitive for readers and researchers alike.                </p>
                <a href="https://github.com/LoshiniWelonika/Book-Search-Tool" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-tertiary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div variants={itemVariants} className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(221,139,251,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Nova Protocol" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={movieAppImg} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">HTML</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">CSS</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">MOVIE RECOMMENDATION SITE</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A visually engaging movie recommendation website, showcasing responsive design, creative UI/UX, and clean layout techniques.
                </p>
                <a href="https://github.com/LoshiniWelonika/Movie-Recommendation-Site" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-secondary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
