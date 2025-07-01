
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, Users, Clock, Target, Award, BookOpen, Heart, Lightbulb, Shield, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Expert Tutors",
      description: "Certified professionals with years of teaching experience"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with convenient timing options"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to individual needs"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Proven Results",
      description: "Track record of successful student outcomes and achievements"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Education",
      description: "High-standard curriculum and teaching methodologies"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Comprehensive Resources",
      description: "Access to extensive study materials and learning tools"
    }
  ];

  const coreValues = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "We are committed to delivering high-quality education."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and professionalism."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Innovation",
      description: "We use modern teaching methods tailored to each learner."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Accessibility",
      description: "We make top-tier education available to all students."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Dedication",
      description: "We are passionate about helping students reach their full potential."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <PageTransition>
        <main className="pt-16 overflow-x-hidden">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  About <span className="text-gradient">MiM Academy</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Empowering learners worldwide with personalized STEM education and expert guidance since our founding.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Company History Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <AnimatedSection animation="slide-right">
                  <div className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Students learning together"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-left" delay={200}>
                  <div className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 font-poppins leading-tight">
                      Our Story
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      MiM Academy was established by Dr. Mohamed Ismaeel Maricar, an accomplished engineer and educator 
                      with over a decade of hands-on experience in science and technology. Originally created to support 
                      local students in their academic journeys, MiM Academy has grown into a trusted platform for 
                      high-quality, personalized tutoring in STEM subjects.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      We specialize in Maths, Physics, Chemistry, and Computer Science, providing comprehensive support 
                      that helps students build strong foundations for their future success in these critical fields.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-purple-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <div className="max-w-4xl mx-auto">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 sm:p-8 lg:p-12">
                      <div className="flex items-center justify-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <Zap className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium text-center">
                        To inspire, educate, and empower students by providing exceptional tutoring in STEM subjects—building strong foundations for future success.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  Our <span className="text-gradient">Core Values</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  The principles that guide everything we do at MiM Academy.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {coreValues.map((value, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                      <CardContent className="p-6 sm:p-8 text-center">
                        <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                          {value.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          {value.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  Meet Our <span className="text-gradient">Founder</span>
                </h2>
              </AnimatedSection>

              <div className="max-w-4xl mx-auto">
                <AnimatedSection animation="fade-up">
                  <Card className="border-0 shadow-xl bg-white">
                    <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Dr. Mohamed Ismaeel Maricar
                          </h3>
                          <p className="text-primary font-semibold text-lg sm:text-xl mb-6">
                            Founder & Lead Tutor
                          </p>
                        </div>
                        
                        <div className="space-y-4 text-left max-w-3xl mx-auto">
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            Dr. Ismaeel is a seasoned STEM educator with specialized expertise in electromagnetics, 
                            antenna design, and advanced electronics. His academic excellence is demonstrated through 
                            over 75 published papers in international journals and conferences.
                          </p>
                          
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            He regularly mentors students in both academic and applied science, bringing a unique 
                            combination of theoretical knowledge and practical experience to his teaching approach.
                          </p>
                          
                          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            His hands-on approach, combined with a deep understanding of cutting-edge technology, 
                            makes him an outstanding guide for students at all levels—from beginners to advanced learners.
                          </p>
                        </div>

                        {/* Credentials highlight */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-4 text-lg">Key Achievements:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-gray-700">Over 75 published research papers</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-gray-700">Decade+ of hands-on STEM experience</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-gray-700">Expert in electromagnetics & antenna design</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                              <span className="text-gray-700">Proven track record in student mentorship</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  What Makes Us <span className="text-gradient">Different</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Discover the unique advantages that set MiM Academy apart in the world of STEM education.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="scale-up" 
                    delay={index * 100}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                      <CardContent className="p-6 sm:p-8 text-center">
                        <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection animation="fade-up">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">
                      Ready to Start Your STEM Journey?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
                      Join thousands of successful students who have transformed their academic and professional lives with MiM Academy's expert STEM tutoring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                      <Link to="/courses" className="inline-block w-full sm:w-auto">
                        <button className="bg-white text-primary hover:bg-gray-100 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg w-full">
                          Explore STEM Courses
                        </button>
                      </Link>
                      <Link to="/contact" className="inline-block w-full sm:w-auto">
                        <button className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full">
                          Contact Dr. Ismaeel
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </section>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default About;
