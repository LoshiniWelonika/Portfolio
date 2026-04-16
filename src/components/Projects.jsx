import donationImg from '../assets/bloodDonation.png';

export default function Projects() {
  return (
    <section id="projects" className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-label font-bold mb-4 block">Projects Archive</span>
        <h2 className="text-6xl md:text-7xl font-black font-headline tracking-tighter mb-6 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
          DIGITAL<br />CRAFTSMANSHIP
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          A collection of projects built through experimentation, iteration, and continuous learning—bridging theory with practical development.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">

          {/* Project 1 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,221,255,0.12)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Sentinel Protocol" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={donationImg} />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">React</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">Rust</span>
                  <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-label font-bold uppercase">WASM</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase">Blood Donation & Management System</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A web application built to streamline blood requests, donor registration, and awareness to save lives faster and more efficiently.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(221,139,251,0.1)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Prism DEX" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHzmC6g-efeW9hM3PiqeP9CnnoHvCDNowibvQbC-DkmkITZNnhRaUI9wigZY0xz_VX8GTIcOG7R-AIJcGt7_DxahHlwDNfVCQ5VNox14suwno7h817iNIFh1vSwU_mq7q_xXGWV3ZaMlJQTjIk9GwH2aAR7_hBdVPJfRRwoYwkKVsZuLv7meCOoENxe6C1xPID3hhF2Ws19WsmsFMiClMv2qENt1g0fE6AiV5lsR0de3EbooUd5S_cFZasPj0vFWbO36bffbgFI3f" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">Solidity</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">Viem</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">group</span> Group Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase">PRISM DEX</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  The next-gen AMM with concentrated liquidity and refractive trade routing for minimal slippage.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-secondary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,221,255,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Aether Bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBju31Z5LcuU7XcOEhlfa9Qp2ai3ejcB998ox7fgaj0yK2lHXUas6sPr2RbGUldR798u10ETu_xhzRL9cI1wwlGCXErYEuPVuCjvFmuVDIiGC6pwj9EZqSbP33Yb_kdlnDgrje9Gp7GVoYV0mE3dV_7xL_Vu9RLbdxpZWRCGVIjxKjKTLjyfw9zO-sL8iEyaZreSqo3m1DOcRljJo-ldzxMlsUbbFrKwqSrBX-vLF6h4pLniD5_Jf9Dt2cJ03R5A03e1p0Pg3MOsObL" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">Go</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">gRPC</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">AETHER BRIDGE</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Cross-chain messaging protocol utilizing zero-knowledge proofs for trustless state transfer between L2s.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-primary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,231,146,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Fractal Engine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb2Tcc4wxmSYV2E7p6Oykf5V-Kl-FQ-KCnLyzMU9ZpG0K0fxaT2iQhZKo9j5AG0BtmmgFQRIqFdyaalIJZfT_fyPy9qu-XgqsgoHiT-6dl89UtYXvtuVf-SvnUDiwQKbN88PHiHToVgFMLar6Mm43X0a7JoRPB-v3t-MLuws4GsijQDChSuoTE_54Eho1ALNTlmHLdoavYCaEHO3bRzbtG5HrOE4_VyK0Zd4-LTQTAvIlr99HBTFhkexaEXjmsbvXw_-Us1-rc69HS" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-label font-bold uppercase">TypeScript</span>
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-label font-bold uppercase">WebGPU</span>
                  <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-label font-bold uppercase">GLSL</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">group</span> Group Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">FRACTAL ENGINE</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  A high-performance rendering engine built on WebGPU, capable of processing recursive mathematical structures in real-time within the browser environment.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-tertiary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(221,139,251,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Nova Protocol" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHzmC6g-efeW9hM3PiqeP9CnnoHvCDNowibvQbC-DkmkITZNnhRaUI9wigZY0xz_VX8GTIcOG7R-AIJcGt7_DxahHlwDNfVCQ5VNox14suwno7h817iNIFh1vSwU_mq7q_xXGWV3ZaMlJQTjIk9GwH2aAR7_hBdVPJfRRwoYwkKVsZuLv7meCOoENxe6C1xPID3hhF2Ws19WsmsFMiClMv2qENt1g0fE6AiV5lsR0de3EbooUd5S_cFZasPj0vFWbO36bffbgFI3f" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">React</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold uppercase">Node.js</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">group</span> Group Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">NOVA PROTOCOL</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Decentralized identity verification built on StarkNet. A zero-knowledge approach to seamless, privacy-preserving authentication.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-secondary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(109,221,255,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden shrink-0">
                <img alt="Quantum Yield" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBju31Z5LcuU7XcOEhlfa9Qp2ai3ejcB998ox7fgaj0yK2lHXUas6sPr2RbGUldR798u10ETu_xhzRL9cI1wwlGCXErYEuPVuCjvFmuVDIiGC6pwj9EZqSbP33Yb_kdlnDgrje9Gp7GVoYV0mE3dV_7xL_Vu9RLbdxpZWRCGVIjxKjKTLjyfw9zO-sL8iEyaZreSqo3m1DOcRljJo-ldzxMlsUbbFrKwqSrBX-vLF6h4pLniD5_Jf9Dt2cJ03R5A03e1p0Pg3MOsObL" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">Python</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">Pandas</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2 text-on-surface-variant/70 text-[10px] font-black tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[14px]">person</span> Personal Project
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">QUANTUM YIELD</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Algorithmic trading strategy analysis platform, leveraging historical on-chain data and generative modeling.
                </p>
                <a href="https://github.com/LoshiniWelonika" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-primary font-bold group/link relative z-10 transition-colors">
                  Github Repo <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
