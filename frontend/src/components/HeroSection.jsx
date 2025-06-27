import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container-width section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection animation="fade-up" className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-poppins">
              Tailored Coaching to{' '}
              <span className="text-gradient">Empower</span>{' '}
              Your Learning Journey
            </h1>
            
            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your academic and career potential with personalized guidance from expert tutors. 
                We provide comprehensive coaching for students, professionals, and parents.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button 
                    size="lg" 
                    className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 text-lg px-8 py-4 shadow-lg"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>500+ Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Expert Tutors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Flexible Timing</span>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Right Image */}
          <AnimatedSection animation="slide-left" delay={300} className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Online learning and coaching"
                className="rounded-2xl shadow-2xl w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
