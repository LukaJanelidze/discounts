import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'; // Ensure this CSS file is properly linked

type CarouselProps = {
  images: { src: string; href: string }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInnerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  useEffect(() => {
    startTimer(); // Start the timer on mount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setStartX(e.clientX);
      setIsDragging(true);
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    const diffX = e.clientX - startX;
    const newTransform = -currentIndex * carouselRef.current.clientWidth + diffX;
    carouselInnerRef.current!.style.transform = `translateX(${newTransform}px)`;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;

    setIsDragging(false);
    carouselRef.current.style.cursor = 'grab';
    const diffX = e.clientX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    carouselInnerRef.current!.style.transform = `translateX(-${currentIndex * carouselRef.current.clientWidth}px)`;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (carouselRef.current) {
      setStartX(e.touches[0].clientX);
      setIsDragging(true);
      carouselRef.current.style.cursor = 'grabbing';
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;

    const diffX = e.touches[0].clientX - startX;
    const newTransform = -currentIndex * carouselRef.current.clientWidth + diffX;
    carouselInnerRef.current!.style.transform = `translateX(${newTransform}px)`;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;

    setIsDragging(false);
    carouselRef.current.style.cursor = 'grab';
    const diffX = e.changedTouches[0].clientX - startX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    carouselInnerRef.current!.style.transform = `translateX(-${currentIndex * carouselRef.current.clientWidth}px)`;
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="carousel-inner"
        ref={carouselInnerRef}
        style={{
          display: 'flex',
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (carouselRef.current?.clientWidth || 0)}px)`,
        }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.href}
            target="_blank"
            rel="noopener noreferrer"
            className="carousel-slide"
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="carousel-arrow carousel-arrow-left"
      >
        <span className='arrow-left'>&lt;</span>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-arrow carousel-arrow-right"
      >
        <span className='arrow-right'>&gt;</span>
      </button>

      {/* Bottom buttons */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const images = [
    { src: '/imgs/carouselPic.jpg', href: 'https://example.com/page1' },
    { src: '/imgs/carouselPic.jpg', href: 'https://example.com/page2' },
    { src: '/imgs/carouselPic.jpg', href: 'https://example.com/page3' },
    { src: '/imgs/carouselPic.jpg', href: 'https://example.com/page4' },
    { src: '/imgs/carouselPic.jpg', href: 'https://example.com/page5' },
  ];

  return (
    <div className="carousel-container">
      <Carousel images={images} />
    </div>
  );
};

export default App;
