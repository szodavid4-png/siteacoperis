import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Bilka', url: 'https://www.bilka.ro' },
  { name: 'Lindab', url: 'https://www.lindab.com/ro' },
  { name: 'Wetterbest', url: 'https://www.wetterbest.ro' },
  { name: 'Velux', url: 'https://www.velux.ro' },
];

const logos = {
  Bilka: (
    <svg viewBox="0 0 120 40" className="h-10 w-auto" fill="white">
      <text x="0" y="32" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900" letterSpacing="1">BILKA</text>
      <text x="1" y="42" fontFamily="Arial, sans-serif" fontSize="9" letterSpacing="2" opacity="0.7">ROOF SYSTEM</text>
    </svg>
  ),
  Lindab: (
    <svg viewBox="0 0 180 44" className="h-10 w-auto" fill="white">
      {/* Concentric circles - Lindab target logo */}
      <circle cx="18" cy="22" r="14" fill="none" stroke="white" strokeWidth="2.5"/>
      <circle cx="18" cy="22" r="10" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="18" cy="22" r="6" fill="none" stroke="white" strokeWidth="2"/>
      <circle cx="18" cy="22" r="2" fill="white"/>
      {/* Text */}
      <text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" letterSpacing="0.3" fill="white">Lindab</text>
    </svg>
  ),
  Wetterbest: (
    <svg viewBox="0 0 240 50" className="h-10 w-auto">
      {/* Tile/roof shapes above text - green */}
      <g>
        {/* First tile */}
        <path d="M35 8 L50 4 L55 14 L40 18 Z" fill="#2d8659" />
        {/* Second tile */}
        <path d="M50 6 L65 2 L70 12 L55 16 Z" fill="#22a74a" />
        {/* Third tile - darker */}
        <path d="M65 8 L80 4 L85 14 L70 18 Z" fill="#1a7d3f" />
      </g>
      {/* wetterbest text - bold sans-serif, white */}
      <text x="30" y="42" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="white" letterSpacing="0.3">wetterbest</text>
    </svg>
  ),
  Velux: (
    <svg viewBox="0 0 110 40" className="h-10 w-auto">
      <rect x="0" y="0" width="50" height="40" fill="#CC0000" rx="2"/>
 
