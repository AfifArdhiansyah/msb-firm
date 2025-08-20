"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { teamMembers } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

// Extended team data with additional information
const extendedTeamData = [
  {
    ...teamMembers[0],
    education: ['S.H. Universitas Indonesia', 'M.H. Universitas Gadjah Mada', 'Ph.D. Harvard Law School'],
    achievements: ['Best Corporate Lawyer 2023', 'Indonesia Legal Awards Winner', 'Certified Arbitrator'],
    experience: '25+ tahun',
    cases: '200+ kasus'
  },
  {
    ...teamMembers[1],
    education: ['S.H. Universitas Padjadjaran', 'LL.M. Harvard Law School'],
    achievements: ['Top Litigator 2022', 'International Arbitration Certified', 'Women in Law Award'],
    experience: '18+ tahun',
    cases: '150+ kasus'
  },
  {
    ...teamMembers[2],
    education: ['S.H. Universitas Trisakti', 'M.Kn. Universitas Indonesia'],
    achievements: ['Property Law Expert', 'Real Estate Legal Advisor', 'APPRAISAL Certified'],
    experience: '15+ tahun',
    cases: '300+ transaksi'
  },
  {
    ...teamMembers[3],
    education: ['S.H. Universitas Airlangga'],
    achievements: ['Family Law Specialist', 'Certified Mediator', 'Child Protection Advocate'],
    experience: '8+ tahun',
    cases: '100+ kasus'
  }
];

export default function TeamGrid() {
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
            Profesional Berpengalaman
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tim kami terdiri dari pengacara berpengalaman dengan track record yang terbukti 
            dalam menangani berbagai kasus hukum kompleks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {extendedTeamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    {/* Avatar and Basic Info */}
                    <div className="text-center md:text-left flex-shrink-0">
                      <Avatar className="w-32 h-32 mx-auto md:mx-0 mb-4">
                        <AvatarImage 
                          src={member.image_url} 
                          alt={member.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-red-100 text-red-700 text-3xl font-bold">
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
                      
                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900">{member.experience}</div>
                          <div className="text-xs text-slate-500">Pengalaman</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900">{member.cases}</div>
                          <div className="text-xs text-slate-500">Ditangani</div>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Info */}
                    <div className="flex-1 space-y-6">
                      {/* Bio */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Profil</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {member.bio}
                        </p>
                      </div>

                      {/* Education */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4" />
                          <span>Pendidikan</span>
                        </h4>
                        <div className="space-y-1">
                          {member.education.map((edu, idx) => (
                            <div key={idx} className="text-sm text-slate-600 flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                              <span>{edu}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
                          <Award className="h-4 w-4" />
                          <span>Penghargaan & Sertifikasi</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                        {member.linkedin_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="hover:bg-red-50 hover:border-red-300 flex-1"
                          >
                            <a
                              href={member.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center space-x-2"
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
                            className="hover:bg-red-50 hover:border-red-300 flex-1"
                          >
                            <a
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center space-x-2"
                            >
                              <Mail className="h-4 w-4" />
                              <span>Email</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Filosofi Tim Kami
            </h3>
            <blockquote className="text-xl text-slate-600 italic leading-relaxed mb-6">
              "Kami percaya bahwa keberhasilan klien adalah keberhasilan kami. Setiap anggota tim 
              berkomitmen untuk memberikan yang terbaik dengan menggabungkan keahlian, pengalaman, 
              dan dedikasi dalam setiap kasus yang ditangani."
            </blockquote>
            <div className="text-slate-500">
              <div className="font-semibold">Tim Hukum Prima & Associates</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
