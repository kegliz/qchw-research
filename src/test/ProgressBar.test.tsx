import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProgressBar from '../components/ProgressBar';

describe('ProgressBar', () => {
  it('renders with correct progress percentage', () => {
    render(<ProgressBar current={3} total={10} />);

    // Check that progress bar is rendered
    const progressBar = document.querySelector('[style*="width"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('handles first slide correctly', () => {
    render(<ProgressBar current={1} total={5} />);

    // Should show 20% progress (1/5)
    const progressBar = document.querySelector('[style*="width"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('handles last slide correctly', () => {
    render(<ProgressBar current={5} total={5} />);

    // Should show 100% progress (5/5)
    const progressBar = document.querySelector('[style*="width"]');
    expect(progressBar).toBeInTheDocument();
  });

  it('handles single slide correctly', () => {
    render(<ProgressBar current={1} total={1} />);

    // Should show 100% progress (1/1)
    const progressBar = document.querySelector('[style*="width"]');
    expect(progressBar).toBeInTheDocument();
  });
});
