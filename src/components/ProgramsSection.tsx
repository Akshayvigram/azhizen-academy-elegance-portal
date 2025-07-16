
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
    <section
      id="programs"
      className="section-padding bg-gradient-to-b from-white via-sky-100 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-[1.2]">
            Our Program
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive cohort-based learning journey designed to transform students into industry-ready professionals.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center mb-20">
          <div className="max-w-4xl scroll-reveal">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="mb-6">
                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-[1.2]">
                  0 to Skilled: Cohort Program
                </h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                A cohort-based learning journey for students from 3rd to 6th semester that includes value-added courses, two internships, and a domain-specific capstone project. Transform from zero to skilled professional with our structured approach to career development.
              </p>

              <div className="flex justify-center">
                <Button
                  onClick={() => (window.location.href = '/cohort-program')}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:from-cyan-700 hover:to-blue-700"
                >
                  Explore More
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

};

export default ProgramsSection;
