import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, Zap, Shield, BarChart3, ArrowRight, ArrowUpRight } from 'lucide-react';

const About = () => {
  // Setting the first card (index 0) as open by default bruh
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const values = [
    {
      icon: <Zap size={32} />,
      title: "Innovation",
      desc: "Creative strategies that stand out in a digital world, powered by generative systems and cutting-edge tech.",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80"
    },
    {
      icon: <Shield size={32} />,
      title: "Trust",
      desc: "Building long-term client relationships through radical transparency, integrity, and consistent delivery.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Results",
      desc: "High-performance campaigns that deliver real ROI and measurable business growth across all platforms.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-[#B2278C]/30 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 lg:px-24">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#B2278C]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.div {...fadeIn}>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#B2278C]" />
              <span className="text-[#B2278C] uppercase tracking-[0.5em] text-xs font-bold">The Agency</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-[0.85]">
              Packaging <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Success.</span><br/>
              Innovated for <span className="text-[#B2278C]">Leaders.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { title: "Our Mission", icon: <Target size={32}/>, desc: "To turn your business goals into measurable online success with creative, smart strategies.", id: "02" },
            { title: "Our Vision", icon: <Eye size={32}/>, desc: "Redefining the digital frontier through generative systems and human-centric design.", id: "03" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              {...fadeIn}
              className="group relative h-[450px] rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[120px]">
                <div className="p-4 rounded-2xl bg-[#B2278C]/10 text-[#B2278C] mb-6">{item.icon}</div>
                <h3 className="text-4xl font-bold uppercase tracking-tight">{item.title}</h3>
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center justify-between text-[#B2278C]">
                    <span className="text-xs font-black uppercase tracking-widest">Learn More</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DRIVEN BY VALUES: ONE ALWAYS OPEN BRUH --- */}
      <section className="relative py-32 px-6 md:px-16 lg:px-24 min-h-screen flex items-center overflow-hidden">
        
        {/* BG IMAGE SWAP */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <img 
                src={values[hoveredIndex].img} 
                className="w-full h-full object-cover"
                alt="background"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">Driven by Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const isOpen = hoveredIndex === i;
              
              return (
                <motion.div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`relative h-[500px] rounded-[2.5rem] border transition-all duration-700 overflow-hidden cursor-pointer
                    ${isOpen ? 'border-[#B2278C] bg-white/[0.08]' : 'border-white/10 bg-white/[0.03]'}
                  `}
                >
                  {/* Heading - Slides up if isOpen */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isOpen ? '-translate-y-[150px]' : 'translate-y-0'}
                  `}>
                    <div className={`mb-6 transition-colors duration-500 ${isOpen ? 'text-[#B2278C]' : 'text-white/40'}`}>
                      {v.icon}
                    </div>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter text-center">{v.title}</h3>
                  </div>

                  {/* Content Box - Slides up if isOpen */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    ${isOpen ? 'translate-y-0' : 'translate-y-full'}
                  `}>
                    <div className="bg-white/10 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-2xl">
                      <p className="text-gray-200 leading-relaxed text-sm mb-8">{v.desc}</p>
                      <div className="flex items-center justify-between border-t border-white/10 pt-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#B2278C]">Tell me more</span>
                        <div className="w-10 h-10 rounded-full border border-[#B2278C] flex items-center justify-center bg-[#B2278C] text-white">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-40 px-6 flex flex-col items-center text-center relative">
        <motion.div {...fadeIn}>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Ready to <span className="text-[#B2278C]">Scale?</span>
          </h2>
          <button className="px-12 py-5 bg-[#B2278C] text-white font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500 hover:shadow-[0_0_40px_rgba(178,39,140,0.5)]">
            Start Your Journey
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;