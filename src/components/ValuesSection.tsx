
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in education, continuously raising the bar for academic and professional achievement.",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge methodologies and technologies to create dynamic learning experiences.",
      icon: "💡",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards and foster honest, transparent relationships with all stakeholders.",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Empowerment",
      description: "We believe in unlocking human potential and providing tools for personal and professional growth.",
      icon: "🚀",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="values" className="section-padding bg-gradient-to-b from-cream-100 to-cream-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-[#5F22B6] leading-[1.2] overflow-visible">
          Core Values
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our fundamental principles guide every decision and shape the culture of excellence 
            that defines Azhizen Academy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="scroll-reveal bg-white p-8 rounded-2xl luxury-shadow hover:transform hover:scale-105 transition-all duration-300 group relative overflow-hidden border-2 border-transparent hover:border-gold-400"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Background Image on Hover */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${value.image})` }}
              />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-royal-900 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
