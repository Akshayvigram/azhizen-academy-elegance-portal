
import React from 'react';
import { Star, Users, Clock, ArrowRight, GraduationCap, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedCoursesSection = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Generative AI with Python - Prompt Engineering",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      studentCount: 1250,
      description: "Applied Machine Learning with ChatGPT, LLM Integrations including hands-on projects: Resume Builder AI, Image Classifiers, Chatbots",
      price: 12999,
      duration: "12 weeks",
      level: "Intermediate",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Embedded C & RTOS for Beginners - IoT with ESP32",
      instructor: "Prof. Priya Sharma",
      rating: 4.9,
      studentCount: 980,
      description: "Cloud (Firebase, Azure), CoAP, MQTT, Edge Node - Core-engineering focused, job-market ready",
      price: 15999,
      duration: "16 weeks",
      level: "Beginner",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      instructor: "Arjun Menon",
      rating: 4.7,
      studentCount: 750,
      description: "Frontend Dev with React + Tailwind - NextJs with TypeScript - Backend with NodeJs + MongoDB - Web3 DApps with Solidity & Hardhat - DevOps for Web Apps (CI/CD, Docker)",
      price: 8999,
      duration: "10 weeks",
      level: "Intermediate",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const statistics = [
    {
      icon: GraduationCap,
      number: "50+",
      label: "Expert Courses",
      color: "text-yellow-500"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Students",
      color: "text-green-500"
    },
    {
      icon: Award,
      number: "95%",
      label: "Success Rate",
      color: "text-pink-500"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Job Placement",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="featured-courses" className="section-padding bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dark-blue-900 leading-[1.2]">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular courses designed by industry experts to help you achieve your career goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <Card 
              key={course.id}
              className="scroll-reveal hover:transform hover:scale-105 transition-all duration-300 luxury-shadow border-0 bg-white/90 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-dark-blue-600">
                  {course.level}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-dark-blue-900 mb-2">
                  {course.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.studentCount} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="text-2xl font-bold text-dark-blue-600">
                    ₹{course.price.toLocaleString()}
                  </div>
                  <Button 
                    onClick={() => window.location.href = `/courses/${course.id}`}
                    size="sm"
                  >
                    View Course
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section - Made smaller and center aligned */}
        <div className="mb-12 flex justify-center">
          <div className="bg-dark-blue-900 rounded-2xl p-8 md:p-12 luxury-shadow max-w-4xl w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => window.location.href = '/courses'}
            size="lg"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
