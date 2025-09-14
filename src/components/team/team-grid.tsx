"use client";

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Linkedin, Mail, Award, GraduationCap, Phone, MapPin } from 'lucide-react';
import { teamMembers } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

// Extended team data with additional information
const extendedTeamData = [
  {
    ...teamMembers[0],
    level: 'Direksi',
    education: ['S.H. Universitas Indonesia', 'M.H. Universitas Gadjah Mada', 'Ph.D. Harvard Law School'],
    achievements: ['Best Corporate Lawyer 2023', 'Indonesia Legal Awards Winner', 'Certified Arbitrator'],
    experience: '25+ tahun',
    cases: '200+ kasus',
    phone: '+62-21-1234-5678 ext. 101',
    office: 'Lantai 15, Ruang 1501'
  },
  {
    ...teamMembers[1],
    level: 'Partner',
    education: ['S.H. Universitas Padjadjaran', 'LL.M. Harvard Law School'],
    achievements: ['Top Litigator 2022', 'International Arbitration Certified', 'Women in Law Award'],
    experience: '18+ tahun',
    cases: '150+ kasus',
    phone: '+62-21-1234-5678 ext. 102',
    office: 'Lantai 14, Ruang 1401'
  },
  {
    ...teamMembers[2],
    level: 'Partner',
    education: ['S.H. Universitas Trisakti', 'M.Kn. Universitas Indonesia'],
    achievements: ['Property Law Expert', 'Real Estate Legal Advisor', 'APPRAISAL Certified'],
    experience: '15+ tahun',
    cases: '300+ transaksi',
    phone: '+62-21-1234-5678 ext. 103',
    office: 'Lantai 14, Ruang 1402'
  },
  {
    ...teamMembers[3],
    level: 'Associate',
    education: ['S.H. Universitas Airlangga'],
    achievements: ['Family Law Specialist', 'Certified Mediator', 'Child Protection Advocate'],
    experience: '8+ tahun',
    cases: '100+ kasus',
    phone: '+62-21-1234-5678 ext. 201',
    office: 'Lantai 13, Ruang 1301'
  }
];

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card 
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                        onClick={() => setSelectedMember(member)}
                      >
                        <CardContent className="p-6 text-center">
                          <Avatar className="w-20 h-20 mx-auto mb-4">
                            <AvatarImage 
                              src={member.image_url} 
                              alt={member.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-red-100 text-red-700 text-xl font-bold">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                            {member.name}
                          </h4>
                          <p className="text-red-600 font-medium text-xs mb-2">
                            {member.position}
                          </p>
                          <p className="text-slate-600 text-xs">
                            {member.specialization}
                          </p>
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
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-slate-900">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <Avatar className="w-24 h-24 mx-auto md:mx-0">
                      <AvatarImage 
                        src={selectedMember.image_url} 
                        alt={selectedMember.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-red-100 text-red-700 text-2xl font-bold">
                        {selectedMember.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <Badge variant="secondary" className="mb-2">
                        {selectedMember.position}
                      </Badge>
                      <p className="text-red-600 font-medium mb-2">
                        {selectedMember.specialization}
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-slate-900">{selectedMember.experience}</span>
                          <p className="text-slate-500">Pengalaman</p>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900">{selectedMember.cases}</span>
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
                    <div className="space-y-2 text-sm">
                      {selectedMember.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.email}</span>
                        </div>
                      )}
                      {selectedMember.phone && (
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.phone}</span>
                        </div>
                      )}
                      {selectedMember.office && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-600">{selectedMember.office}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                    {selectedMember.linkedin_url && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-red-50 hover:border-red-300 flex-1"
                      >
                        <a
                          href={selectedMember.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </a>
                      </Button>
                    )}
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