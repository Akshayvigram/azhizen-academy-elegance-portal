
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, CheckCircle, PlayCircle, BookOpen, Award } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  
  const courses = [
    // AI / ML / Data Science
    {
      id: 1,
      title: "Generative AI with Python - Prompt Engineering",
      instructor: "Dr. Rajesh Kumar",
      rating: 4.8,
      studentCount: 1250,
      description: "Applied Machine Learning with ChatGPT, LLM Integrations (LangChain / RAG) - Data Analysis (Pandas, NumPy, Matplotlib)",
      longDescription: "Master the art of Generative AI and prompt engineering with our comprehensive course. Learn to build practical applications using Python, ChatGPT, and various LLM integrations including LangChain and RAG systems.",
      price: 12999,
      duration: "12 weeks",
      level: "Intermediate",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "Introduction to Generative AI",
        "Python for AI Development",
        "ChatGPT API Integration",
        "Prompt Engineering Techniques",
        "LangChain Framework",
        "RAG Implementation",
        "Data Analysis with Pandas & NumPy",
        "Visualization with Matplotlib"
      ]
    },
    {
      id: 7,
      title: "AI for Edge Devices / TinyML",
      instructor: "Dr. Ankit Sharma",
      rating: 4.6,
      studentCount: 480,
      description: "TensorFlow Lite, Edge AI deployment, Microcontroller ML, Optimization techniques for resource-constrained devices",
      longDescription: "Learn to deploy AI models on edge devices and microcontrollers. Master TinyML techniques for resource-constrained environments.",
      price: 11999,
      duration: "10 weeks",
      level: "Advanced",
      category: "AI / ML / Data Science",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "TinyML Fundamentals",
        "TensorFlow Lite",
        "Model Optimization",
        "Microcontroller Programming",
        "Edge AI Deployment",
        "Power Management",
        "Real-time Processing",
        "IoT Integration"
      ]
    },
    // Embedded Systems & IoT
    {
      id: 2,
      title: "Embedded C & RTOS for Beginners - IoT with ESP32",
      instructor: "Prof. Priya Sharma",
      rating: 4.9,
      studentCount: 980,
      description: "Cloud (Firebase, Azure) - LoRa, MQTT, Edge Node Communication - Core-engineering focused, job-market ready",
      longDescription: "Dive deep into embedded systems programming with C and Real-Time Operating Systems. Learn IoT development with ESP32, cloud integration, and industry-standard protocols.",
      price: 15999,
      duration: "16 weeks",
      level: "Beginner",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "Embedded C Fundamentals",
        "ESP32 Architecture",
        "RTOS Concepts",
        "IoT Protocols (MQTT, LoRa)",
        "Cloud Integration (Firebase, Azure)",
        "Sensor Interfacing",
        "Wireless Communication",
        "Industrial IoT Projects"
      ]
    },
    {
      id: 8,
      title: "Industrial Automation with PLC & SCADA",
      instructor: "Eng. Rohit Verma",
      rating: 4.7,
      studentCount: 620,
      description: "Programmable Logic Controllers, SCADA systems, Industrial communication protocols, Factory automation",
      longDescription: "Master industrial automation with PLC and SCADA systems. Learn to design and implement factory automation solutions.",
      price: 14999,
      duration: "14 weeks",
      level: "Intermediate",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "PLC Fundamentals",
        "Ladder Logic Programming",
        "SCADA Systems",
        "HMI Design",
        "Industrial Networks",
        "Process Control",
        "Safety Systems",
        "Maintenance Strategies"
      ]
    },
    {
      id: 9,
      title: "IoT Security & OTA Updates",
      instructor: "Dr. Kavya Singh",
      rating: 4.5,
      studentCount: 390,
      description: "IoT device security, Over-the-Air updates, Secure communication protocols, Device authentication",
      longDescription: "Learn to secure IoT devices and implement Over-the-Air update mechanisms. Master security protocols and device authentication.",
      price: 13999,
      duration: "12 weeks",
      level: "Advanced",
      category: "Embedded Systems & IoT",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "IoT Security Fundamentals",
        "Cryptography for IoT",
        "Secure Communication",
        "Device Authentication",
        "OTA Update Mechanisms",
        "Vulnerability Assessment",
        "Security Testing",
        "Compliance Standards"
      ]
    },
    // Full Stack & Web Development
    {
      id: 3,
      title: "Full Stack Web Development",
      instructor: "Arjun Menon",
      rating: 4.7,
      studentCount: 750,
      description: "Frontend Dev with React + Tailwind - Next.js with TypeScript - Backend with Node.js + MongoDB - Web3 DApps with Solidity & Hardhat - DevOps for Web Apps (CI/CD, Docker)",
      longDescription: "Become a complete full-stack developer with our comprehensive program covering modern frontend and backend technologies, Web3 development, and DevOps practices.",
      price: 8999,
      duration: "10 weeks",
      level: "Intermediate",
      category: "Full Stack & Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "React & Tailwind CSS",
        "Next.js with TypeScript",
        "Node.js Backend Development",
        "MongoDB Database",
        "Web3 & Blockchain Basics",
        "Solidity Smart Contracts",
        "DevOps with Docker",
        "CI/CD Pipeline Setup"
      ]
    },
    // Robotics & Mechatronics
    {
      id: 4,
      title: "ROS2 with Python / C++ - Arduino + Sensors & Actuators",
      instructor: "Dr. Sneha Patel",
      rating: 4.6,
      studentCount: 650,
      description: "Projects - Raspberry Pi Automation - Vision Navigation (OpenCV) - AI-powered Robotics (YOLO, TensorFlow Lite)",
      longDescription: "Learn robotics programming with ROS2, combining Python and C++ for advanced robotic systems. Perfect for students and professionals working on innovation projects.",
      price: 11999,
      duration: "14 weeks",
      level: "Intermediate",
      category: "Robotics & Mechatronics",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "ROS2 Fundamentals",
        "Python & C++ for Robotics",
        "Arduino Integration",
        "Sensor & Actuator Control",
        "Computer Vision with OpenCV",
        "AI in Robotics (YOLO, TensorFlow)",
        "Raspberry Pi Projects",
        "Autonomous Navigation"
      ]
    },
    // VLSI & Chip Design
    {
      id: 5,
      title: "VHDL/Verilog for Beginners - ASIC Flow using Synopsys Tools",
      instructor: "Vikram Singh",
      rating: 4.5,
      studentCount: 580,
      description: "FPGA-based System Design - Cadence Design Flow - Python for VLSI Test Automation. Aligned with India Semiconductor Mission",
      longDescription: "Master VLSI design with industry-standard tools and methodologies. This course is aligned with India's Semiconductor Mission and prepares you for chip design careers.",
      price: 13999,
      duration: "15 weeks",
      level: "Advanced",
      category: "VLSI & Chip Design",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "VHDL & Verilog Basics",
        "Digital Design Principles",
        "FPGA Development",
        "Synopsys Tool Suite",
        "ASIC Design Flow",
        "Cadence Design Environment",
        "Python for VLSI Automation",
        "Semiconductor Industry Practices"
      ]
    },
    // Cybersecurity
    {
      id: 6,
      title: "CEH (Certified Ethical Hacking) Prep - Bug Bounty & Web Security",
      instructor: "Ravi Kumar",
      rating: 4.8,
      studentCount: 2100,
      description: "Penetration Testing - Network Security Essentials - Linux Hardening - Digital Forensics Basics. High-demand across government & private sectors",
      longDescription: "Prepare for the Certified Ethical Hacker certification while learning practical cybersecurity skills. This course covers penetration testing, bug bounty hunting, and digital forensics.",
      price: 0,
      duration: "8 weeks",
      level: "Beginner",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      curriculum: [
        "Ethical Hacking Fundamentals",
        "Network Security Basics",
        "Web Application Security",
        "Penetration Testing Tools",
        "Linux Security & Hardening",
        "Bug Bounty Hunting",
        "Digital Forensics",
        "Security Report Writing"
      ]
    }
  ];

  const course = courses.find(c => c.id === parseInt(id || '1'));

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-96">
          <p className="text-xl text-gray-600">Course not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Course Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-light-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-light-blue-500/20 text-light-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                {course.longDescription}
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.studentCount} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">
                  {course.price === 0 ? (
                    <span className="text-emerald-400">FREE</span>
                  ) : (
                    <span>₹{course.price.toLocaleString()}</span>
                  )}
                </div>
                <Button size="lg">
                  Enroll Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Button size="lg" className="rounded-full w-16 h-16 p-0">
                  <PlayCircle size={32} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Course Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.curriculum.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About This Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {course.longDescription}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-semibold">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students:</span>
                    <span className="font-semibold">{course.studentCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Lifetime access to course materials</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Direct instructor support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Hands-on projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Job placement assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="sticky top-6">
                <Button size="lg" className="w-full">
                  Enroll Now - {course.price === 0 ? 'FREE' : `₹${course.price.toLocaleString()}`}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
