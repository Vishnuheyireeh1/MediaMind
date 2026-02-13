import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Target, Eye, Zap, Shield, BarChart3 } from 'lucide-react'
import About from './About';

// --- DATA: SERVICES ---
const services = [
  {
    id: "01",
    title: "Social Media Strategy",
    desc: "We engineer digital presence. From viral trend-mapping to hyper-targeted engagement loops, we ensure your brand leads the conversation.",
    image: "https://sonarplatform.com/wp-content/uploads/2022/11/media-strategy.jpg",
    size: "md:col-span-2 md:row-span-1"
  },
  {
    id: "02",
    title: "CRM & Lifecycle",
    desc: "Implementing high-fidelity automation via Zoho and HubSpot to turn leads into brand evangelists with 40% higher retention.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    size: "md:col-span-1 md:row-span-2"
  },
  {
    id: "03",
    title: "Performance Ads",
    desc: "Eliminate wasted spend with algorithmic bidding. Our frameworks are built for aggressive ROI and market dominance.",
    image: "https://t4.ftcdn.net/jpg/06/12/22/29/360_F_612222999_7nT8JXjdVkJMOdRHLBhQBqTvV8flOEJO.jpg",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: "04",
    title: "UX Architecture",
    desc: "High-performance, SEO-optimized digital experiences that merge aesthetic fluidity with conversion-focused design.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: "05",
    title: "Branding & Identity",
    desc: "Identity is the soul of business. We craft logos, typography, and voice that resonate on a visceral level.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80",
    size: "md:col-span-2 md:row-span-1"
  },
  {
    id: "06",
    title: "SEO Supremacy",
    desc: "Visibility is currency. Technical integrity and content clusters that guarantee long-term organic growth.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80",
    size: "md:col-span-1 md:row-span-1"
  },
  {
    id: "07",
    title: "High-Fidelity Content",
    desc: "Cinematic video and interactive storytelling assets that establish your brand as the definitive authority.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    size: "md:col-span-3 md:row-span-1"
  }
];

// --- DATA: VALUES ---
const values = [
  {
    icon: <Zap className="text-blue-400" />,
    title: "Innovation",
    desc: "Creative strategies that stand out in a digital world, powered by generative systems."
  },
  {
    icon: <Shield className="text-blue-400" />,
    title: "Trust",
    desc: "Building long-term client relationships through radical transparency and integrity."
  },
  {
    icon: <BarChart3 className="text-blue-400" />,
    title: "Results",
    desc: "High-performance campaigns that deliver real ROI and measurable business growth."
  }
];

// --- COMPONENT: SERVICE CARD ---
const ServiceCard = ({ service, index }) => {
  const xOffset = index % 2 === 0 ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      className={`relative overflow-hidden group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md ${service.size} min-h-[300px] transition-all duration-500`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
        <span className="text-blue-400 font-mono text-sm mb-2 block tracking-widest">{service.id}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="bg-black scroll-smooth">
      
      {/* --- SECTION 1: STICKY HERO --- */}
      <div className="sticky top-0 w-full h-screen overflow-hidden text-white bg-[#000000] z-10">
        <Spline
          scene="https://prod.spline.design/vQ8RVSUuuGlv4cRH/scene.splinecode"
          className="absolute inset-0"
        />
        <div className="relative z-10 flex flex-col justify-center mt-10 md:mt-40 h-full px-10 pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight uppercase tracking-tighter">
            Your Vision, <br /> Our Mission
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl text-lg md:text-xl font-light">
            We transform your goals into digital success with smart marketing and CRM solutions.
          </p>
          <p className="mt-4 text-gray-400 max-w-md text-sm leading-relaxed border-l border-blue-500 pl-4">
            At Media Mind Digital, we help brands grow through data-driven CRM Marketing 
            and creative strategies, turning customer insights into loyalty.
          </p>
        </div>
        <div className="absolute bottom-10 right-10 z-20 text-right max-w-xs hidden md:block pointer-events-none">
           <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold mb-2">Measurable Success</p>
           <p className="text-sm text-gray-300">Turning customer insights into long-term loyalty and online success.</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-2">Scroll Down</span>
          <div className="animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-5 right-2 w-[150px] h-[40px] bg-black/100 z-0"></div>
      </div>

      {/* --- SECTION 2: SERVICES (GLASS GALLERY) --- */}
      <div className="relative z-30 w-full bg-[#050505] text-white py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight  tracking-tighter">Our Services</h2>
              <div className="h-1 w-32 bg-[#B2278C] mt-4"></div>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Deploying multi-disciplinary expertise to solve complex digital challenges.
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* --- SECTION 3: ABOUT US (GLASS COMMAND CENTER) --- */}
      {/* <section className="relative z-30 bg-black text-white py-24 px-6 md:px-16 lg:px-24 border-t border-white/5">
<About/>
      </section> */}



      {/* CSS ANIMATIONS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
          50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
        }
        .animate-bounce { animation: bounce 1.5s infinite; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
      `}} />

    </div>
  )
}

export default Home;