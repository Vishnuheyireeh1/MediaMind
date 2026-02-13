import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, Linkedin, ArrowRight, Phone, MessageSquare, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmallLogo from "../assets/12.png";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeLink, setActiveLink] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lastScrollY = useRef(0);

  // AUTO-OPEN MODAL (10 seconds)
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsModalOpen(true), 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0 || currentScrollY < lastScrollY.current) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
        setMobileMenuOpen(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || isModalOpen) ? 'hidden' : 'unset';
  }, [mobileMenuOpen, isModalOpen]);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveLink(name);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* --- HEADER NAV --- */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: isExpanded ? 0 : -120 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-[999] pointer-events-none"
      >
        <nav className="max-w-[1440px] mx-auto flex items-center justify-between py-8 px-8 md:px-16 pointer-events-auto">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home', 'HOME')} className="flex items-center gap-3 group">
            <img src={SmallLogo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:rotate-[10deg]" />
            <div className="flex flex-col leading-tight">
              <span className="font-black uppercase tracking-tighter text-xl text-white">Media Mind</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#B2278C]">Digital</span>
            </div>
          </a>

          {/* Centered Desktop Menu */}
          <div className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2 space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className="group relative"
              >
                <span className={`text-[11px] font-black tracking-[0.4em] transition-colors duration-300 ${activeLink === link.name ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                  {link.name}
                </span>
                {activeLink === link.name && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#B2278C]" />
                )}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <button 
              // onClick={() => setIsModalOpen(true)}
              className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] text-white border-b border-white/20 hover:border-[#B2278C] hover:text-[#B2278C] transition-all pb-1"
            >
              Let's Connect
            </button>
            <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[1001] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <img src={SmallLogo} alt="Logo" className="h-10" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X size={32} /></button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className="text-4xl font-black uppercase tracking-tighter text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONNECT MODAL (Corrected Animation) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">Ready to <br/><span className="text-[#B2278C]">Level Up?</span></h3>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-4">Media Mind Digital &bull; 2026</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: <Phone size={20}/>, label: "Call Us", val: "+971 55 223 9775", color: "bg-[#B2278C]", href: "tel:+971552239775" },
                    { icon: <MessageSquare size={20}/>, label: "WhatsApp", val: "Chat with Strategy", color: "bg-[#25D366]", href: "https://wa.me/971552239775" },
                    { icon: <Mail size={20}/>, label: "Email", val: "info@mediaminddigital.com", color: "bg-[#273372]", href: "mailto:info@mediaminddigital.com" }
                  ].map((item, idx) => (
                    <motion.a 
                      key={idx}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{item.label}</p>
                          <p className="text-white font-bold tracking-tight">{item.val}</p>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gray-700 group-hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-[#B2278C] py-4 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white">Ignite Your Digital Success</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;