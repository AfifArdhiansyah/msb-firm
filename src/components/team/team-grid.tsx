"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Mail, Award, GraduationCap, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers } from '@/lib/dummy-data';

// Extended team data with additional information for display
const extendedTeamData = teamMembers.map(member => ({
  ...member,
  level: member.position === 'Managing Partner' ? 'Direksi' : 
         member.position?.includes('Partner') ? 'Partner' : 
         member.position === 'Associate' ? 'Associate' : 'Staff',
  image_url: member.image_url || `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1507003211169-0a1dd7228f2d' : '1494790108755-2616b612b786'}?w=300&h=300&fit=crop&crop=face`,
  education: [
    'S.H. Universitas Indonesia',
    member.position?.includes('Partner') ? 'LL.M. Harvard Law School' : 'M.H. Universitas Indonesia'
  ],
  achievements: [
    'Legal Expert',
    member.position?.includes('Partner') ? 'Leading Individual' : 'Certified Professional',
    'Outstanding Achievement Award'
  ],
  experience: member.position === 'Managing Partner' ? '25+ tahun' :
              member.position?.includes('Senior Partner') ? '18+ tahun' :
              member.position?.includes('Partner') ? '15+ tahun' :
              member.position === 'Associate' ? '10+ tahun' : '5+ tahun',
  cases: member.position === 'Managing Partner' ? '500+ kasus' :
         member.position?.includes('Senior Partner') ? '400+ kasus' :
         member.position?.includes('Partner') ? '300+ kasus' :
         member.position === 'Associate' ? '200+ kasus' : '100+ kasus',
  phone: '+62-21-1234-5678 ext. ' + (100 + member.id),
  office: `Lantai ${15 - Math.floor(member.id / 4)}, Ruang ${1400 + member.id}`
}));


// Group team members by level
const teamByLevel = extendedTeamData.reduce((acc, member) => {
  if (!acc[member.level]) {
    acc[member.level] = [];
  }
  acc[member.level].push(member);
  return acc;
}, {} as Record<string, typeof extendedTeamData>);

const levelOrder = ['Direksi', 'Partner', 'Associate', 'Staff'];

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<typeof extendedTeamData[0] | null>(null);

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
            Tim Profesional
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tim kami terdiri dari pengacara berpengalaman dengan track record yang terbukti 
            dalam menangani berbagai kasus hukum kompleks.
          </p>
        </motion.div>

        {/* Team Sections by Level */}
        <div className="space-y-16">
          {levelOrder.map((level) => {
            const members = teamByLevel[level];
            if (!members || members.length === 0) return null;

            return (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  {level}
                </h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md bg-white overflow-hidden group w-64"
                        onClick={() => setSelectedMember(member)}
                      >
                        <CardContent className="p-0">
                          {/* Profile Image */}
                          <div className="relative h-48 bg-gradient-to-br from-red-50 to-red-100">
                            <Image 
                              src={member.image_url} 
                              alt={member.name}
                              width={300}
                              height={300}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="p-4">
                            <h4 className="font-bold text-slate-900 mb-1 text-sm leading-tight">
                              {member.name}
                            </h4>
                            <p className="text-red-600 font-semibold text-xs mb-2">
                              {member.position}
                            </p>
                            <p className="text-slate-600 text-xs leading-relaxed">
                              {member.specialization}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Member Detail Dialog */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-900">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Header Info */}
                  <div className="flex flex-col gap-2 md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <Image 
                      src={selectedMember.image_url} 
                      alt={selectedMember.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-red-100"
                    />
                    <div className="text-center md:text-left flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {selectedMember.position}
                      </Badge>
                      <p className="text-red-600 font-medium mb-4">
                        {selectedMember.specialization}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-slate-50 p-3 rounded-lg">
                          <span className="font-semibold text-slate-900 block">{selectedMember.experience}</span>
                          <p className="text-slate-500">Pengalaman</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-lg">
                          <span className="font-semibold text-slate-900 block">{selectedMember.cases}</span>
                          <p className="text-slate-500">Ditangani</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Profil</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4" />
                      <span>Pendidikan</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedMember.education.map((edu, idx) => (
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
                      {selectedMember.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Kontak</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {selectedMember.email && (
                        <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg">
                          <Mail className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.email}</span>
                        </div>
                      )}
                      {selectedMember.phone && (
                        <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.phone}</span>
                        </div>
                      )}
                      {selectedMember.office && (
                        <div className="flex items-center space-x-2 p-3 bg-slate-50 rounded-lg">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.office}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                    {selectedMember.email && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-red-50 hover:border-red-300 flex-1"
                      >
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center justify-center space-x-2"
                        >
                          <Mail className="h-4 w-4" />
                          <span>Kirim Email</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}