import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
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
  Clock,
  Award,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Excel Mastery: From Fundamentals to Advanced Analytics",
      description:
        "Unlock the full power of Microsoft Excel in this hands-on course designed for students, professionals, and entrepreneurs. Learn everything from the basics of navigating spreadsheets to advanced tools like PivotTables, functions, charts, and simple automation.",
      features: [
        "PivotTables & Charts",
        "Advanced Functions",
        "Data Analysis",
        "Simple Automation",
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
        "Master the fundamentals of MATLAB in this practical 8-week course designed for students and professionals in engineering, science, and applied mathematics. Learn how to script, visualize data, solve equations, and build simple simulations.",
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
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "MATLAB for Electrical and Electronics Engineers",
      description:
        "Apply MATLAB in signal processing, circuit analysis, and control systems. This course is tailored for EEE students needing hands-on analytical and simulation skills.",
      features: [
        "Signal Processing",
        "Circuit Analysis",
        "Control Systems",
        "Simulation Skills",
      ],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Beginner to Intermediate",
      hasPDF: false,
    },
    {
      icon: <Presentation className="h-8 w-8 text-primary" />,
      title: "PowerPoint Essentials: Create Impactful Presentations",
      description:
        "Learn how to design and deliver compelling presentations using Microsoft PowerPoint. In this 4-week course, you'll master slide design principles, animations, charts, and visual storytelling techniques.",
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
        "Develop your skills in Microsoft Word and learn to create polished, professional documents with ease. This 4-week course covers formatting, styles, tables, headers/footers, templates, and essential tools.",
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
        "Learn to perform descriptive and inferential statistics using SPSS. Ideal for students and researchers, this course covers data entry, hypothesis testing, correlations, and ANOVA.",
      features: ["Data Entry", "Hypothesis Testing", "Correlations", "ANOVA"],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Beginner",
      hasPDF: false,
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Project Management with Microsoft Project",
      description:
        "Understand the fundamentals of project planning, scheduling, and tracking using MS Project. Learn to manage timelines, resources, and budgets effectively—ideal for students, PMs, or team leads.",
      features: [
        "Project Planning",
        "Scheduling",
        "Resource Management",
        "Budget Tracking",
      ],
      duration: "4 Weeks",
      schedule: "TBA",
      level: "Beginner",
      hasPDF: false,
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Data Analysis with Power BI",
      description:
        "Learn how to turn raw data into compelling visuals and dashboards with Power BI. This course covers data import, transformation, DAX formulas, and building interactive reports.",
      features: [
        "Data Import",
        "DAX Formulas",
        "Interactive Reports",
        "Dashboard Creation",
      ],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Beginner to Intermediate",
      hasPDF: true,
      pdfPath: "/pdfs/powerbi-course.pdf",
    },
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: "Public Speaking & Presentation Skills",
      description:
        "Develop confidence and clarity in delivering presentations. This course focuses on speech structure, body language, voice control, and audience engagement—perfect for professionals, students, and entrepreneurs.",
      features: [
        "Speech Structure",
        "Body Language",
        "Voice Control",
        "Audience Engagement",
      ],
      duration: "4 Weeks",
      schedule: "TBA",
      level: "All Levels",
      hasPDF: false,
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Introduction to Electronics & Circuit Design",
      description:
        "Learn the fundamentals of electronics, including Ohm's Law, resistors, capacitors, diodes, and transistors. Get hands-on with basic circuit design using breadboards and simulation software.",
      features: [
        "Ohm's Law",
        "Basic Components",
        "Circuit Design",
        "Simulation Software",
      ],
      duration: "8 Weeks",
      schedule: "TBA",
      level: "Beginner",
      hasPDF: false,
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: "IoT (Internet of Things) with ESP32",
      description:
        "Build connected smart devices using ESP32 microcontrollers. Learn about Wi-Fi/Bluetooth integration, cloud data communication (MQTT/HTTP), sensors, and automation projects.",
      features: [
        "ESP32 Programming",
        "Wi-Fi/Bluetooth",
        "Cloud Communication",
        "Smart Devices",
      ],
      duration: "8 Weeks",
      schedule: "TBA",
      level: "Intermediate",
      hasPDF: false,
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Python Programming: From Zero to Practical Skills",
      description:
        "Start your programming journey with Python — one of the most popular and versatile languages today. This beginner-friendly course covers the core concepts of Python programming through hands-on exercises and real-world examples.",
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
      icon: <Radio className="h-8 w-8 text-primary" />,
      title: "RF Basics: Introduction to Radio Frequency Engineering",
      description:
        "Get a strong foundation in RF principles including frequency, wavelength, impedance, transmission lines, and basic signal propagation. Ideal for students and technicians entering wireless communication.",
      features: [
        "RF Principles",
        "Transmission Lines",
        "Signal Propagation",
        "Impedance Matching",
      ],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Beginner",
      hasPDF: false,
    },
    {
      icon: <TestTube className="h-8 w-8 text-primary" />,
      title: "RF Circuit Design and Simulation",
      description:
        "Learn to design and analyze RF circuits such as amplifiers, filters, and matching networks. Use industry tools like ADS (Advanced Design System), LTspice, or Microwave Office for simulation.",
      features: [
        "RF Circuit Design",
        "Amplifiers & Filters",
        "Simulation Tools",
        "Circuit Optimization",
      ],
      duration: "8 Weeks",
      schedule: "TBA",
      level: "Intermediate",
      hasPDF: false,
    },
    {
      icon: <Antenna className="h-8 w-8 text-primary" />,
      title: "Antenna Design and Propagation Fundamentals",
      description:
        "Explore the principles of antenna theory, design, and performance testing. Covers dipoles, monopoles, patch antennas, and basic propagation models for wireless systems.",
      features: [
        "Antenna Theory",
        "Design Principles",
        "Performance Testing",
        "Propagation Models",
      ],
      duration: "6 Weeks",
      schedule: "TBA",
      level: "Intermediate",
      hasPDF: false,
    },
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: "Microwave Engineering Essentials",
      description:
        "Focuses on microwave transmission lines, waveguides, S-parameters, Smith charts, and high-frequency circuit behavior. Suitable for final-year students and RF/microwave engineering professionals.",
      features: [
        "Transmission Lines",
        "Waveguides",
        "S-parameters",
        "Smith Charts",
      ],
      duration: "8 Weeks",
      schedule: "TBA",
      level: "Advanced",
      hasPDF: false,
    },
    {
      icon: <Signal className="h-8 w-8 text-primary" />,
      title: "Wireless Communication Systems (RF Focused)",
      description:
        "Learn how modern wireless systems (Wi-Fi, LTE, Bluetooth) work from an RF perspective. Covers modulation techniques, channel models, noise, and system-level RF planning.",
      features: [
        "Wireless Systems",
        "Modulation Techniques",
        "Channel Models",
        "RF Planning",
      ],
      duration: "8 Weeks",
      schedule: "TBA",
      level: "Intermediate to Advanced",
      hasPDF: false,
    },
    {
      icon: <TestTube className="h-8 w-8 text-primary" />,
      title: "RF Measurements and Testing Techniques",
      description:
        "Hands-on training in using Vector Network Analyzers (VNAs), Spectrum Analyzers, and Signal Generators. Understand how to test and troubleshoot RF circuits and antennas accurately.",
      features: [
        "VNA Usage",
        "Spectrum Analyzers",
        "Signal Generators",
        "Circuit Testing",
      ],
      duration: "4 Weeks",
      schedule: "TBA",
      level: "Intermediate",
      hasPDF: false,
    },
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
                  Our <span className="text-gradient">Technical Courses</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3">
                  Master essential software, programming, and engineering skills
                  with our comprehensive technical training programs designed
                  for students and professionals.
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
                    delay={index * 50}
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

                        <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="break-words">
                              {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="break-words">
                              {course.schedule}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Award className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                            <span className="break-words">{course.level}</span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {course.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-xs sm:text-sm text-gray-600"
                            >
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                              <span className="break-words">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="pt-4 space-y-2">
                          {course.hasPDF && course.pdfPath && (
                            <a
                              href={course.pdfPath}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity text-sm sm:text-base">
                                <Download className="h-4 w-4 mr-2" />
                                Download Course PDF
                              </Button>
                            </a>
                          )}

                          <Link to="/Contact" className="block">
                            <Button className="w-full gradient-primary text-white hover:opacity-90 transition-opacity text-sm sm:text-base">
                              Enroll Now
                            </Button>
                          </Link>

                          {/* Learn More → navigates to /enquiry */}
                          <Link to="/Contact" className="block">
                            <Button
                              variant="outline"
                              className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
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
                      Book a free consultation to discuss your learning goals
                      and find the perfect course for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                      <Link to="/contact">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                        >
                          Book Free Consultation
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
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
