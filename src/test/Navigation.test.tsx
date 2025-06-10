import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  const defaultProps = {
    currentSlide: 1,
    totalSlides: 5,
    onPrevious: vi.fn(),
    onNext: vi.fn(),
    canGoPrevious: true,
    canGoNext: true,
    isAnimating: false,
  };

  it('renders navigation buttons and slide counter', () => {
    render(<Navigation {...defaultProps} />);

    expect(screen.getByText('← Previous')).toBeInTheDocument();
    expect(screen.getByText('Next →')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls onPrevious when previous button is clicked', async () => {
    const user = userEvent.setup();
    const onPrevious = vi.fn();
    render(<Navigation {...defaultProps} onPrevious={onPrevious} />);

    await user.click(screen.getByText('← Previous'));
    expect(onPrevious).toHaveBeenCalledTimes(1);
  });

  it('calls onNext when next button is clicked', async () => {
    const user = userEvent.setup();
    const onNext = vi.fn();
    render(<Navigation {...defaultProps} onNext={onNext} />);

    await user.click(screen.getByText('Next →'));
    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('disables previous button when canGoPrevious is false', () => {
    render(<Navigation {...defaultProps} canGoPrevious={false} />);

    const prevButton = screen.getByText('← Previous');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button when canGoNext is false', () => {
    render(<Navigation {...defaultProps} canGoNext={false} />);

    const nextButton = screen.getByText('Next →');
    expect(nextButton).toBeDisabled();
  });

  it('disables buttons when animating', () => {
    render(<Navigation {...defaultProps} isAnimating={true} />);

    const prevButton = screen.getByText('← Previous');
    const nextButton = screen.getByText('Next →');

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });
});
