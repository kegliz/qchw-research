import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';
import { slideData } from '../data/slides';
import Slide from './Slide.tsx';
import Navigation from './Navigation.tsx';
import ProgressBar from './ProgressBar.tsx';
import KeyboardShortcuts from './KeyboardShortcuts.tsx';

const PresentationContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background};
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[32]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing[16]};
  }
`;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9
  })
};

const slideTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

interface PresentationProps {
  initialSlide?: number;
}

const Presentation: React.FC<PresentationProps> = ({ initialSlide = 0 }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = slideData.length;
  const currentSlide = slideData[currentSlideIndex];

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex === currentSlideIndex || isAnimating) return;

    setDirection(slideIndex > currentSlideIndex ? 1 : -1);
    setIsAnimating(true);
    setCurrentSlideIndex(slideIndex);
  }, [currentSlideIndex, isAnimating]);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, totalSlides, goToSlide]);

  const previousSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      goToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, goToSlide]);

  const handleAnimationComplete = useCallback(() => {
    setIsAnimating(false);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isAnimating) return;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          previousSlide();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        default: {
          // Handle number keys for direct slide navigation
          const slideNumber = parseInt(event.key);
          if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= totalSlides) {
            event.preventDefault();
            goToSlide(slideNumber - 1);
          }
          break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating, nextSlide, previousSlide, goToSlide, totalSlides]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isAnimating) return;

      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Ensure the swipe is primarily horizontal and significant enough
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          previousSlide();
        } else {
          nextSlide();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isAnimating, nextSlide, previousSlide]);

  return (
    <PresentationContainer>
      <ProgressBar
        current={currentSlideIndex + 1}
        total={totalSlides}
      />

      <SlideContainer>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlideIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            onAnimationComplete={handleAnimationComplete}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Slide data={currentSlide} />
          </motion.div>
        </AnimatePresence>
      </SlideContainer>

      <Navigation
        currentSlide={currentSlideIndex + 1}
        totalSlides={totalSlides}
        onPrevious={previousSlide}
        onNext={nextSlide}
        canGoPrevious={currentSlideIndex > 0}
        canGoNext={currentSlideIndex < totalSlides - 1}
        isAnimating={isAnimating}
        onGoToSlide={goToSlide}
      />

      <KeyboardShortcuts />
    </PresentationContainer>
  );
};

export default Presentation;
