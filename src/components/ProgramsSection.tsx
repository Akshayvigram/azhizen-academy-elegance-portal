
import React from 'react';
import { ArrowRight, Calendar, Users, Trophy, Briefcase, GraduationCap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProgramsSection = () => {
  const timelineSteps = [
    {
      icon: Calendar,
      title: "Foundation Phase",
      duration: "Months 1-2",
      description: "Core concepts and fundamentals",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Skill Development",
      duration: "Months 3-4",
      description: "Hands-on projects and practical training",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Industry Internship",
      duration: "Months 5-6",
      description: "Real-world experience with leading companies",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Specialization",
      duration: "Months 7-8",
      description: "Domain-specific advanced skills",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GraduationCap,
      title: "Certification",
      duration: "Month 9",
      description: "Industry-recognized certifications",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Target,
      title: "Job Placement",
      duration: "Month 10",
      description: "Career support and placement assistance",
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="programs" className="section-padding bg-gradient-to-b from-gray-900 via-dark-blue-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-[1.2] overflow-visible">
            Our Program
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive cohort-based learning journey designed to transform students into industry-ready professionals.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="max-w-4xl scroll-reveal">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl luxury-shadow hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
              <div className="mb-6">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-light-blue-400 to-cyan-400 bg-clip-text text-transparent leading-[1.2] overflow-visible">
                  0 to Skilled: Cohort Program
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                A cohort-based learning journey for students from 3rd to 6th semester that includes value-added courses, two internships, and a domain-specific capstone project. Transform from zero to skilled professional with our structured approach to career development.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  onClick={() => window.location.href = '/cohort-program'}
                  size="lg"
                  className="bg-gradient-to-r from-light-blue-600 to-cyan-600 hover:from-light-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore More
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Program Timeline */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Program Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineSteps.map((step, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 font-semibold mb-3">{step.duration}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
