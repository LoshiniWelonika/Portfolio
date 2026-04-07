export default function Projects() {
  return (
    <section id="projects" className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-sm uppercase tracking-[0.2em] text-primary font-label font-bold mb-4 block">Archive 2024</span>
        <h2 className="text-6xl md:text-7xl font-black font-headline tracking-tighter mb-6 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
          ENGINEERING<br/>INTUITION.
        </h2>
        <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
          A curated selection of technical experiments, full-stack architectures, and ethereal interface designs. Each project represents a bridge between complex logic and seamless interaction.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Project 1 */}
          <div className="md:col-span-8 group">
            <div className="glass-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_64px_rgba(109,221,255,0.12)]">
              <div className="aspect-video relative overflow-hidden">
                <img alt="Sentinel Protocol" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHFsv1LMyU6nX68Y368-K86IdI_vk10-jtbsekzVEV8PufEqdcHjgzudsrXHnGbR4Uylsuf-az66jIwSbubEKFn07bLYI5tmB62LrbjcUDdHSLJH4zRWeZ_oUbwMQRWIM1IIVY64hud-o2XwdOi-NTPBBxCAoi0eP8pSalnuWS93QXf4zks2Ib1J-fVhvgc-kQkrhG7hmogoRSn81dalpwtmkEykBbfu3mCBzNctFi31lS9V-ECWZiyKfFlbZbvnYMAJSvzwe0Uzau" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold tracking-wider uppercase">Next.js</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold tracking-wider uppercase">Rust</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold tracking-wider uppercase">WebAssembly</span>
                </div>
                <h3 className="text-4xl font-black font-headline tracking-tight mb-4">SENTINEL PROTOCOL</h3>
                <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
                  A distributed real-time intrusion detection system designed for Ethereum node operators. Leveraging Rust for core computation and Next.js for the ethereal visualization layer.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold rounded-full hover:shadow-[0_0_16px_#6dddffaa] transition-all flex items-center gap-2">
                    Live Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                  <a href="#" className="px-8 py-3 bg-surface-variant/40 ghost-border rounded-full hover:bg-surface-variant/60 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">code</span> View Source
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-4 group h-full">
            <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_64px_rgba(221,139,251,0.1)]">
              <div className="aspect-square relative overflow-hidden">
                <img alt="Prism DEX" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhHzmC6g-efeW9hM3PiqeP9CnnoHvCDNowibvQbC-DkmkITZNnhRaUI9wigZY0xz_VX8GTIcOG7R-AIJcGt7_DxahHlwDNfVCQ5VNox14suwno7h817iNIFh1vSwU_mq7q_xXGWV3ZaMlJQTjIk9GwH2aAR7_hBdVPJfRRwoYwkKVsZuLv7meCOoENxe6C1xPID3hhF2Ws19WsmsFMiClMv2qENt1g0fE6AiV5lsR0de3EbooUd5S_cFZasPj0vFWbO36bffbgFI3f" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold tracking-wider uppercase">Solidity</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-label font-bold tracking-wider uppercase">Viem</span>
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase">PRISM DEX</h3>
                <p className="text-on-surface-variant text-sm mb-8">
                  The next-gen AMM with concentrated liquidity and refractive trade routing for minimal slippage.
                </p>
                <div className="mt-auto flex gap-3">
                  <a href="#" className="flex-1 py-2 ghost-border text-center rounded-full text-sm font-bold hover:bg-white/5 transition-all">GitHub</a>
                  <a href="#" className="flex-1 py-2 bg-secondary text-on-secondary text-center rounded-full text-sm font-bold hover:brightness-110 transition-all">Launch</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="md:col-span-5 group">
            <div className="glass-card rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_64px_rgba(109,221,255,0.08)]">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img alt="Aether Bridge" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBju31Z5LcuU7XcOEhlfa9Qp2ai3ejcB998ox7fgaj0yK2lHXUas6sPr2RbGUldR798u10ETu_xhzRL9cI1wwlGCXErYEuPVuCjvFmuVDIiGC6pwj9EZqSbP33Yb_kdlnDgrje9Gp7GVoYV0mE3dV_7xL_Vu9RLbdxpZWRCGVIjxKjKTLjyfw9zO-sL8iEyaZreSqo3m1DOcRljJo-ldzxMlsUbbFrKwqSrBX-vLF6h4pLniD5_Jf9Dt2cJ03R5A03e1p0Pg3MOsObL" />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">Go</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label font-bold uppercase">gRPC</span>
                </div>
                <h3 className="text-2xl font-black font-headline tracking-tight mb-3">AETHER BRIDGE</h3>
                <p className="text-on-surface-variant text-sm mb-6">
                  Cross-chain messaging protocol utilizing zero-knowledge proofs for trustless state transfer between L2s.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-bold group/link relative z-10 transition-colors">
                  Review Documentation <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="md:col-span-7 group">
            <div className="glass-card rounded-lg overflow-hidden flex flex-col md:flex-row transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_64px_rgba(255,231,146,0.08)]">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img alt="Fractal Engine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb2Tcc4wxmSYV2E7p6Oykf5V-Kl-FQ-KCnLyzMU9ZpG0K0fxaT2iQhZKo9j5AG0BtmmgFQRIqFdyaalIJZfT_fyPy9qu-XgqsgoHiT-6dl89UtYXvtuVf-SvnUDiwQKbN88PHiHToVgFMLar6Mm43X0a7JoRPB-v3t-MLuws4GsijQDChSuoTE_54Eho1ALNTlmHLdoavYCaEHO3bRzbtG5HrOE4_VyK0Zd4-LTQTAvIlr99HBTFhkexaEXjmsbvXw_-Us1-rc69HS" />
              </div>
              <div className="md:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <span className="text-tertiary font-label text-xs font-black tracking-widest mb-2 uppercase">Core Infrastructure</span>
                <h3 className="text-3xl font-black font-headline tracking-tight mb-4">FRACTAL ENGINE</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  A high-performance rendering engine built on WebGPU, capable of processing recursive mathematical structures in real-time within the browser environment.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 ghost-border rounded text-[10px] uppercase font-bold text-outline">TypeScript</span>
                  <span className="px-2 py-1 ghost-border rounded text-[10px] uppercase font-bold text-outline">WebGPU</span>
                  <span className="px-2 py-1 ghost-border rounded text-[10px] uppercase font-bold text-outline">GLSL</span>
                </div>
                <div className="flex gap-4">
                  <button className="material-symbols-outlined p-3 rounded-full ghost-border text-tertiary hover:bg-tertiary/10 transition-all">terminal</button>
                  <button className="material-symbols-outlined p-3 rounded-full ghost-border text-tertiary hover:bg-tertiary/10 transition-all">code</button>
                  <button className="flex-1 py-3 bg-tertiary text-on-tertiary font-bold rounded-full text-center hover:shadow-[0_0_20px_rgba(255,231,146,0.3)] transition-all">Explore Tech</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
