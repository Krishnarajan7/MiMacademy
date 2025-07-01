import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calculator,
  Atom,
  CheckCircle,
  Clock,
  Users,
  GraduationCap,
  Laptop,
  Zap,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const AcademicCourses = () => {
  const courses = [
    {
      title: "Key Stage 3 Support",
      subtitle: "For Years 7–9 students",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description:
        "At this critical stage in secondary education, students begin developing the mindset and academic habits that shape their future success. We provide structured, engaging support for Maths and Science to ensure students build a strong academic foundation and grow in confidence before entering GCSEs.",
      features: [
        "📘 Mathematics (KS3): Fluency with numbers, logical thinking, and problem-solving strategies",
        "🔬 Science (KS3): Combined biology, chemistry, and physics with practical examples",
        "Tailored approach matching school curriculum while deepening understanding",
      ],
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-orange-50 to-amber-50",
    },
    {
      title: "GCSE Subject Support",
      subtitle: "For Years 10–11 students | Exam Boards: Edexcel | AQA | OCR",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      description:
        "Our GCSE courses are tailored to meet UK national curriculum standards and exam board requirements. We are best with clear explanations, structured practice, and focused exam preparation, we help students build confidence and achieve strong results.",
      features: [
        "📐 GCSE Mathematics: Algebra, Geometry, Statistics & Probability, Higher/Foundation Tier Support",
        "⚛ GCSE Physics: Motion, Forces, Energy, Electricity & Magnetism, Required Practicals",
        "💻 GCSE Computer Science: Python Programming, Algorithms, Systems Architecture, Cybersecurity",
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-teal-50 to-cyan-50",
    },
    {
      title: "SATs Preparation (Key Stage 2)",
      subtitle: "For Year 6 students (Ages 10–11)",
      icon: <Target className="h-8 w-8 text-primary" />,
      description:
        "Our SATs program is designed to strengthen core skills in English and Maths. Through structured lessons, past paper practice, and individual support, we ensure students are fully prepared and confident for their end-of-year assessments.",
      features: [
        "Focus on Reading Comprehension, Grammar, Arithmetic, and Reasoning",
        "Regular mock tests and feedback",
        "Confidence-building activities and small group sessions",
      ],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-green-50 to-emerald-50",
    },
    {
      title: "A-Level Mathematics",
      subtitle: "For Year 12–13 students (Ages 16–18)",
      icon: <Calculator className="h-8 w-8 text-primary" />,
      description:
        "This course equips students with the skills and techniques required to excel in A-Level Maths. We cover both Pure Maths and Applied topics (Statistics & Mechanics), using exam-focused strategies and real-world examples.",
      features: [
        "Step-by-step problem-solving techniques",
        "Intensive exam prep with past papers",
        "Personalised topic revision and weekly assessments",
      ],
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-blue-50 to-indigo-50",
    },
    {
      title: "A-Level Physics",
      subtitle: "For Year 12–13 students (Ages 16–18)",
      icon: <Atom className="h-8 w-8 text-primary" />,
      description:
        "Our Physics course simplifies complex concepts and helps students develop a deep understanding of theoretical and practical physics. We focus on exam technique, strategies, mathematical application, and conceptual clarity.",
      features: [
        "Clear explanations of core topics (Mechanics, Electricity, Waves, Nuclear, etc.)",
        "Practice with tricky calculations and long-answer questions",
        "Support with practicals and required experiments",
      ],
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      color: "from-purple-50 to-violet-50",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <PageTransition>
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                  Academic <span className="text-gradient">Excellence</span>{" "}
                  Programs
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Specialized courses designed to help students excel in their
                  academic journey with expert guidance and proven
                  methodologies.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Courses Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-20">
                {courses.map((course, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-up"
                    delay={index * 200}
                  >
                    <div
                      className={`bg-gradient-to-br ${course.color} rounded-3xl p-8 lg:p-12`}
                    >
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                          index % 2 === 1 ? "lg:grid-flow-dense" : ""
                        }`}
                      >
                        {/* Content */}
                        <div
                          className={`space-y-6 ${
                            index % 2 === 1 ? "lg:col-start-2" : ""
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            {course.icon}
                            <div>
                              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
                                {course.title}
                              </h2>
                              <p className="text-lg text-gray-600 mt-2">
                                {course.subtitle}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-700 text-lg leading-relaxed text-justify">
                            {course.description}
                          </p>

                          <div className="space-y-3">
                            {course.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-start space-x-3"
                              >
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/contact">
                              <Button
                                size="lg"
                                className="gradient-primary text-white hover:opacity-90 transition-opacity"
                              >
                                Enroll Now
                              </Button>
                            </Link>
                            <Link to="/contact">
                              <Button
                                size="lg"
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-white"
                              >
                                Learn More
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Image */}
                        <div
                          className={`${
                            index % 2 === 1
                              ? "lg:col-start-1 lg:row-start-1"
                              : ""
                          }`}
                        >
                          <div className="relative">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection animation="fade-up" className="text-center">
                <Card className="gradient-primary text-white border-0 shadow-2xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins leading-tight">
                      Ready to Excel in Your Studies?
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-2 text-justify">
                      Join hundreds of students who have achieved academic
                      success with our expert guidance and proven teaching
                      methods.
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
                          className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                        >
                          View Timetable
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

export default AcademicCourses;