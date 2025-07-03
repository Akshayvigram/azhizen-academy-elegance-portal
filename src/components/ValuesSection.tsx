
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in education, continuously raising the bar for academic and professional achievement.",
      icon: "🎯",
      gradient: "from-light-blue-500 to-dark-blue-600"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge methodologies and technologies to create dynamic learning experiences.",
      icon: "💡",
      gradient: "from-dark-blue-500 to-light-blue-500"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards and foster honest, transparent relationships with all stakeholders.",
      icon: "🛡️",
      gradient: "from-light-blue-600 to-dark-blue-700"
    },
    {
      title: "Empowerment",
      description: "We believe in unlocking human potential and providing tools for personal and professional growth.",
      icon: "🚀",
      gradient: "from-dark-blue-600 to-light-blue-600"
    }
  ];

  return (
    <section id="values" className="section-padding bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-light-blue-100 to-dark-blue-100 text-dark-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-light-blue-200">
              Core Values
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-dark-blue-900 leading-[1.2]">
            Our Guiding
            <span className="bg-gradient-to-r from-light-blue-600 to-dark-blue-800 bg-clip-text text-transparent"> Principles</span>
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
              className="scroll-reveal group relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative z-10">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-dark-blue-900 group-hover:text-dark-blue-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
                
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
