import React from 'react';
import { Award, Clock, Users, DollarSign, Target, BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Certified Trainers",
      description: "Learn from qualified professionals with proven expertise"
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "Flexible Timings",
      description: "Choose convenient schedules that fit your lifestyle"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Personalized Learning",
      description: "Customized approach tailored to your individual needs"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Affordable Fees",
      description: "Quality education at competitive and transparent pricing"
    },
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Career Guidance",
      description: "Expert counseling for academic and professional success"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Comprehensive Materials",
      description: "Access to extensive resources and study materials"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-width section-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Why Students <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the MiM Academy difference with our comprehensive learning ecosystem.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index} 
              animation="scale-up" 
              delay={index * 100}
              className="text-center p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
