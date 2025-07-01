import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nithyasri Babu",
      role: "Parent",
      rating: 5,
      feedback: "Thank you so much sir. Your guidance has been incredibly helpful. Thanks for making things clearer and boosting our confidence. Your clear explanation and dedication last an impact on us. And we feel more confident because of your guidance.",
      achievement: "Increased Confidence"
    },
    {
      name: "Shalini Selvamani",
      role: "Parent", 
      rating: 5,
      feedback: "Thank you sir for your dedication to helping us. Your clear explanations and insights have greatly enhanced our understanding. Your guidance has truly made me a difference.",
      achievement: "Enhanced Understanding"
    },
    {
      name: "Hari Raj",
      role: "Student",
      rating: 5,
      feedback: "Thank you for motivating us. The motivation helped us to gain confidence. Thank you so much sir for your enlightening and your dedication.",
      achievement: "Gained Confidence"
    },
    {
      name: "Mr. Kabilan",
      role: "Parent",
      rating: 5,
      feedback: "Thank you for your valuable classes and your dedication to teach is wonderful sir. Thank you very much sir for sharing your knowledge and your experience.",
      achievement: "Valuable Learning Experience"
    },
    {
      name: "Aaquib EGS",
      role: "Student",
      rating: 5,
      feedback: "I wanted to express my gratitude for the recent class you conducted. The session was highly informative and provided valuable insights. Your expertise and the real-world examples you shared greatly enhanced our understanding.",
      achievement: "Enhanced Understanding"
    },
    {
      name: "King Safwan",
      role: "Student",
      rating: 5,
      feedback: "I wanted to extend my heartfelt thanks for the insightful industry session you hosted. Your expertise and the engaging manner in which you presented the material were truly appreciated. The session provided valuable knowledge and perspectives that will greatly benefit our ongoing projects and professional development.",
      achievement: "Professional Development"
    },
    {
      name: "Dinesh",
      role: "Parent",
      rating: 5,
      feedback: "MIM Academy is truly a blessing for our community. It's not just about academics — it's about shaping confident, well-rounded individuals. The care, patience, and dedication shown by the team is something you rarely find. They go the extra mile for every student, making sure no one is left behind. The environment is positive, values-based, and truly student-centered. I've seen firsthand how students grow — not just in marks, but in mindset. MIM Academy is doing remarkable work, and I'm proud to support their mission.",
      achievement: "Holistic Development"
    },
    {
      name: "Prem",
      role: "Parent",
      rating: 5,
      feedback: "My daughter, currently in Year 6, has greatly benefited from attending SATs tuition at MIM Academy. The structured approach, especially the consistent practice through worksheets, has significantly improved her academic performance. I highly appreciate the academy's commitment to student success.",
      achievement: "Academic Improvement"
    },
    {
      name: "Sohi",
      role: "Student",
      rating: 5,
      feedback: "Thank you so much sir for your enlightening and your dedication. Your clear explanations and insights have greatly enhanced our understanding. Your guidance has truly made me a difference. Once again thank you for boosting our confidence.",
      achievement: "Boosted Confidence"
    },
    {
      name: "Yamini AshokKumar",
      role: "Parent",
      rating: 5,
      feedback:
        "Thank you for helping with my son’s project. We really appreciate the support and guidance. The coaching was clear and easy to follow. The mentor explained the concepts well, which helped my son finish the project and understand the topic better. It was nice to see his confidence and interest grow.We’re very happy with the coaching and overall experience.!",
      achievement: "Project Guidance",
    },
    {
      name: "Ferroz",
      role: "Professional Skills Student",
      rating: 5,
      feedback:
        "Before taking the classes Ismaeel provided, I was struggling to understand the content in Computer Science, and my grades were very poor. Ismaeel patiently guided me through the topics and provided past papers to help me prepare for my final exams. Thanks to his support, I ended up passing GCSE Computer Science with strong results. His classes were incredibly helpful, he consistently helped me review the basics and apply them effectively to exam-style questions.",
      achievement: "Career Advancement",
    },
    {
      name: "Nithin",
      role: "Student",
      rating: 5,
      feedback:
        "Before I started my Maths lessons with Ismaeel, I often found the subject difficult and struggled to keep up in class. Ismaeel explained each topic clearly and made sure I understood the concepts before moving on. His lessons were well-organised, and he provided lots of practice questions that helped me gain confidence and improve my problem-solving skills. Thanks to his support and guidance, my understanding of Maths has improved significantly, and I feel much more confident in the subject. I’m really grateful for his help and would highly recommend him as a tutor.",
      achievement: "Grade Improvement",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const stats = [
    { number: "100+", label: "Students Coached" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Expert Tutors" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <PageTransition>
        <main className="pt-16 overflow-x-hidden">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 to-blue-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-poppins leading-tight">
                  What Our <span className="text-gradient">Students Say</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-3">
                  Real stories from students who have transformed their learning journey with MiM Academy.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                  {stats.map((stat, index) => (
                    <AnimatedSection key={index} animation="scale-up" delay={index * 100}>
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">{stat.number}</div>
                        <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Testimonials Grid */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fade-up" 
                    delay={index * 150}
                  >
                    <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 relative h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/20" />
                        </div>
                        
                        <div className="flex items-center mb-3 sm:mb-4">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <p className="text-gray-700 mb-4 sm:mb-6 italic leading-relaxed text-sm sm:text-base">
                          "{testimonial.feedback}"
                        </p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                        
                        <div className="p-2 sm:p-3 bg-green-50 rounded-lg">
                          <p className="text-xs sm:text-sm font-medium text-green-800">
                            Achievement: {testimonial.achievement}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Success Stories Section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-12 sm:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-poppins leading-tight">
                  Success <span className="text-gradient">Stories</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3">
                  Every student's journey is unique, and we celebrate each milestone achieved through dedication and expert guidance.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <AnimatedSection animation="scale-up" delay={100}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">95%</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Student Satisfaction</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Our students consistently report high satisfaction with our teaching methods</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-up" delay={200}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">90%</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Confidence Improvement</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Students see significant improvement in their confidence and understanding</p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection animation="scale-up" delay={300}>
                  <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">100%</div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Parent Satisfaction</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Parents trust our commitment to their children's success</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Testimonials;
