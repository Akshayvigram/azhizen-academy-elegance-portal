import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideType = {
  type: 'course' | 'cohort' | 'Academy';
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  video?: string;
  ctaText: string;
  ctaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
};

const slides: SlideType[] = [
  {
    type: 'Academy',
    title: 'Azhizen Academy',
    subtitle: 'Join Our Next Live Batch',
    description: 'Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured, mentor-led environment.',
    video: './src/assets/ac_video.mp4',
    ctaText: 'Join Cohort',
    ctaUrl: '#contact',
    secondaryCtaText: 'Learn More',
    secondaryCtaUrl: '/cohort-program'
  },
  {
    type: 'cohort',
    title: 'Cohort Program',
    subtitle: 'Join Our Next Live Batch',
    description: 'Experience immersive learning with our guided cohort programs. Collaborate, interact, and grow with peers in a structured, mentor-led environment.',
    image: '/assets/cohort-banner.jpg',
    video: './src/assets/cohert_video.mp4',
    ctaText: 'Join Cohort',
    ctaUrl: '#contact',
    secondaryCtaText: 'Learn More',
    secondaryCtaUrl: '/cohort-program'
  },
  {
    type: 'course',
    title: 'Premium Courses',
    subtitle: 'Self-paced Online Learning',
    description: 'Master in-demand skills at your pace. Our expertly crafted courses help you advance confidently, anytime, anywhere.',
    image: '/assets/course-banner.jpg',
    video: './src/assets/course_video.mp4',
    ctaText: 'Browse Courses',
    ctaUrl: '/courses'
  }
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
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    }
  };

  return (
    <section
      id="hero"
      className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out transform ${
              index === active
                ? 'translate-x-0 z-20'
                : index < active
                ? '-translate-x-full z-10'
                : 'translate-x-full z-10'
            }`}
          >
            {slide.video && (
              <video
                src={slide.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                draggable={false}
                aria-hidden="true"
              />
            )}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto px-6 py-10">
<h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-white text-outline-white">
  Azhizen <span className="text-cream-100">Academy</span>
</h1>





        <h2
          className="text-3xl md:text-5xl font-semibold mb-2 text-gold-400 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {slides[active].title}
        </h2>
        {slides[active].subtitle && (
          <p
            className="text-lg md:text-2xl text-cream-200 mb-4 animate-fade-in-up"
            style={{ animationDelay: '0.15s' }}
          >
            {slides[active].subtitle}
          </p>
        )}
        <p
          className="text-md md:text-xl text-cream-200 mb-8 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {slides[active].description}
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href={slides[active].ctaUrl}
            className="bg-gold-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 luxury-shadow"
          >
            {slides[active].ctaText}
          </a>
          {slides[active].secondaryCtaText && slides[active].secondaryCtaUrl && (
            <a
              href={slides[active].secondaryCtaUrl}
              className="bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {slides[active].secondaryCtaText}
            </a>
          )}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-2 rounded-full transition"
        onClick={prevSlide}
      >
        <ChevronLeft size={36} className="text-white" />
      </button>
      <button
        aria-label="Next"
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/80 p-2 rounded-full transition"
        onClick={nextSlide}
      >
        <ChevronRight size={36} className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              i === active ? 'bg-gold-400 scale-125' : 'bg-cream-400/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => handleNav(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;