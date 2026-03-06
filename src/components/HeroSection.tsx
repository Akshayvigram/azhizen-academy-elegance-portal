// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// type SlideType = {
//   type: 'course' | 'cohort' | 'Academy';
//   title: string;
//   subtitle?: string;
//   description: string;
//   image?: string;
//   video?: string;
//   ctaText: string;
//   ctaUrl: string;
//   secondaryCtaText?: string;
//   secondaryCtaUrl?: string;
// };

// const slides: SlideType[] = [
//   {
//     type: 'Academy',
//     title: 'Azhizen Academy',
//     subtitle: 'Join Our Next Live Batch',
//     description: 'Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured, mentor-led environment.',
//     video: './src/assets/ac_video.mp4',
//     ctaText: 'Join Cohort',
//     ctaUrl: '#contact',
//     secondaryCtaText: 'Learn More',
//     secondaryCtaUrl: '/cohort-program'
//   },
//   {
//     type: 'cohort',
//     title: 'Cohort Program',
//     subtitle: 'Join Our Next Live Batch',
//     description: 'Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured, mentor-led environment.',
//     image: '/assets/cohort-banner.jpg',
//     video: './src/assets/cohert_video.mp4',
//     ctaText: 'Join Cohort',
//     ctaUrl: '#contact',
//     secondaryCtaText: 'Learn More',
//     secondaryCtaUrl: '/cohort-program'
//   },
//   {
//     type: 'course',
//     title: 'Premium Courses',
//     subtitle: 'Self-paced Online Learning',
//     description: 'Master in-demand skills at your pace. Our expertly crafted courses help you advance confidently, anytime, anywhere.',
//     image: '/assets/course-banner.jpg',
//     video: './src/assets/course_video.mp4',
//     ctaText: 'Browse Courses',
//     ctaUrl: '/courses'
//   }
// ];

// const SLIDE_INTERVAL = 6500;

// const HeroSection = () => {
//   const [active, setActive] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const nextSlide = () => setActive((a) => (a + 1) % slides.length);
//   const prevSlide = () => setActive((a) => (a - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//   }, []);

//   const handleNav = (idx: number) => {
//     setActive(idx);
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
//     >
//       {/* Slides */}
//       <div className="absolute inset-0 w-full h-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
//               index === active
//                 ? 'translate-x-0 z-20'
//                 : index < active
//                 ? '-translate-x-full z-10'
//                 : 'translate-x-full z-10'
//             }`}
//           >
//             {slide.video && (
//               <video
//                 src={slide.video}
//                 className="w-full h-full object-cover"
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 draggable={false}
//                 aria-hidden="true"
//               />
//             )}
//             <div className="absolute inset-0 bg-black/55" />
//           </div>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-30 flex flex-col items-center text-center w-full max-w-4xl mx-auto px-5 sm:px-8 py-6">

//         {/* Academy Title */}
//         <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold mb-3 text-white leading-tight text-outline-white">
//           Azhizen <span className="text-cream-100">Academy</span>
//         </h1>

//         {/* Slide Title */}
//         <h2
//           className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 text-gold-400 animate-fade-in-up leading-snug"
//           style={{ animationDelay: '0.1s' }}
//         >
//           {slides[active].title}
//         </h2>

//         {/* Subtitle */}
//         {slides[active].subtitle && (
//           <p
//             className="text-base sm:text-lg md:text-2xl text-cream-200 mb-3 animate-fade-in-up"
//             style={{ animationDelay: '0.15s' }}
//           >
//             {slides[active].subtitle}
//           </p>
//         )}

//         {/* Description */}
//         <p
//           className="text-sm sm:text-base md:text-xl text-cream-200 mb-7 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto animate-fade-in-up leading-relaxed text-center px-2 sm:px-0"
//           style={{ animationDelay: '0.2s' }}
//         >
//           {slides[active].description}
//         </p>

