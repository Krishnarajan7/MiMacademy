import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden pt-14 sm:pt-16 lg:pt-18"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection
            animation="fade-up"
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-poppins">
              Tailored Coaching to{" "}
              <span className="text-gradient">Empower</span> Your Learning
              Journey
            </h1>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Transform your academic and career potential with personalized
                guidance from expert tutors. We provide comprehensive coaching
                for students, professionals, and parents.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md mx-auto lg:max-w-none">
                <Link to="/courses" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg w-full"
                  >
                    Explore Courses
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-600">
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
          <AnimatedSection
            animation="slide-left"
            delay={300}
            className="relative order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <img
                src="/images/HeroBG.jpg"
                alt="Online learning and coaching"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Decorative elements - Responsive sizing */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
