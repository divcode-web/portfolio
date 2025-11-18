import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const animationFrameRef = useRef<number>();
  const pauseTimeoutRef = useRef<number>();

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Outstanding frontend development work. The user interface is intuitive and the code is clean and maintainable.',
      rating: 5,
      type: 'frontend'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'Delivered a complex Web3 application ahead of schedule. Excellent understanding of blockchain integration.',
      rating: 5,
      type: 'web3'
    },
    {
      name: 'Emily Davis',
      role: 'Design Lead',
      company: 'Creative Agency',
      content: 'Transformed our design concepts into pixel-perfect implementations. Great attention to detail and responsiveness.',
      rating: 5,
      type: 'frontend'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Blockchain Developer',
      company: 'DeFi Protocol',
      content: 'Solid smart contract integration and security best practices. Highly recommended for Web3 projects.',
      rating: 5,
      type: 'web3'
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      company: 'E-commerce Inc',
      content: 'Built a scalable frontend that handles high traffic seamlessly. Professional and reliable.',
      rating: 5,
      type: 'frontend'
    }
  ];

  // Triple the testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const CARD_WIDTH = 408; // 400px card + 8px gap
  const TOTAL_WIDTH = CARD_WIDTH * testimonials.length;

  // Continuous smooth scroll
  useEffect(() => {
    const scroll = () => {
      if (!isPaused) {
        setScrollOffset(prev => {
          const newOffset = prev + 0.5; // Smooth increment
          // Reset seamlessly when we've scrolled one full set
          return newOffset >= TOTAL_WIDTH ? newOffset - TOTAL_WIDTH : newOffset;
        });
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused, TOTAL_WIDTH]);

  const handlePause = (paused: boolean) => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setIsPaused(paused);
  };

  const navigate = (direction: 'forward' | 'backward') => {
    handlePause(true);
    
    setScrollOffset(prev => {
      const moveAmount = CARD_WIDTH;
      let newOffset;
      
      if (direction === 'forward') {
        newOffset = prev + moveAmount;
        if (newOffset >= TOTAL_WIDTH) {
          newOffset = newOffset - TOTAL_WIDTH;
        }
      } else {
        newOffset = prev - moveAmount;
        if (newOffset < 0) {
          newOffset = TOTAL_WIDTH + newOffset;
        }
      }
      
      return newOffset;
    });

    // Resume after animation
    pauseTimeoutRef.current = window.setTimeout(() => {
      handlePause(false);
    }, 800);
  };

  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="relative">
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8"
              onMouseEnter={() => handlePause(true)}
              onMouseLeave={() => handlePause(false)}
              style={{
                transform: `translateX(-${scrollOffset}px)`,
                transition: isPaused && pauseTimeoutRef.current ? 'transform 0.6s ease-in-out' : 'none',
                willChange: 'transform'
              }}
            >
              {allTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 relative hover:shadow-xl transition-shadow flex-shrink-0"
                  style={{
                    width: '400px',
                    transform: 'skewX(-2deg)',
                    margin: '0 4px'
                  }}
                >
                  <div className="transform skew-x-2">
                    <Quote size={32} className="text-blue-600 dark:text-blue-400 mb-4 opacity-20" />
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <div className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                        {testimonial.type === 'frontend' ? 'Frontend' : 'Web3'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => navigate('backward')}
              onMouseEnter={() => handlePause(true)}
              onMouseLeave={() => handlePause(false)}
              className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => navigate('forward')}
              onMouseEnter={() => handlePause(true)}
              onMouseLeave={() => handlePause(false)}
              className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}