//         {/* CTA Buttons */}
//         <div
//           className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full animate-fade-in-up"
//           style={{ animationDelay: '0.3s' }}
//         >
//           <a
//             href={slides[active].ctaUrl}
//             className="w-full sm:w-auto bg-gold-400 text-black px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow text-center"
//           >
//             {slides[active].ctaText}
//           </a>
//           {slides[active].secondaryCtaText && slides[active].secondaryCtaUrl && (
//             <a
//               href={slides[active].secondaryCtaUrl}
//               className="w-full sm:w-auto bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
//             >
//               {slides[active].secondaryCtaText}
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Arrows */}
//       <button
//         aria-label="Previous"
//         className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-1.5 sm:p-2 rounded-full transition"
//         onClick={prevSlide}
//       >
//         <ChevronLeft size={28} className="text-white sm:hidden" />
//         <ChevronLeft size={36} className="text-white hidden sm:block" />
//       </button>
//       <button
//         aria-label="Next"
//         className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-1.5 sm:p-2 rounded-full transition"
//         onClick={nextSlide}
//       >
//         <ChevronRight size={28} className="text-white sm:hidden" />
//         <ChevronRight size={36} className="text-white hidden sm:block" />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-30">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
//               i === active ? 'bg-gold-400 scale-125' : 'bg-cream-400/30'
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//             onClick={() => handleNav(i)}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import academyVideo from "/videos/ac_video.mp4";
import cohortVideo from "/videos/cohert_video.mp4";
import courseVideo from "/videos/course_video.mp4";

type SlideType = {
  type: "course" | "cohort" | "Academy";
  title: string;
  subtitle?: string;
  description: string;
  video?: string;
  ctaText: string;
  ctaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
};

const slides: SlideType[] = [
  {
    type: "Academy",
    title: "Azhizen Academy",
    subtitle: "Join Our Next Live Batch",
    description:
      "Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured mentor-led environment.",
    video: academyVideo,
    ctaText: "Join Cohort",
    ctaUrl: "#contact",
    secondaryCtaText: "Learn More",
    secondaryCtaUrl: "/cohort-program",
  },
  {
    type: "cohort",
    title: "Cohort Program",
    subtitle: "Join Our Next Live Batch",
    description:
      "Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured mentor-led environment.",
    video: cohortVideo,
    ctaText: "Join Cohort",
    ctaUrl: "#contact",
    secondaryCtaText: "Learn More",
    secondaryCtaUrl: "/cohort-program",
  },
  {
    type: "course",
    title: "Premium Courses",
    subtitle: "Self-paced Online Learning",
    description:
      "Master in-demand skills at your pace. Our expertly crafted courses help you advance confidently anytime, anywhere.",
    video: courseVideo,
    ctaText: "Browse Courses",
    ctaUrl: "/courses",
  },
];

const SLIDE_INTERVAL = 6500;

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => setActive((a) => (a + 1) % slides.length);
  const prevSlide = () => setActive((a) => (a - 1 + slides.length) % slides.length);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleNav = (idx: number) => {
    setActive(idx);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <video
            key={index}
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100 z-10" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/55 z-20" />
      </div>

      {/* CONTENT */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 h-screen flex items-center">

        <div className="w-full lg:w-2/3 text-center lg:text-left">

          {/* MAIN TITLE */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Azhizen <span className="text-cream-100">Academy</span>
          </h1>

          {/* SLIDE TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gold-400 mb-3">
            {slides[active].title}
          </h2>

          {/* SUBTITLE */}
          {slides[active].subtitle && (
            <p className="text-lg md:text-xl text-cream-200 mb-4">
              {slides[active].subtitle}
            </p>
          )}

          {/* DESCRIPTION */}
          <p className="text-base md:text-lg text-cream-200 max-w-2xl leading-relaxed mb-8">
            {slides[active].description}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href={slides[active].ctaUrl}
              className="bg-gold-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105 luxury-shadow"
            >
              {slides[active].ctaText}
            </a>

            {slides[active].secondaryCtaText && (
              <a
                href={slides[active].secondaryCtaUrl}
                className="border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gold-400 hover:text-black transition"
              >
                {slides[active].secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ARROWS */}
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">

        {/* Previous */}
        <button
          aria-label="Previous"
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft size={22} className="text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNav(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active
                  ? "w-8 bg-gold-400"
                  : "w-2.5 bg-cream-400/30 hover:bg-cream-400/50"
                }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          aria-label="Next"
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight size={22} className="text-white" />
        </button>

      </div>
    </section>
  );
};

export default HeroSection;