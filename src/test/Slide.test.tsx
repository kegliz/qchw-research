import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Slide from '../components/Slide';
import type { SlideData } from '../types/Slide';

describe('Slide', () => {
  it('renders title slide correctly', () => {
    const titleSlide: SlideData = {
      id: 0,
      title: 'Test Title',
      type: 'title',
      subtitle: 'Test Subtitle',
      content: {
        bulletPoints: ['Test point']
      },
      meta: {
        date: 'June 2025'
      }
    };

    render(<Slide data={titleSlide} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Test point')).toBeInTheDocument();
    expect(screen.getByText('June 2025')).toBeInTheDocument();
  });

  it('renders content slide with bullet points', () => {
    const contentSlide: SlideData = {
      id: 1,
      title: 'Content Title',
      type: 'content',
      description: 'Test description',
      content: {
        bulletPoints: ['Point 1', 'Point 2', 'Point 3']
      }
    };

    render(<Slide data={contentSlide} />);

    expect(screen.getByText('Content Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Point 1')).toBeInTheDocument();
    expect(screen.getByText('Point 2')).toBeInTheDocument();
    expect(screen.getByText('Point 3')).toBeInTheDocument();
  });

  it('renders content slide with two columns', () => {
    const twoColumnSlide: SlideData = {
      id: 2,
      title: 'Two Column Title',
      type: 'content',
      content: {
        twoColumn: {
          left: {
            title: 'Left Title',
            items: ['Left item 1', 'Left item 2']
          },
          right: {
            title: 'Right Title',
            items: ['Right item 1', 'Right item 2']
          }
        }
      }
    };

    render(<Slide data={twoColumnSlide} />);

    expect(screen.getByText('Two Column Title')).toBeInTheDocument();
    expect(screen.getByText('Left Title')).toBeInTheDocument();
    expect(screen.getByText('Right Title')).toBeInTheDocument();
    expect(screen.getByText('Left item 1')).toBeInTheDocument();
    expect(screen.getByText('Right item 1')).toBeInTheDocument();
  });

  it('renders comparison table correctly', () => {
    const comparisonSlide: SlideData = {
      id: 3,
      title: 'Comparison',
      type: 'comparison',
      content: {
        table: {
          headers: ['Approach', 'Status'],
          rows: [
            {
              approach: 'Test Approach',
              values: [
                { text: 'High', status: 'high' },
                { text: 'Good', status: 'good' }
              ]
            }
          ]
        }
      }
    };

    render(<Slide data={comparisonSlide} />);

    expect(screen.getByText('Comparison')).toBeInTheDocument();
    expect(screen.getByText('Approach')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Test Approach')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Good')).toBeInTheDocument();
  });
});
