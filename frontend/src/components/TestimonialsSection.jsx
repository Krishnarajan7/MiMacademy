import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Yamini AshokKumar",
      role: "Parent",
      rating: 5,
      feedback:
        "Thank you for helping with my son’s project. We really appreciate the support and guidance. The coaching was clear and easy to follow. The mentor explained the concepts well, which helped my son finish the project and understand the topic better. It was nice to see his confidence and interest grow.We’re very happy with the coaching and overall experience.!",
      achievement: "IELTS Score: 8.0",
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
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
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
            Real stories from students who have transformed their learning
            journey with MiM Academy.
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
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
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
