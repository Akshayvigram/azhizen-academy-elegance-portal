
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Users, Clock, Filter, Search, ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-royal-900 to-royal-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Our Courses
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            Discover comprehensive courses designed by industry experts to advance your career.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-cream-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-500"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={selectedPricing}
                onChange={(e) => setSelectedPricing(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-royal-500"
              >
                {pricingOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id}
                className="hover:transform hover:scale-105 transition-all duration-300 luxury-shadow border-0 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold text-royal-600">
                    {course.level}
                  </div>
                  {course.price === 0 && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      FREE
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-royal-900 mb-2">
                    {course.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">by {course.instructor}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
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
                    <div className="text-2xl font-bold text-royal-600">
                      {course.price === 0 ? 'FREE' : `₹${course.price.toLocaleString()}`}
                    </div>
                    <button 
                      onClick={() => window.location.href = `/courses/${course.id}`}
                      className="bg-gradient-to-r from-royal-600 to-maroon-600 hover:from-royal-700 hover:to-maroon-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
