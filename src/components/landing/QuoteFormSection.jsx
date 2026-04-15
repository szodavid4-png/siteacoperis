import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const serviceOptions = [
  'Învelitori ceramice',
  'Învelitori metalice',
  'Acoperișuri plate',
  'Jgheaburi și burlane',
  'Renovare acoperiș',
  'Izolație și mansardare',
  'Altele',
];

export default function QuoteFormSection() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Vă rugăm completați numele și telefonul.');
      return;
    }
    setLoading(true);
    await base44.entities.QuoteRequest.create(form);
    setLoading(false);
    setSubmitted(true);
    toast.success('Cererea a fost trimisă cu succes!');
  };

  if (submitted) {
    return (
 
