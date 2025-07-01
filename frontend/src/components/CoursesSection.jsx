import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BarChart3,
  Calculator,
  Code,
  Presentation,
  FileText,
  Database,
  Calendar,
  TrendingUp,
  Mic,
  Zap,
  Wifi,
  Radio,
  Antenna,
  Waves,
  Signal,
  TestTube,
  Download,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CoursesSection = () => {
  const courses = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Excel Mastery: From Fundamentals to Advanced Analytics",
      description:
        "Unlock the full power of Microsoft Excel in this hands-on course designed for students, professionals, and entrepreneurs.",
      features: [
        "PivotTables & Charts",
        "Advanced Functions",
        "Data Analysis",
        "Automation Basics",
      ],
      duration: "8 Weeks",
      schedule: "2 Hours per Week",
      level: "Beginner to Intermediate",
      hasPDF: false,
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "MATLAB for Engineers and Data Analysis",
      description:
        "Master the fundamentals of MATLAB in this practical course designed for students and professionals in engineering, science, and applied mathematics.",
      features: [
        "Scripting Basics",
        "Data Visualization",
        "Equation Solving",
        "Simple Simulations",
      ],
      duration: "8 Weeks",
      schedule: "2 Hours per Week",
      level: "Beginner to Intermediate",
      hasPDF: false,
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Python Programming: From Zero to Practical Skills",
      description:
        "Start your programming journey with Python — one of the most popular and versatile languages today.",
      features: [
        "Core Concepts",
        "Hands-on Exercises",
        "Task Automation",
        "Small Projects",
      ],
      duration: "8 Weeks",
      schedule: "2 Hours per Week",
      level: "Beginner",
      hasPDF: false,
    },
    {
      icon: <Presentation className="h-8 w-8 text-primary" />,
      title: "PowerPoint Essentials: Create Impactful Presentations",
      description:
        "Learn how to design and deliver compelling presentations using Microsoft PowerPoint.",
      features: [
        "Slide Design",
        "Animations",
        "Visual Storytelling",
        "Professional Templates",
      ],
      duration: "4 Weeks",
      schedule: "2 Hours per Week",
      level: "Beginner to Intermediate",
      hasPDF: false,
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Microsoft Word Mastery: Professional Documents Made Easy",
      description:
        "Develop your skills in Microsoft Word and learn to create polished, professional documents with ease.",
      features: [
        "Formatting & Styles",
        "Templates",
        "Headers/Footers",
        "Professional Documents",
      ],
      duration: "4 Weeks",
      schedule: "2 Hours per Week",
      level: "Beginner to Intermediate",
      hasPDF: false,
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "SPSS for Statistical Analysis",
      description:
        "Learn to perform descriptive and inferential statistics using SPSS. Ideal for students and researchers.",
      features: ["Data Entry", "Hypothesis Testing", "Correlations", "ANOVA"],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Beginner",
      hasPDF: false,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Our <span className="text-gradient">Featured Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technical programs designed to help you master
            essential software and programming skills.
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

                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">Schedule:</span>
                      <span className="ml-2">{course.schedule}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium">Level:</span>
                      <span className="ml-2">{course.level}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2 mt-auto">
                    {course.hasPDF && (
                      <Button
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Course PDF
                      </Button>
                    )}
                    <Link to="/Contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/Courses" className="block">
            <Button
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-opacity"
            >
              View All Courses
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CoursesSection;
