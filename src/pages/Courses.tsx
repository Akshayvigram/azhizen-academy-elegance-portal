import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, Search, ArrowRight, Bell } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedPricing, setSelectedPricing] = useState('All');

  const courses = [
    // AI / ML / Data Science (6 courses)
    {
      id: 1,
      title: "Generative AI with Python - Prompt Engineering",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      studentCount: 1250,
      description: "Applied Machine Learning with ChatGPT, LLM Integrations (LangChain / RAG) - Data Analysis (Pandas, NumPy, Matplotlib)",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 2,
      title: "Prompt Engineering - Applied",
      instructor: "Prof. Anita Singh",
      rating: 4.7,
      studentCount: 980,
      description: "Learn advanced prompt engineering techniques for AI models, optimization strategies, and real-world applications.",
      price: "xxxx",
      duration: "8 weeks",
      level: "Beginner",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 3,
      title: "Machine Learning - ChatGPT + LLM Integrations",
      instructor: "Dr. Priya Sharma",
      rating: 4.9,
      studentCount: 1450,
      description: "Comprehensive course on machine learning with ChatGPT API integration and large language model implementations.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Advanced",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 4,
      title: "LangChain / RAG",
      instructor: "Arjun Menon",
      rating: 4.6,
      studentCount: 750,
      description: "Build advanced AI applications using LangChain framework and Retrieval-Augmented Generation techniques.",
      price: "xxxx",
      duration: "10 weeks",
      level: "Intermediate",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 5,
      title: "Data Analysis (Pandas, NumPy, Matplotlib)",
      instructor: "Dr. Sneha Patel",
      rating: 4.8,
      studentCount: 2100,
      description: "Master data analysis and visualization using Python's most powerful libraries for data science.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Beginner",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 6,
      title: "AI for Edge Devices / TinyML",
      instructor: "Vikram Singh",
      rating: 4.5,
      studentCount: 580,
      description: "Deploy AI models on edge devices and microcontrollers using TinyML techniques and optimization strategies.",
      price: "xxxx",
      duration: "15 weeks",
      level: "Advanced",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },

    // Embedded Systems & IoT (5 courses)
    {
      id: 7,
      title: "Embedded C & RTOS for Beginners",
      instructor: "Ravi Kumar",
      rating: 4.7,
      studentCount: 920,
      description: "Learn embedded C programming and Real-Time Operating Systems from scratch with hands-on projects.",
      price: "xxxx",
      duration: "16 weeks",
      level: "Beginner",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 8,
      title: "IoT with ESP32 + Cloud (Firebase, Azure)",
      instructor: "Dr. Kavya Singh",
      rating: 4.8,
      studentCount: 1100,
      description: "Build IoT solutions using ESP32 microcontroller with cloud integration using Firebase and Azure platforms.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 9,
      title: "LoRa, MQTT, Edge Node Communication",
      instructor: "Eng. Rohit Verma",
      rating: 4.6,
      studentCount: 650,
      description: "Master wireless communication protocols for IoT including LoRa, MQTT, and edge computing solutions.",
      price: "xxxx",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 10,
      title: "Industrial Automation with PLC & SCADA",
      instructor: "Prof. Manoj Gupta",
      rating: 4.9,
      studentCount: 720,
      description: "Learn industrial automation using Programmable Logic Controllers and SCADA systems for manufacturing.",
      price: "xxxx",
      duration: "18 weeks",
      level: "Advanced",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 11,
      title: "IoT Security & OTA Updates",
      instructor: "Dr. Neha Agarwal",
      rating: 4.7,
      studentCount: 480,
      description: "Implement security measures for IoT devices and Over-the-Air update mechanisms for embedded systems.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Advanced",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },

    // Full Stack & Web Development (5 courses)
    {
      id: 12,
      title: "Frontend Development with React + Tailwind",
      instructor: "Amit Sharma",
      rating: 4.8,
      studentCount: 1850,
      description: "Build modern, responsive web interfaces using React and Tailwind CSS with best practices and design patterns.",
      price: "xxxx",
      duration: "10 weeks",
      level: "Beginner",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 13,
      title: "Next.js with TypeScript",
      instructor: "Sarah Johnson",
      rating: 4.7,
      studentCount: 1200,
      description: "Master full-stack development with Next.js framework and TypeScript for scalable web applications.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 14,
      title: "Backend Development with Node.js + MongoDB",
      instructor: "Rajesh Patel",
      rating: 4.6,
      studentCount: 950,
      description: "Build robust backend APIs using Node.js, Express, and MongoDB with authentication and security best practices.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Intermediate",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 15,
      title: "Web3 DApps with Solidity & Hardhat",
      instructor: "Dr. Blockchain Dev",
      rating: 4.5,
      studentCount: 680,
      description: "Develop decentralized applications using Solidity smart contracts and Hardhat development environment.",
      price: "xxxx",
      duration: "16 weeks",
      level: "Advanced",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 16,
      title: "DevOps for Web Apps (CI/CD, Docker)",
      instructor: "Michael Chen",
      rating: 4.8,
      studentCount: 850,
      description: "Implement DevOps practices for web applications including CI/CD pipelines, Docker containerization, and deployment.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Advanced",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },

    // Robotics & Mechatronics (5 courses)
    {
      id: 17,
      title: "ROS2 with Python / C++",
      instructor: "Dr. Robot Expert",
      rating: 4.7,
      studentCount: 540,
      description: "Master Robot Operating System 2 with both Python and C++ programming for advanced robotics applications.",
      price: "xxxx",
      duration: "16 weeks",
      level: "Advanced",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 18,
      title: "Arduino + Sensors & Actuators Projects",
      instructor: "Prof. Mechatronics",
      rating: 4.8,
      studentCount: 1350,
      description: "Build exciting robotics projects using Arduino microcontroller with various sensors and actuators.",
      price: "xxxx",
      duration: "10 weeks",
      level: "Beginner",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 19,
      title: "Raspberry Pi Automation",
      instructor: "Tech Guru",
      rating: 4.6,
      studentCount: 890,
      description: "Create home and industrial automation systems using Raspberry Pi with IoT integration and remote control.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 20,
      title: "Vision Navigation (OpenCV)",
      instructor: "Dr. Computer Vision",
      rating: 4.9,
      studentCount: 620,
      description: "Implement computer vision solutions for robotic navigation using OpenCV and advanced image processing techniques.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Advanced",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 21,
      title: "AI-powered Robotics (YOLO, TensorFlow Lite)",
      instructor: "AI Robotics Pro",
      rating: 4.8,
      studentCount: 450,
      description: "Integrate AI and machine learning into robotics using YOLO object detection and TensorFlow Lite for edge computing.",
      price: "xxxx",
      duration: "16 weeks",
      level: "Advanced",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },

    // VLSI & Chip Design (5 courses)
    {
      id: 22,
      title: "VHDL / Verilog for Beginners",
      instructor: "Chip Design Master",
      rating: 4.6,
      studentCount: 480,
      description: "Learn hardware description languages VHDL and Verilog for digital circuit design and FPGA programming.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Beginner",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 23,
      title: "ASIC Flow using Synopsys Tools",
      instructor: "VLSI Expert",
      rating: 4.7,
      studentCount: 320,
      description: "Master ASIC design flow using industry-standard Synopsys tools for synthesis, place and route, and verification.",
      price: "xxxx",
      duration: "18 weeks",
      level: "Advanced",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 24,
      title: "FPGA-based System Design",
      instructor: "FPGA Specialist",
      rating: 4.8,
      studentCount: 420,
      description: "Design and implement digital systems on FPGA platforms with hands-on projects and real-world applications.",
      price: "xxxx",
      duration: "16 weeks",
      level: "Intermediate",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 25,
      title: "Cadence Design Flow",
      instructor: "EDA Tools Expert",
      rating: 4.5,
      studentCount: 280,
      description: "Learn complete IC design flow using Cadence tools including schematic design, layout, and verification.",
      price: "xxxx",
      duration: "20 weeks",
      level: "Advanced",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 26,
      title: "Python for VLSI Test Automation",
      instructor: "Test Automation Pro",
      rating: 4.7,
      studentCount: 380,
      description: "Automate VLSI testing and verification processes using Python scripting and industry-standard methodologies.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },

    // Cybersecurity (5 courses)
    {
      id: 27,
      title: "CEH (Certified Ethical Hacking) Prep",
      instructor: "Ethical Hacker Pro",
      rating: 4.9,
      studentCount: 2100,
      description: "Comprehensive preparation for Certified Ethical Hacker certification with hands-on labs and real-world scenarios.",
      price: "xxxx",
      duration: "8 weeks",
      level: "Beginner",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 28,
      title: "Bug Bounty & Web App Security",
      instructor: "Security Researcher",
      rating: 4.8,
      studentCount: 1450,
      description: "Learn bug bounty hunting techniques and web application security testing methodologies for ethical hacking.",
      price: "xxxx",
      duration: "10 weeks",
      level: "Intermediate",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 29,
      title: "Network Security Essentials",
      instructor: "Network Security Expert",
      rating: 4.7,
      studentCount: 980,
      description: "Master network security fundamentals including firewalls, VPNs, intrusion detection, and security protocols.",
      price: "xxxx",
      duration: "12 weeks",
      level: "Intermediate",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 30,
      title: "Linux Hardening",
      instructor: "Linux Security Guru",
      rating: 4.6,
      studentCount: 720,
      description: "Secure Linux systems through hardening techniques, access controls, and security best practices.",
      price: "xxxx",
      duration: "8 weeks",
      level: "Beginner",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    },
    {
      id: 31,
      title: "Digital Forensics Basics",
      instructor: "Forensics Investigator",
      rating: 4.8,
      studentCount: 580,
      description: "Learn digital forensics fundamentals including evidence collection, analysis, and reporting for cybercrime investigation.",
      price: "xxxx",
      duration: "14 weeks",
      level: "Advanced",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      comingSoon: true
    }
  ];

  const categories = ['All', 'AI / ML / Data Science', 'Embedded Systems & IoT', 'Full Stack & Web Development', 'Robotics & Mechatronics', 'VLSI & Chip Design', 'Cybersecurity'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const pricingOptions = ['All', 'Free', 'Paid'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
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
                Coming Soon
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Explore Our{' '}
              <span className="bg-gradient-to-r from-light-blue-300 to-light-blue-500 bg-clip-text text-transparent">
                Upcoming Courses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Get ready for comprehensive courses designed by industry experts. Be the first to know when they launch!
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
                placeholder="Search upcoming courses..."
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
                <option value="All">All Categories</option>
                <option value="AI / ML / Data Science">AI / ML / Data Science</option>
                <option value="Embedded Systems & IoT">Embedded Systems & IoT</option>
                <option value="Full Stack & Web Development">Full Stack & Web Development</option>
                <option value="Robotics & Mechatronics">Robotics & Mechatronics</option>
                <option value="VLSI & Chip Design">VLSI & Chip Design</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-6 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-light-blue-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300 font-medium"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
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
              Showing <span className="text-dark-blue-600 font-semibold">{filteredCourses.length}</span> of <span className="text-dark-blue-600 font-semibold">{courses.length}</span> upcoming courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id}
                className="group hover:transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border-0 bg-white overflow-hidden relative"
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
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      Coming Soon
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-dark-blue-900 mb-2 group-hover:text-light-blue-600 transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-center pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-dark-blue-600">
                      ₹{course.price}
                    </div>
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
