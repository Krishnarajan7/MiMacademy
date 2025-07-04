
import React from 'react';
import { Heart, Users, BookOpen, Star, Award, Handshake } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const PartnershipSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-x-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-200/30 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4">
            <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-amber-600 mr-3" />
            <span className="text-sm sm:text-base font-semibold text-amber-600 uppercase tracking-wider">
              Community Partnership
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
            Empowering Communities Through{' '}
            <span className="text-gradient bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Collaboration
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-3">
            A meaningful partnership that brings educational excellence to the heart of our community.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12">
          {/* Partnership Story */}
          <AnimatedSection animation="slide-right">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Tamizh Thinnai Partnership
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p className="text-sm sm:text-base leading-relaxed">
                    <strong className="text-amber-700">Tamizh Thinnai</strong> is a Community Interest Company 
                    dedicated to bringing people together through meaningful events and initiatives.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed">
                    In collaboration with <strong className="text-primary">MiM Academy</strong>, Tamizh Thinnai 
                    launched a tuition program aimed at supporting children within the community. This initiative, 
                    led by <strong className="text-amber-700">Dr. Ismaeel</strong>, has been a remarkable effort 
                    to uplift and guide young learners.
                  </p>
                  
                  <p className="text-sm sm:text-base leading-relaxed">
                    His selfless dedication and commitment to education have made a significant impact, 
                    helping several students thrive academically.
                  </p>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500">
                    <p className="text-sm sm:text-base font-medium text-amber-800 italic">
                      "We are truly grateful to Dr. Ismaeel and MiM Academy for this valuable partnership 
                      and their continued support in empowering our community's youth."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Impact Statistics */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Community</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Focused Education</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tuition</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Program Success</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Impact</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Student Success</p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        {/* Partnership Values */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: Heart, title: "Dedication", description: "Selfless commitment to education" },
              { icon: Users, title: "Community", description: "Bringing people together" },
              { icon: Star, title: "Excellence", description: "High-quality learning outcomes" },
              { icon: Handshake, title: "Partnership", description: "Meaningful collaboration" }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-md bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="p-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-colors">
                    <value.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{value.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PartnershipSection;
