import React from 'react';
import { CheckCircle, Users, Clock, Target } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Expert Tutors",
      description: "Certified professionals with years of teaching experience"
    },
    {
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with convenient timing options"
    },
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Personalized Approach",
      description: "Customized learning plans tailored to individual needs"
    },
    {
      icon: <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Proven Results",
      description: "Track record of successful student outcomes and achievements"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
            Why Choose <span className="text-gradient">MiM Academy</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We believe in the power of personalized education to transform lives and unlock potential.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Image */}
          <AnimatedSection animation="slide-right">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MiM Academy learning environment"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </AnimatedSection>

          {/* Right Content */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-6 sm:space-y-8">
              <div className="prose prose-lg text-gray-700">
                <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  At MiM Academy, we understand that every learner is unique. Our approach combines traditional 
                  teaching excellence with modern educational methodologies to create a learning environment 
                  that fosters growth, confidence, and success.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Whether you're a student preparing for international exams, a professional looking to enhance 
                  your skills, or a parent seeking guidance for your child's education, we provide comprehensive 
                  support tailored to your specific goals and learning style.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
