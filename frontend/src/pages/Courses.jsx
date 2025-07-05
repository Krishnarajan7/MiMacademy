import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
  Filter,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const softwareCourses = [
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: 'Excel Mastery',
      shortDesc: 'From fundamentals to advanced analytics',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      hasPDF: false,
      features: ['PivotTables', 'Advanced Functions', 'Data Analysis', 'Automation'],
    },
    {
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: 'MATLAB for Engineers',
      shortDesc: 'Data analysis and engineering applications',
      duration: '8 Weeks',
      level: 'Beginner to Intermediate',
      hasPDF: false,
      features: ['Scripting Basics', 'Data Visualization', 'Equation Solving', 'Simulations'],
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: 'Python Programming',
      shortDesc: 'From zero to practical skills',
      duration: '8 Weeks',
      level: 'Beginner',
      hasPDF: false,
      features: ['Core Concepts', 'Hands-on Exercises', 'Task Automation', 'Projects'],
    },
    {
      icon: <Presentation className="h-6 w-6 text-primary" />,
      title: 'PowerPoint Essentials',
      shortDesc: 'Create impactful presentations',
      duration: '4 Weeks',
      level: 'Beginner to Intermediate',
      hasPDF: false,
      features: ['Slide Design', 'Animations', 'Visual Storytelling', 'Templates'],
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: 'Microsoft Word Mastery',
      shortDesc: 'Professional documents made easy',
      duration: '4 Weeks',
      level: 'Beginner to Intermediate',
      hasPDF: false,
      features: ['Formatting', 'Templates', 'Headers/Footers', 'Professional Docs'],
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: 'SPSS for Statistical Analysis',
      shortDesc: 'Descriptive and inferential statistics',
      duration: '6 Weeks',
      level: 'Beginner',
      hasPDF: false,
      features: ['Data Entry', 'Hypothesis Testing', 'Correlations', 'ANOVA'],
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Power BI Data Analysis',
      shortDesc: 'Turn data into compelling visuals',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      hasPDF: false,
      features: ['Data Import', 'DAX Formulas', 'Interactive Reports', 'Dashboards'],
    },
  ];

  const engineeringCourses = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: 'Electronics & Circuit Design',
      shortDesc: 'Fundamentals of electronics',
      duration: '8 Weeks',
      level: 'Beginner',
      hasPDF: false,
      features: ["Ohm's Law", 'Basic Components', 'Circuit Design', 'Simulation'],
    },
    {
      icon: <Wifi className="h-6 w-6 text-primary" />,
      title: 'IoT with ESP32',
      shortDesc: 'Build connected smart devices',
      duration: '8 Weeks',
      level: 'Intermediate',
      hasPDF: false,
      features: ['ESP32 Programming', 'Wi-Fi/Bluetooth', 'Cloud Communication', 'Smart Devices'],
    },
    {
      icon: <Radio className="h-6 w-6 text-primary" />,
      title: 'RF Engineering Basics',
      shortDesc: 'Radio frequency fundamentals',
      duration: '6 Weeks',
      level: 'Beginner',
      hasPDF: false,
      features: ['RF Principles', 'Transmission Lines', 'Signal Propagation', 'Impedance'],
    },
    {
      icon: <TestTube className="h-6 w-6 text-primary" />,
      title: 'RF Circuit Design',
      shortDesc: 'Design and analyze RF circuits',
      duration: '8 Weeks',
      level: 'Intermediate',
      hasPDF: false,
      features: ['Circuit Design', 'Amplifiers & Filters', 'Simulation Tools', 'Optimization'],
    },
    {
      icon: <Antenna className="h-6 w-6 text-primary" />,
      title: 'Antenna Design',
      shortDesc: 'Antenna theory and design',
      duration: '6 Weeks',
      level: 'Intermediate',
      hasPDF: false,
      features: ['Antenna Theory', 'Design Principles', 'Performance Testing', 'Propagation'],
    },
    {
      icon: <Waves className="h-6 w-6 text-primary" />,
      title: 'Microwave Engineering',
      shortDesc: 'High-frequency circuit behavior',
      duration: '8 Weeks',
      level: 'Advanced',
      hasPDF: false,
      features: ['Transmission Lines', 'Waveguides', 'S-parameters', 'Smith Charts'],
    },
  ];

  const professionalCourses = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: 'Project Management',
      shortDesc: 'MS Project fundamentals',
      duration: '4 Weeks',
      level: 'Beginner',
      hasPDF: false,
      features: ['Project Planning', 'Scheduling', 'Resource Management', 'Budget Tracking'],
    },
    {
      icon: <Mic className="h-6 w-6 text-primary" />,
      title: 'Public Speaking',
      shortDesc: 'Presentation skills development',
      duration: '4 Weeks',
      level: 'All Levels',
      hasPDF: false,
      features: ['Speech Structure', 'Body Language', 'Voice Control', 'Audience Engagement'],
    },
  ];

  const allCourses = [...softwareCourses, ...engineeringCourses, ...professionalCourses];

  const filterCourses = (courses) => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLevel =
        selectedLevel === 'All' || course.level.includes(selectedLevel);
      return matchesSearch && matchesLevel;
    });
  };

  const CourseCard = ({ course, index }) => (
    <AnimatedSection animation="fade-up" delay={index * 50}>
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md h-full bg-white">
        <CardHeader className="pb-4 p-4 sm:p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                {course.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-base sm:text-lg leading-tight mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{course.shortDesc}</p>
              </div>
            </div>
            {course.hasPDF && (
              <Badge variant="secondary" className="text-xs flex-shrink-0 ml-2">
                PDF
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-0 p-4 sm:p-6 space-y-4 flex flex-col flex-1">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-xs sm:text-sm">{course.duration}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-1 flex-shrink-0" />
              <span className="text-xs sm:text-sm truncate">{course.level}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 flex-1">
            {course.features.slice(0, 4).map((feature, idx) => (
              <Badge key={idx} variant="outline" className="text-xs px-2 py-1 bg-gray-50">
                {feature}
              </Badge>
            ))}
            {course.features.length > 4 && (
              <Badge variant="outline" className="text-xs px-2 py-1 bg-primary/5 text-primary">
                +{course.features.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-auto pt-2">
            {course.hasPDF && (
              <Button
                size="sm"
                variant="outline"
                className="w-full text-sm border-primary/30 text-primary hover:bg-primary hover:text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            )}
            <Link to="/contact" className="w-full">
              <Button size="sm" className="w-full gradient-primary text-white text-sm py-2.5">
                Enroll Now
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedSection>
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <PageTransition>
        <main className="pt-16 overflow-x-hidden">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-poppins">
                  Our <span className="text-gradient">Technical Courses</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Master essential skills with our comprehensive training programs
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Courses Section */}
          <section className="py-8 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search courses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-11"
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:flex-shrink-0">
                    <Filter className="h-4 w-4 text-gray-400" />
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="border border-gray-300 rounded-md px-3 py-2.5 text-sm min-w-[140px]"
                    >
                      <option value="All">All Levels</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="software" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 h-12 p-1">
                  <TabsTrigger value="software" className="text-xs sm:text-sm py-2">
                    Software & Data
                  </TabsTrigger>
                  <TabsTrigger value="engineering" className="text-xs sm:text-sm py-2">
                    Engineering
                  </TabsTrigger>
                  <TabsTrigger value="professional" className="text-xs sm:text-sm py-2">
                    Professional
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="software" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCourses(softwareCourses).map((course, index) => (
                      <CourseCard key={index} course={course} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="engineering" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCourses(engineeringCourses).map((course, index) => (
                      <CourseCard key={index} course={course} index={index} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="professional" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterCourses(professionalCourses).map((course, index) => (
                      <CourseCard key={index} course={course} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection animation="fade-up" className="text-center">
                <Card className="gradient-primary text-white border-0 shadow-xl">
                  <CardContent className="p-6 sm:p-8 lg:p-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-poppins">
                      Ready to Get Started?
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                      Book a free consultation to discuss your learning goals and find the perfect course.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="w-full bg-white text-primary hover:bg-gray-100"
                        >
                          Book Free Consultation
                        </Button>
                      </Link>
                      <Link to="/contact" className="w-full sm:w-auto">
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-2 border-white text-primary hover:bg-white hover:text-primary"
                        >
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
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Courses;
