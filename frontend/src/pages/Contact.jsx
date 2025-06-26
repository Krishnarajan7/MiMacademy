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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+44 (0) 7404755222"],
      action: "Call Us"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@mimacademy.com", "support@mimacademy.com"],
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
                {/* Contact Info */}
                <div className="space-y-8">
                  <AnimatedSection animation="slide-right">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {contactInfo.map((info, index) => (
                        <AnimatedSection key={index} animation="scale-up" delay={index * 100}>
                          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                                  {info.icon}
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                                  {info.details.map((detail, i) => (
                                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </AnimatedSection>
                      ))}
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-up" delay={400}>
                    <Card className="gradient-primary text-white border-0">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <MessageCircle className="h-6 w-6" />
                            <div>
                              <p className="font-semibold">WhatsApp</p>
                              <p className="opacity-90">+44 (0) 7404755222</p>
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
                        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100 mt-6 w-full">
                          Book Free Demo
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>

                {/* Form */}
                <AnimatedSection animation="slide-left">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900">Request Callback</CardTitle>
                      <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              className="w-full"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Interested Course</label>
                            <select
                              id="course"
                              name="course"
                              value={formData.course}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <option value="">Select a course</option>
                              {courses.map((course, index) => (
                                <option key={index} value={course}>{course}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className="w-full"
                            placeholder="Tell us about your learning goals and how we can help..."
                          />
                        </div>

                        <Button type="submit" size="lg" className="w-full gradient-primary text-white hover:opacity-90">
                          Send Message
                        </Button>
                      </form>
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
