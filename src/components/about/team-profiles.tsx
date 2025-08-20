"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function TeamProfiles() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tim Ahli Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bertemu dengan tim profesional berpengalaman yang siap memberikan solusi hukum terbaik untuk Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage 
                        src={member.image_url} 
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-red-100 text-red-700 text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {member.name}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.position}
                    </Badge>
                    <p className="text-red-600 font-medium text-sm mb-4">
                      {member.specialization}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {member.bio}
                    </p>

                    {/* Contact Actions */}
                    <div className="flex justify-center space-x-3 pt-4 border-t border-slate-100">
                      {member.linkedin_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-red-50 hover:border-red-300"
                        >
                          <a
                            href={member.linkedin_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <Linkedin className="h-4 w-4" />
                            <span>LinkedIn</span>
                          </a>
                        </Button>
                      )}
                      {member.email && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:bg-red-50 hover:border-red-300"
                        >
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center space-x-2"
                          >
                            <Mail className="h-4 w-4" />
                            <span>Email</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Keahlian Tim Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">75+</div>
                <div className="text-slate-600">Tahun Pengalaman Gabungan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                <div className="text-slate-600">Bidang Spesialisasi</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">5</div>
                <div className="text-slate-600">Sertifikasi Internasional</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Bergabung dengan Tim Kami
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim kami.
              Jika Anda passionate tentang hukum dan ingin berkembang bersama firma terkemuka, 
              kami ingin mendengar dari Anda.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50"
            >
              Lihat Lowongan Kerja
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
