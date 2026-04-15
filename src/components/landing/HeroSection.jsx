import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/39570a1a3_generated_image.png';

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.25);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Muncitori care montează acoperiș"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/50" />
      </div>

      {/* Content — full width, no grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <div className="w-full">
          {/* Title — diagonal layout */}
          <div
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-foreground leading-[1.05] mb-8 uppercase"
            style={{ fontFamily: 'var(--font-inter)', letterSpacing: '-0.02em' }}
          >
            {/* Line 1: ACOPERIȘURI — left aligned */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
 
