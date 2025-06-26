import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IELTS Student",
      rating: 5,
      feedback: "MiM Academy helped me achieve my target IELTS score of 8.0. The personalized coaching and mock tests were incredibly helpful. The tutors really understood my weaknesses and helped me improve systematically. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "IELTS Score: 8.0"
    },
    {
      name: "David Chen",
      role: "Professional Skills Student",
      rating: 5,
      feedback: "The communication skills course transformed my confidence at work. The trainers are exceptional and the flexible timing worked perfectly with my schedule. I've been promoted twice since completing the program!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "Career Advancement"
    },
    {
      name: "Maria Rodriguez",
      role: "Parent",
      rating: 5,
      feedback: "My daughter's academic performance improved significantly after joining MiM Academy. The tutors genuinely care about student success and maintain excellent communication with parents. The progress reports are detailed and helpful.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "Daughter's Grade Improvement"
    },
    {
      name: "Ahmed Hassan",
      role: "TOEFL Student",
      rating: 5,
      feedback: "Excellent TOEFL preparation! I scored 110/120 thanks to the comprehensive training and expert guidance. The mock tests were exactly like the real exam. The investment was worth every penny.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "TOEFL Score: 110/120"
    },
    {
      name: "Emily Davis",
      role: "Career Guidance Student",
      rating: 5,
      feedback: "The career counseling sessions helped me make informed decisions about my future. I'm now pursuing my dream career path with confidence. The guidance was practical and tailored to my interests.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "Dream Career Path"
    },
    {
      name: "Michael Thompson",
      role: "Grammar Course Student",
      rating: 5,
      feedback: "As a working professional, the grammar course helped me communicate more effectively. The online format was convenient and very well structured. My writing skills have improved dramatically.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "Enhanced Communication"
    },
    {
      name: "Lisa Park",
      role: "University Student",
      rating: 5,
      feedback: "The academic coaching helped me develop better study techniques and time management skills. My GPA improved from 3.2 to 3.8 in just one semester. The tutors are knowledgeable and supportive.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "GPA: 3.2 → 3.8"
    },
    {
      name: "James Wilson",
      role: "Executive Coaching Client",
      rating: 5,
      feedback: "The executive coaching program was transformative for my leadership skills. I learned to communicate more effectively with my team and make better strategic decisions. Highly professional service.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "Leadership Excellence"
    },
    {
      name: "Priya Sharma",
      role: "IELTS Student",
      rating: 5,
      feedback: "I was struggling with the speaking section of IELTS, but the personalized coaching at MiM Academy helped me overcome my fear and achieve band 7.5. The mock speaking sessions were invaluable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      achievement: "IELTS Speaking: 7.5"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const stats = [
    { number: "500+", label: "Students Coached" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Tutors" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageTransition>
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                  What Our <span className="text-gradient">Students Say</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                  Real stories from students who have transformed their learning journey with MiM Academy.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <AnimatedSection key={index} animation="scale-up" delay={index * 100}>
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="container-width section-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 150}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 relative">
                      <CardContent className="p-6">
                        <div className="absolute top-4 right-4">
                          <Quote className="h-8 w-8 text-primary/20" />
                        </div>
                        <div className="flex items-center mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        <p className="text-gray-700 mb-6 italic leading-relaxed">
                          "{testimonial.feedback}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                              <p className="text-sm text-gray-600">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm font-medium text-green-800">
                            Achievement: {testimonial.achievement}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Success <span className="text-gradient">Stories</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every student's journey is unique, and we celebrate each milestone achieved through dedication and expert guidance.
                </p>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedSection animation="scale-up" delay={100}>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-4">8.5</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Average IELTS Score</h3>
                    <p className="text-gray-600">Our students achieve above-average scores in international exams</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-up" delay={200}>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-4">85%</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Grade Improvement</h3>
                    <p className="text-gray-600">Students see significant improvement in their academic performance</p>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="scale-up" delay={300}>
                  <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                    <div className="text-4xl font-bold text-primary mb-4">100%</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Parent Satisfaction</h3>
                    <p className="text-gray-600">Parents trust our commitment to their children's success</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Testimonials;
