import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, Users, Clock, Target, Award, BookOpen } from 'lucide-react';
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
                  Empowering learners worldwide with personalized education and expert guidance.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Mission Section */}
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
                      Our Mission
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                      At MiM Academy, we believe that every individual has unique potential waiting to be unlocked. 
                      Our mission is to provide personalized, high-quality education that empowers learners to achieve 
                      their academic and professional goals.
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      We combine traditional teaching excellence with innovative educational methodologies to create 
                      a learning environment that fosters growth, confidence, and success for students of all ages 
                      and backgrounds.
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  What Makes Us <span className="text-gradient">Different</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Discover the unique advantages that set MiM Academy apart in the world of education.
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
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection animation="fade-up">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">
                      Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed px-2">
                      Join thousands of successful students who have transformed their academic and professional lives with MiM Academy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                      <Link to="/courses" className="inline-block w-full sm:w-auto">
                        <button className="bg-white text-primary hover:bg-gray-100 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg w-full">
                          Explore Courses
                        </button>
                      </Link>
                      <Link to="/contact" className="inline-block w-full sm:w-auto">
                        <button className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg w-full">
                          Contact Us
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
