import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe, BookOpen, Users, Award, Brain, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "IELTS Preparation",
      description: "Comprehensive training for all four skills: Listening, Reading, Writing, and Speaking with expert guidance.",
      features: ["Mock Tests", "Score Prediction", "Individual Feedback", "Speaking Practice"],
      duration: "8-12 weeks",
      level: "All Levels"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "TOEFL Training",
      description: "Complete TOEFL preparation with practice tests, strategic tips, and personalized coaching sessions.",
      features: ["Practice Tests", "Strategy Sessions", "Score Improvement", "Test Techniques"],
      duration: "6-10 weeks",
      level: "Intermediate+"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Grammar & Communication",
      description: "Master English grammar fundamentals and develop effective communication skills for academic and professional success.",
      features: ["Grammar Basics", "Speaking Practice", "Writing Skills", "Pronunciation"],
      duration: "4-8 weeks",
      level: "Beginner to Advanced"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Professional Skills",
      description: "Develop essential workplace skills including presentation, leadership, and interpersonal communication.",
      features: ["Leadership Training", "Presentations", "Team Building", "Communication"],
      duration: "6-8 weeks",
      level: "Professional"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Academic Coaching",
      description: "Personalized academic support for students across various subjects with focus on exam preparation.",
      features: ["Subject Tutoring", "Exam Prep", "Study Techniques", "Time Management"],
      duration: "Ongoing",
      level: "All Levels"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Career Guidance",
      description: "Expert counseling for career planning, university applications, and professional development pathways.",
      features: ["Career Planning", "University Prep", "Resume Building", "Interview Skills"],
      duration: "4-6 weeks",
      level: "All Levels"
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
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  Our <span className="text-gradient">Courses</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3">
                  Comprehensive programs designed to help you achieve your academic and professional goals with expert guidance and personalized support.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Courses Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {courses.map((course, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 100}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                          {course.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col px-4 sm:px-6">
                        <p className="text-gray-600 text-center flex-1 text-sm sm:text-base">
                          {course.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="break-words">{course.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="break-words">{course.level}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {course.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-4 space-y-2">
                          <Button 
                            className="w-full gradient-primary text-white hover:opacity-90 transition-opacity text-sm sm:text-base"
                          >
                            Enroll Now
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
                          >
                            Learn More
                          </Button>
                        </div>
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
              <AnimatedSection animation="fade-up" className="text-center">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">
                      Ready to Get Started?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2">
                      Book a free consultation to discuss your learning goals and find the perfect course for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                      <Link to="/contact">
                        <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                          Book Free Consultation
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                          Contact Us
                        </Button>
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

export default Courses;
