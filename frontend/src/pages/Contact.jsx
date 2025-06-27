import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';

const Contact = () => {
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    experience: '',
    goals: '',
    preferredSchedule: ''
  });

  const [activeForm, setActiveForm] = useState('enquiry'); // removed explicit type

  const handleEnquiryChange = (e) => {
    setEnquiryData({
      ...enquiryData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', enquiryData);
    // Handle enquiry submission logic here
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted:', registrationData);
    // Handle registration submission logic here
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+44 7404755222"],
      action: "Call Us"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@mimacademy.org", "ismaeel@mimacademy.org"],
      action: "Email Us"
    },
    {
      icon: <Instagram className="h-6 w-6 text-primary" />,
      title: "Instagram",
      details: ["@mimacademyofficial"],
      action: "Follow Us"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Hours",
      details: ["Mon-Sun: Available", "Flexible Scheduling"],
      action: "Schedule"
    }
  ];

  const courses = [
    "IELTS Preparation",
    "TOEFL Training",
    "Grammar & Communication",
    "Professional Skills",
    "Academic Coaching",
    "Career Guidance",
    "Executive Coaching",
    "Personal Coaching"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <PageTransition>
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins">
                  Get In <span className="text-gradient">Touch</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Ready to start your learning journey? Contact us today for a free consultation and discover how we can help you achieve your goals.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="py-20 bg-white">
            <div className="container-width section-padding">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <AnimatedSection animation="slide-right">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {contactInfo.map((info, index) => (
                        <AnimatedSection 
                          key={index} 
                          animation="scale-up" 
                          delay={index * 100}
                        >
                          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                                  {info.icon}
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                                  {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-gray-600 text-sm">
                                      {detail}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </AnimatedSection>
                      ))}
                    </div>
                  </AnimatedSection>

                  {/* Quick Contact Methods */}
                  <AnimatedSection animation="fade-up" delay={400}>
                    <Card className="gradient-primary text-white border-0">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <MessageCircle className="h-6 w-6" />
                            <div>
                              <p className="font-semibold">WhatsApp</p>
                              <p className="opacity-90">+44 7404755222</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Instagram className="h-6 w-6" />
                            <div>
                              <p className="font-semibold">Instagram</p>
                              <p className="opacity-90">@mimacademyofficial</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                          <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-primary hover:bg-gray-100 flex-1"
                            onClick={() => window.open('https://www.instagram.com/mimacademyofficial?igsh=MTd5cjNwNDkwdXJmNQ==', '_blank')}
                          >
                            Follow on Instagram
                          </Button>
                          <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-primary hover:bg-gray-100 flex-1"
                            onClick={() => window.open('tel:+447404755222')}
                          >
                            Call Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>

                {/* Forms Section */}
                <AnimatedSection animation="slide-left">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex space-x-4 mb-4">
                        <Button
                          variant={activeForm === 'enquiry' ? 'default' : 'outline'}
                          onClick={() => setActiveForm('enquiry')}
                          className="flex-1"
                        >
                          Enquiry Form
                        </Button>
                        <Button
                          variant={activeForm === 'registration' ? 'default' : 'outline'}
                          onClick={() => setActiveForm('registration')}
                          className="flex-1"
                        >
                          Registration Form
                        </Button>
                      </div>
                      <CardTitle className="text-2xl text-gray-900">
                        {activeForm === 'enquiry' ? 'General Enquiry' : 'Course Registration'}
                      </CardTitle>
                      <p className="text-gray-600">
                        {activeForm === 'enquiry' 
                          ? "Have questions? Fill out the enquiry form and we'll get back to you within 24 hours."
                          : "Ready to start? Complete the registration form to begin your learning journey with us."
                        }
                      </p>
                    </CardHeader>
                    <CardContent>
                      {activeForm === 'enquiry' ? (
                        <form onSubmit={handleEnquirySubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="enquiry-name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                              </label>
                              <Input
                                id="enquiry-name"
                                name="name"
                                type="text"
                                required
                                value={enquiryData.name}
                                onChange={handleEnquiryChange}
                                className="w-full"
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <label htmlFor="enquiry-email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <Input
                                id="enquiry-email"
                                name="email"
                                type="email"
                                required
                                value={enquiryData.email}
                                onChange={handleEnquiryChange}
                                className="w-full"
                                placeholder="Enter your email"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="enquiry-phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number
                            </label>
                            <Input
                              id="enquiry-phone"
                              name="phone"
                              type="tel"
                              value={enquiryData.phone}
                              onChange={handleEnquiryChange}
                              className="w-full"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="enquiry-message" className="block text-sm font-medium text-gray-700 mb-2">
                              Message *
                            </label>
                            <Textarea
                              id="enquiry-message"
                              name="message"
                              required
                              value={enquiryData.message}
                              onChange={handleEnquiryChange}
                              rows={5}
                              className="w-full"
                              placeholder="Tell us about your learning goals and how we can help..."
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full gradient-primary text-white hover:opacity-90 transition-opacity"
                            size="lg"
                          >
                            Send Enquiry
                          </Button>
                        </form>
                      ) : (
                        <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="reg-name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                              </label>
                              <Input
                                id="reg-name"
                                name="name"
                                type="text"
                                required
                                value={registrationData.name}
                                onChange={handleRegistrationChange}
                                className="w-full"
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <Input
                                id="reg-email"
                                name="email"
                                type="email"
                                required
                                value={registrationData.email}
                                onChange={handleRegistrationChange}
                                className="w-full"
                                placeholder="Enter your email"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="reg-phone" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number *
                              </label>
                              <Input
                                id="reg-phone"
                                name="phone"
                                type="tel"
                                required
                                value={registrationData.phone}
                                onChange={handleRegistrationChange}
                                className="w-full"
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div>
                              <label htmlFor="reg-course" className="block text-sm font-medium text-gray-700 mb-2">
                                Course Selection *
                              </label>
                              <select
                                id="reg-course"
                                name="course"
                                required
                                value={registrationData.course}
                                onChange={handleRegistrationChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              >
                                <option value="">Select a course</option>
                                {courses.map((course, index) => (
                                  <option key={index} value={course}>{course}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="reg-experience" className="block text-sm font-medium text-gray-700 mb-2">
                              Previous Experience
                            </label>
                            <Textarea
                              id="reg-experience"
                              name="experience"
                              value={registrationData.experience}
                              onChange={handleRegistrationChange}
                              rows={3}
                              className="w-full"
                              placeholder="Tell us about your previous experience in this subject..."
                            />
                          </div>

                          <div>
                            <label htmlFor="reg-goals" className="block text-sm font-medium text-gray-700 mb-2">
                              Learning Goals *
                            </label>
                            <Textarea
                              id="reg-goals"
                              name="goals"
                              required
                              value={registrationData.goals}
                              onChange={handleRegistrationChange}
                              rows={3}
                              className="w-full"
                              placeholder="What do you hope to achieve through this course?"
                            />
                          </div>

                          <div>
                            <label htmlFor="reg-schedule" className="block text-sm font-medium text-gray-700 mb-2">
                              Preferred Schedule
                            </label>
                            <Input
                              id="reg-schedule"
                              name="preferredSchedule"
                              type="text"
                              value={registrationData.preferredSchedule}
                              onChange={handleRegistrationChange}
                              className="w-full"
                              placeholder="e.g., Weekdays evenings, Weekend mornings"
                            />
                          </div>
                          
                          <Button 
                            type="submit" 
                            className="w-full gradient-primary text-white hover:opacity-90 transition-opacity"
                            size="lg"
                          >
                            Complete Registration
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section className="py-20 bg-gray-50">
            <div className="container-width section-padding">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
                  Visit Our <span className="text-gradient">Learning Center</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Experience our state-of-the-art facilities and meet our expert tutors
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="scale-up" delay={200}>
                <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Learning Center Address</h3>
                  <p className="text-gray-600 mb-6">
                    123 Education Street<br />
                    Learning City, LC 12345<br />
                    United Kingdom
                  </p>
                  <Button className="gradient-primary text-white hover:opacity-90">
                    Get Directions
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Contact;
