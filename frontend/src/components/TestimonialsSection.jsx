import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Yamini AshokKumar",
      role: "Parent",
      rating: 5,
      feedback: "Thank you for helping with my son’s project. We really appreciate the support and guidance. The coaching was clear and easy to follow. The mentor explained the concepts well, which helped my son finish the project and understand the topic better. It was nice to see his confidence and interest grow.We’re very happy with the coaching and overall experience.",
      // image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Chen",
      role: "Professional Skills Student",
      rating: 5,
      feedback: "The communication skills course transformed my confidence at work. The trainers are exceptional and the flexible timing worked perfectly with my schedule.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    // {
    //   name: "Maria Rodriguez",
    //   role: "Parent",
    //   rating: 5,
    //   feedback: "My daughter's academic performance improved significantly after joining MiM Academy. The tutors genuinely care about student success.",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    // },
    // {
    //   name: "Ahmed Hassan",
    //   role: "TOEFL Student",
    //   rating: 5,
    //   feedback: "Excellent TOEFL preparation! I scored 110/120 thanks to the comprehensive training and expert guidance. The investment was worth every penny.",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    // },
    // {
    //   name: "Emily Davis",
    //   role: "Career Guidance Student",
    //   rating: 5,
    //   feedback: "The career counseling sessions helped me make informed decisions about my future. I'm now pursuing my dream career path with confidence.",
    //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    // },
    // {
    //   name: "Michael Thompson",
    //   role: "Grammar Course Student",
    //   rating: 5,
    //   feedback: "As a working professional, the grammar course helped me communicate more effectively. The online format was convenient and very well structured.",
    //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    // }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-width section-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What Our <span className="text-gradient">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students who have transformed their learning journey with MiM Academy.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
              delay={index * 150}
            >
              <Card className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed flex-1">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
