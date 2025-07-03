
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, Search, ArrowRight } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      studentCount: 1250,
      description: "Master modern web development with React, Node.js, and MongoDB. Build real-world projects and deploy them to production.",
      price: 12999,
      duration: "12 weeks",
      level: "Intermediate",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      instructor: "Prof. Priya Sharma",
      rating: 4.9,
      studentCount: 980,
      description: "Dive into artificial intelligence and machine learning with Python. Learn algorithms, data science, and neural networks.",
      price: 15999,
      duration: "16 weeks",
      level: "Beginner",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      instructor: "Arjun Menon",
      rating: 4.7,
      studentCount: 750,
      description: "Complete digital marketing course covering SEO, social media, PPC, content marketing, and analytics.",
      price: 8999,
      duration: "10 weeks",
      level: "Beginner",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Data Science with Python",
      instructor: "Dr. Sneha Patel",
      rating: 4.6,
      studentCount: 650,
      description: "Learn data analysis, visualization, and statistical modeling using Python, pandas, and scikit-learn.",
      price: 11999,
      duration: "14 weeks",
      level: "Intermediate",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Mobile App Development",
      instructor: "Vikram Singh",
      rating: 4.5,
      studentCount: 580,
      description: "Build cross-platform mobile apps using React Native and Flutter. Deploy to both iOS and Android stores.",
      price: 13999,
      duration: "15 weeks",
      level: "Advanced",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Introduction to Programming",
      instructor: "Ravi Kumar",
      rating: 4.8,
      studentCount: 2100,
      description: "Start your programming journey with basics of coding, logic building, and problem-solving techniques.",
      price: 0,
      duration: "8 weeks",
      level: "Beginner",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ['All', 'Web Development', 'AI & ML', 'Marketing', 'Data Science', 'Mobile Development', 'Programming'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const pricingOptions = ['All', 'Free', 'Paid'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesPricing = selectedPricing === 'All' || 
                          (selectedPricing === 'Free' && course.price === 0) ||
                          (selectedPricing === 'Paid' && course.price > 0);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPricing;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-light-blue-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-light-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-light-blue-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-block mb-6">
              <span className="bg-light-blue-500/20 text-light-blue-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-light-blue-400/30">
                Our Courses
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-light-blue-300 to-light-blue-500 bg-clip-text text-transparent">
                Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Discover comprehensive courses designed by industry experts to advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Modern Filters and Search */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300 font-medium"
              >
                <option value="" disabled>All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300 font-medium"
              >
                <option value="" disabled>All Levels</option>
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300 font-medium"
              >
                <option value="" disabled>All Pricing</option>
                {pricingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Courses Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-600 text-lg font-medium">
              Showing <span className="text-dark-blue-600 font-semibold">{filteredCourses.length}</span> of <span className="text-dark-blue-600 font-semibold">{courses.length}</span> courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id}
                className="group hover:transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border-0 bg-white overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm ${
                      course.level === 'Beginner' ? 'bg-green-500/80' :
                      course.level === 'Intermediate' ? 'bg-light-blue-500/80' :
                      'bg-dark-blue-600/80'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  
                  {course.price === 0 && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                        FREE
                      </span>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-dark-blue-900 mb-2 group-hover:text-light-blue-600 transition-colors duration-300">
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
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold">
                      {course.price === 0 ? (
                        <span className="text-emerald-600">FREE</span>
                      ) : (
                        <span className="text-dark-blue-600">₹{course.price.toLocaleString()}</span>
                      )}
                    </div>
                    <Button 
                      onClick={() => window.location.href = `/courses/${course.id}`}
                      size="sm"
                    >
                      View Details
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-2xl p-12">
                <p className="text-gray-500 text-xl mb-4">No courses found matching your criteria.</p>
                <p className="text-gray-400">Try adjusting your filters or search terms.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
