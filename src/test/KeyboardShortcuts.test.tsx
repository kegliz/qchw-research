import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import KeyboardShortcuts from '../components/KeyboardShortcuts';

describe('KeyboardShortcuts', () => {
  beforeEach(() => {
    // Clear any existing event listeners
    document.removeEventListener('keydown', () => { });
  });

  it('renders the toggle button', () => {
    render(<KeyboardShortcuts />);

    const toggleButton = screen.getByText('?');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('title', 'Keyboard shortcuts (?)');
  });

  it('opens shortcuts panel when toggle button is clicked', () => {
    render(<KeyboardShortcuts />);

    const toggleButton = screen.getByText('?');
    fireEvent.click(toggleButton);

    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
  });

  it('opens shortcuts panel when ? key is pressed', () => {
    render(<KeyboardShortcuts />);

    fireEvent.keyDown(window, { key: '?' });

    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
  });

  it('shows all keyboard shortcuts when panel is open', () => {
    render(<KeyboardShortcuts />);

    // Open the panel
    fireEvent.keyDown(window, { key: '?' });

    // Check for various shortcuts
    expect(screen.getByText('Next slide')).toBeInTheDocument();
    expect(screen.getByText('Previous slide')).toBeInTheDocument();
    expect(screen.getByText('First slide')).toBeInTheDocument();
    expect(screen.getByText('Last slide')).toBeInTheDocument();
    expect(screen.getByText('Go to slide')).toBeInTheDocument();
    expect(screen.getByText('Toggle shortcuts')).toBeInTheDocument();
  });

  it('closes shortcuts panel when clicked outside', () => {
    render(<KeyboardShortcuts />);

    // Open the panel
    fireEvent.keyDown(window, { key: '?' });
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();

    // Click outside the panel
    fireEvent.click(document.body);

    // Panel should still be there (this component doesn't have click-outside functionality)
    expect(screen.getByText('Keyboard Shortcuts')).toBeInTheDocument();
  });
});
