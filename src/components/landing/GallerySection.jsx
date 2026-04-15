import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const galleryItems = [
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/030247ae9_WhatsAppImage2026-04-13at194934.jpg', title: 'Învelitoare Metalică', tag: 'Țiglă Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/a3616098b_WhatsAppImage2026-04-13at194933.jpg', title: 'Montaj Astereal', tag: 'Renovare Acoperiș' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/3c1fc61a7_WhatsAppImage2026-04-13at1949333.jpg', title: 'Acoperiș Plat', tag: 'Acoperișuri Plate' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/d86d88c7e_WhatsAppImage2026-04-13at1949332.jpg', title: 'Folie & Șipcuire', tag: 'Renovare Acoperiș' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/3b3048568_WhatsAppImage2026-04-13at1949331.jpeg', title: 'Ferestre Velux', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/31c666a5b_WhatsAppImage2026-04-13at194932.jpg', title: 'Tablă Falțuită', tag: 'Învelitoare Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/6cde9df68_WhatsAppImage2026-04-13at1949323.jpeg', title: 'Casă cu Terasă', tag: 'Țiglă Ceramică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/15d9c4ea0_WhatsAppImage2026-04-13at1949322.jpg', title: 'Montaj Tablă', tag: 'Montaj Profesional' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/56d1006ad_WhatsAppImage2026-04-13at1949321.jpg', title: 'Coamă Metalică', tag: 'Învelitoare Metalică' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/1e220c8ee_WhatsAppImage2026-04-13at194931.jpg', title: 'Jgheaburi & Burlane', tag: 'Jgheaburi & Burlane' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/71f8e0e46_WhatsAppImage2026-04-13at1949312.jpg', title: 'Mansardare Interior', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/aea640b0d_WhatsAppImage2026-04-13at1949311.jpg', title: 'Structură Șarpantă', tag: 'Izolație & Mansardare' },
  { url: 'https://media.base44.com/images/public/69de30306771a2ccbe5f46cb/a00e5abe9_WhatsAppImage2026-04-13at194929.jpg', title: 'Finalizare Lucrare', tag: 'Țiglă Metalică' },
];

// Duplicate for seamless loop
const items = [...galleryItems, ...galleryItems];

const CARD_WIDTH = 320;
const CARD_GAP = 16;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const AUTO_SPEED = 0.6; // px per frame

export default function GallerySection() {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const pausedRef = useRef(false);
  const [lightbox, setLightbox] = useState(null);

  const totalWidth = galleryItems.length * CARD_STEP;

  // Auto-scroll loop
  useEffect(() => {
    const animate = () => {
      if (!isDragging.current && !pausedRef.current) {
        xRef.current -= AUTO_SPEED;
        if (xRef.current <= -totalWidth) xRef.current += totalWidth;
 
