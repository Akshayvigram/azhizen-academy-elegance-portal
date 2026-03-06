import React, { useState } from "react";
import { IoImages } from "react-icons/io5";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    Domain: string,
    college: string,
    message: string;
    images?: string[];
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "DHEENATHAYALAN M S ",
        role: "ECE",
        Domain: "AI powered web development ",
        college: "K.S.R.College of Engineering ",
        message:
            "This is my first intership , so I have learned more about the AI and by using AI to create the websites.",
        // images: [],
    },
    {
        id: 2,
        name: "DEEPIKA B",
        role: "IT",
        Domain: "Full Stack Development",
        college: "Nandha College of Technology",
        message:
            "Yes this experience was new to learn to build websites without coding just with prompts was very helpful to learn how to prompt learned about git hub how to create repository over all a good experience to take internship in AZHIZEN solutions.",
        // images: [],
    },
    {
        id: 3,
        name: "Joel Raj L",
        role: "EEE",
        Domain: "Embedded system and IoT",
        college: "KPR Institute of Engineering and Technology",
        message:
            "My first project for done in this period of my internship and I am gain some confidence through learning some new things.",
    },
    {
        id: 4,
        name: "Arun kumar A",
        role: "ECE",
        Domain: "Internet of Things",
        college: "KSR Institute for Engineering and Technology",
        message:
            "Company members are very supportive and active while attending the sessions and they also help us in various aspects.",
    },
    {
        id: 5,
        name: "Diwakar K",
        role: "AIML",
        Domain: "Robotics and Automation",
        college: "Sona college of technology",
        message:
            "Excellent and I hope this will useful for my future...",
    },
];

const TestimonialsSection: React.FC = () => {
    const [activeImages, setActiveImages] = useState<string[] | null>(null);

    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
            <div className="scroll-mt-32 max-w-7xl mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    What Our Students Say
                </h2>

                {/* Sliding Container */}
                
                <div className="relative overflow-hidden">

                    {/* Fade edges */}
                    <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    <div className="marquee flex w-max gap-8 md:gap-12">

                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="
        relative
        flex-shrink-0
        w-[85vw] sm:w-[70vw] md:w-[520px]
        h-auto md:h-[340px]

        bg-white/90 backdrop-blur-lg
        rounded-3xl
        border border-gray-200

        p-6 sm:p-8 md:p-12
        flex flex-col justify-between

        
        transition-all duration-500

        hover:-translate-y-3
        hover:scale-[1.02]">

                                {/* Quote icon background */}
                                <span className="absolute top-6 right-6 text-gray-200 text-6xl font-serif select-none">
                                    ”
                                </span>

                                {/* Message */}
                                <p className="text-base sm:text-lg md:text-[17px] text-gray-700 leading-relaxed overflow-y-auto max-h-[160px] pr-2 custom-scroll">
                                    “{item.message}”
                                </p>

                                {/* User Info */}
                                <div className="mt-6">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                                        {item.name}
                                    </h3>

                                    <p className="text-sm text-blue-600 font-medium mt-1">
                                        {item.Domain}
                                    </p>

                                    <p className="text-sm sm:text-base text-gray-500 mt-1">
                                        {item.role} • {item.college}
                                    </p>
                                </div>

                                {/* Images button */}
                                {item.images && (
                                    <button
                                        onClick={() => setActiveImages(item.images!)}
                                        className="
            absolute
            bottom-4 right-4 md:bottom-6 md:right-6

            bg-gradient-to-r from-blue-500 to-indigo-500
            text-white

            p-3 md:p-4
            rounded-xl

            shadow-lg
            transition-all duration-300

            hover:scale-110
            hover:shadow-xl
            "
                                    >
                                        <IoImages size={20} />
                                    </button>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Popup Gallery */}
            {activeImages && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setActiveImages(null)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                Internship Moments
                            </h3>
                            <button
                                onClick={() => setActiveImages(null)}
                                className="text-gray-600 hover:text-black text-lg"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Scrollable Images */}
                        <div className="p-6 md:p-8 overflow-y-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[160px] md:auto-rows-[200px]">
                                {activeImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`overflow-hidden rounded-2xl ${index % 4 === 0 ? "col-span-2 row-span-2" : ""
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt="testimonial"
                                            loading="lazy"
                                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Animation */}
            <style>
                {`
                    @keyframes marquee {
                      0% { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                                    
                    .marquee {
                      animation: marquee 35s linear infinite;
                      will-change: transform;
                    }
                                    
                    .marquee:hover {
                      animation-play-state: paused;
                    }
                                    
                    @media (max-width: 768px) {
                      .marquee {
                        animation: marquee 45s linear infinite;
                      }
                    }
                      .marquee p::-webkit-scrollbar {
  width: 4px;
}

.marquee p::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
  .custom-scroll::-webkit-scrollbar {
  width: 6px;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background: #cbd5f5;
  border-radius: 10px;
}

.custom-scroll::-webkit-scrollbar-track {
  background: transparent;
}
                `}
            </style>
        </section>
    );
};

export default TestimonialsSection;