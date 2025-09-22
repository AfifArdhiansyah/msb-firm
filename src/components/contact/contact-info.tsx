"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone,
  Mail,
  MessageCircle,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telepon',
    value: firmInfo.phone,
    description: 'Tersedia 24/7 untuk konsultasi darurat',
    action: `tel:${firmInfo.phone}`,
    color: 'bg-red-700'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: firmInfo.whatsapp_number,
    description: 'Respons cepat dalam 5 menit',
    action: `https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`,
    color: 'bg-green-500'
  },
  {
    icon: Mail,
    title: 'Email',
    value: firmInfo.email,
    description: 'Respons dalam 2 jam kerja',
    action: `mailto:${firmInfo.email}`,
    color: 'bg-purple-500'
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: '#',
    color: 'hover:text-red-600'
  },
  {
    icon: Instagram,
    name: 'Instagram',
    url: '#',
    color: 'hover:text-pink-600'
  },
  {
    icon: Facebook,
    name: 'Facebook',
    url: '#',
    color: 'hover:text-red-700'
  }
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto lg:mx-0"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-slate-600">
              Berbagai cara untuk menghubungi kami. Tim customer service kami siap membantu 
              Anda dengan respons yang cepat dan profesional.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4 mb-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 group-hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-slate-700 font-medium">{method.value}</p>
                        <p className="text-slate-500 text-sm">{method.description}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>





          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 ${social.color} transition-colors duration-200`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <p className="text-slate-500 text-sm mt-3">
                  Dapatkan update terbaru tentang hukum dan tips legal
                </p>
              </CardContent>
            </Card>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}
