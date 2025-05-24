
import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      title: "Excellence",
      description: "We pursue the highest standards in education, continuously raising the bar for academic and professional achievement.",
      icon: "🎯"
    },
    {
      title: "Innovation",
      description: "We embrace cutting-edge methodologies and technologies to create dynamic learning experiences.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards and foster honest, transparent relationships with all stakeholders.",
      icon: "🛡️"
    },
    {
      title: "Empowerment",
      description: "We believe in unlocking human potential and providing tools for personal and professional growth.",
      icon: "🚀"
    }
  ];

  return (
    <section id="values" className="section-padding bg-gradient-to-b from-cream-100 to-cream-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-royal-900">
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
              className="scroll-reveal bg-white p-8 rounded-2xl luxury-shadow hover:transform hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-royal-900">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
