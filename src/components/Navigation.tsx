import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const NavigationContainer = styled.div`
  position: fixed;
  bottom: ${theme.spacing[32]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: ${theme.spacing[24]};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  padding: ${theme.spacing[16]} ${theme.spacing[24]};
  box-shadow: ${theme.shadows.lg};
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.sm}) {
    bottom: ${theme.spacing[16]};
    padding: ${theme.spacing[12]} ${theme.spacing[16]};
    gap: ${theme.spacing[16]};
  }
`;

const NavButton = styled(motion.button) <{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[12]} ${theme.spacing[20]};
  background: ${({ disabled }) => disabled ? theme.colors.secondary : theme.colors.primary};
  color: ${({ disabled }) => disabled ? theme.colors.textSecondary : 'white'};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all ${theme.transitions.fast};
  min-width: 120px;

  &:hover:not(:disabled) {
    background: ${theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    background: ${theme.colors.primaryActive};
    transform: translateY(0);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: 80px;
    padding: ${theme.spacing[10]} ${theme.spacing[16]};
    font-size: ${theme.fontSizes.base};
  }
`;

const SlideCounter = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.text};
  min-width: 80px;
  justify-content: center;

  .current {
    color: ${theme.colors.primary};
    font-weight: ${theme.fontWeights.bold};
  }

  .separator {
    color: ${theme.colors.textSecondary};
  }

  .total {
    color: ${theme.colors.textSecondary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.base};
    min-width: 60px;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  gap: ${theme.spacing[6]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const Indicator = styled(motion.div, { shouldForwardProp: (prop) => prop !== 'isActive' }) <{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? theme.colors.primary : theme.colors.border};
  cursor: pointer;
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${({ isActive }) => isActive ? theme.colors.primary : theme.colors.primaryHover};
    transform: scale(1.2);
  }
`;

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
  isAnimating: boolean;
  onGoToSlide?: (slideIndex: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isAnimating,
  onGoToSlide
}) => {
  const handleIndicatorClick = (slideIndex: number) => {
    if (onGoToSlide && !isAnimating) {
      onGoToSlide(slideIndex);
    }
  };

  return (
    <NavigationContainer>
      <NavButton
        disabled={!canGoPrevious || isAnimating}
        onClick={onPrevious}
        whileHover={canGoPrevious && !isAnimating ? { scale: 1.02 } : {}}
        whileTap={canGoPrevious && !isAnimating ? { scale: 0.98 } : {}}
      >
        ← Previous
      </NavButton>

      <SlideIndicators>
        {Array.from({ length: Math.min(totalSlides, 10) }, (_, index) => {
          const slideIndex = index;
          return (
            <Indicator
              key={slideIndex}
              isActive={slideIndex === currentSlide - 1}
              onClick={() => handleIndicatorClick(slideIndex)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          );
        })}
        {totalSlides > 10 && (
          <span style={{ color: theme.colors.textSecondary, fontSize: theme.fontSizes.sm }}>
            ...
          </span>
        )}
      </SlideIndicators>

      <SlideCounter>
        <span className="current">{currentSlide}</span>
        <span className="separator">/</span>
        <span className="total">{totalSlides}</span>
      </SlideCounter>

      <NavButton
        disabled={!canGoNext || isAnimating}
        onClick={onNext}
        whileHover={canGoNext && !isAnimating ? { scale: 1.02 } : {}}
        whileTap={canGoNext && !isAnimating ? { scale: 0.98 } : {}}
      >
        Next →
      </NavButton>
    </NavigationContainer>
  );
};

export default Navigation;
