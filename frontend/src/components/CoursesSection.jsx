import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Globe, BookOpen, Users, Award, Brain, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const CoursesSection = () => {
  const courses = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "IELTS Preparation",
      description: "Comprehensive training for all four skills: Listening, Reading, Writing, and Speaking with expert guidance.",
      features: ["Mock Tests", "Score Prediction", "Individual Feedback"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "TOEFL Training",
      description: "Complete TOEFL preparation with practice tests, strategic tips, and personalized coaching sessions.",
      features: ["Practice Tests", "Strategy Sessions", "Score Improvement"]
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Grammar & Communication",
      description: "Master English grammar fundamentals and develop effective communication skills for academic and professional success.",
      features: ["Grammar Basics", "Speaking Practice", "Writing Skills"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Professional Skills",
      description: "Develop essential workplace skills including presentation, leadership, and interpersonal communication.",
      features: ["Leadership Training", "Presentations", "Team Building"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Academic Coaching",
      description: "Personalized academic support for students across various subjects with focus on exam preparation.",
      features: ["Subject Tutoring", "Exam Prep", "Study Techniques"]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Career Guidance",
      description: "Expert counseling for career planning, university applications, and professional development pathways.",
      features: ["Career Planning", "University Prep", "Resume Building"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our <span className="text-gradient">Featured Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to help you achieve your academic and professional goals.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 100}
            >
              <Card className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-md h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
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
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors mt-auto"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button size="lg" className="gradient-primary text-white hover:opacity-90 transition-opacity">
            View All Courses
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesSection;
