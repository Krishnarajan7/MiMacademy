import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe, BookOpen, Users, Award, Brain, MessageCircle, Clock, CheckCircle } from 'lucide-react';

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
    <div className="min-h-screen">
      <Header />
      <PageTransition>
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                  Our <span className="text-gradient">Courses</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive programs designed to help you achieve your academic and professional goals with expert guidance and personalized support.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Courses Grid */}
          <section className="py-20 bg-white">
            <div className="container-width section-padding">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <p className="text-gray-600 text-center flex-1">
                          {course.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-primary" />
                            {course.duration}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-primary" />
                            {course.level}
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {course.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-primary mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-4 space-y-2">
                          <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity">
                            Enroll Now
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
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
          <section className="py-20 bg-gray-50">
            <div className="container-width section-padding">
              <AnimatedSection animation="fade-up" className="text-center">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                      Ready to Get Started?
                    </h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                      Book a free consultation to discuss your learning goals and find the perfect course for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                        Book Free Consultation
                      </Button>
                      <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                        Contact Us
                      </Button>
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
