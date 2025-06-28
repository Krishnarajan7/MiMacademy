import React from 'react';
import { Award, Clock, Users, DollarSign, Target, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Certified Trainers",
      description: "Learn from qualified professionals with proven expertise"
    },
    {
      icon: <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Flexible Timings",
      description: "Choose convenient schedules that fit your lifestyle"
    },
    {
      icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Personalized Learning",
      description: "Customized approach tailored to your individual needs"
    },
    {
      icon: <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Affordable Fees",
      description: "Quality education at competitive and transparent pricing"
    },
    {
      icon: <Target className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Career Guidance",
      description: "Expert counseling for academic and professional success"
    },
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary" />,
      title: "Comprehensive Materials",
      description: "Access to extensive resources and study materials"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
            Why Students <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the MiM Academy difference with our comprehensive learning ecosystem.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-up" 
              delay={index * 100}
              className="text-center p-4 sm:p-6 lg:p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mx-auto mb-4 sm:mb-6 p-3 sm:p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
