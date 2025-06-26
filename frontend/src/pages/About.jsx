import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircle, Users, Clock, Target, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen">
      <Header />
      <PageTransition>
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                  About <span className="text-gradient">MiM Academy</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Empowering learners worldwide with personalized education and expert guidance.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-white">
            <div className="container-width section-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="slide-right">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Students learning together"
                      className="rounded-2xl shadow-xl w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-left" delay={200}>
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                      Our Mission
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      At MiM Academy, we believe that every individual has unique potential waiting to be unlocked. 
                      Our mission is to provide personalized, high-quality education that empowers learners to achieve 
                      their academic and professional goals.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
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
          <section className="py-20 bg-gray-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  What Makes Us <span className="text-gradient">Different</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the unique advantages that set MiM Academy apart in the world of education.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="scale-up" 
                    delay={index * 100}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                      <CardContent className="p-8 text-center">
                        <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
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
          <section className="py-20 bg-white">
            <div className="container-width section-padding">
              <AnimatedSection animation="fade-up" className="text-center">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                      Ready to Start Your Learning Journey?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                      Join thousands of successful students who have transformed their academic and professional lives with MiM Academy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="/courses" className="inline-block">
                        <button className="bg-white text-primary hover:bg-gray-100 transition-colors px-8 py-4 rounded-lg font-semibold text-lg shadow-lg">
                          Explore Courses
                        </button>
                      </a>
                      <a href="/contact" className="inline-block">
                        <button className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 rounded-lg font-semibold text-lg">
                          Contact Us
                        </button>
                      </a>
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
