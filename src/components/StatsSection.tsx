import React, { useEffect, useRef, useState } from "react";

interface StatItem {
  id: number;
  label: string;
  value: number;
}

const stats: StatItem[] = [
  { id: 1, label: "Students Trained", value: 150 },
  { id: 2, label: "Final Year Projects Guided", value: 45 },
  { id: 3, label: "Students Guided for Hackathons", value: 7 },
  { id: 4, label: "Programs Conducted", value: 15 },
];

const Counter: React.FC<{ target: number; start: boolean }> = ({ target, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(startValue));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return <span>{count}</span>;
};

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-24">
          Our Impact in Education
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-blue-200/9 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-4xl font-bold text-blue-700">
                <Counter target={item.value} start={visible} />+
              </h3>
              <p className="mt-2 text-sm font-bold opacity-90 text-black">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;