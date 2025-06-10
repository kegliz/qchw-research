# Quantum Computing Hardware Research Presentation

A modern, interactive presentation application about quantum computing hardware research, built with React, TypeScript, and Vite. This application presents 14 slides covering various aspects of quantum computing hardware, from basic concepts to advanced research topics.

## Features

- 🎯 **Modern React Architecture**: Built with React 18, TypeScript, and Vite for optimal performance
- 🎨 **Beautiful UI**: Styled with Emotion CSS-in-JS and Framer Motion animations
- ⌨️ **Keyboard Navigation**: Full keyboard support (arrow keys, spacebar, number keys, Home/End)
- 📱 **Touch Support**: Swipe gestures for mobile devices
- 🧪 **Comprehensive Testing**: Full test coverage with Vitest and React Testing Library
- ♿ **Accessibility**: ARIA labels, focus management, and semantic HTML
- 📊 **Progress Tracking**: Animated progress bar and slide indicators
- ❓ **Help System**: Built-in keyboard shortcuts help panel (press 'h' or '?')

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: Framer Motion
- **Testing**: Vitest + React Testing Library + Jest DOM
- **Linting**: ESLint

## Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Testing

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui
```

### Building for Production

```bash
npm run build
npm run preview
```

## Usage

### Navigation

- **Arrow Keys**: Navigate between slides (← → ↑ ↓)
- **Spacebar**: Next slide
- **Number Keys**: Jump to specific slide (1-9, then 0 for slide 10, etc.)
- **Home**: Go to first slide
- **End**: Go to last slide
- **H or ?**: Toggle help panel
- **Escape**: Close help panel

### Touch/Mobile

- **Swipe Left**: Next slide
- **Swipe Right**: Previous slide
- **Tap**: Navigation buttons and slide indicators

## Project Structure

```
src/
├── components/           # React components
│   ├── Presentation.tsx  # Main presentation container
│   ├── Slide.tsx        # Individual slide renderer
│   ├── Navigation.tsx   # Navigation controls
│   ├── ProgressBar.tsx  # Progress indicator
│   └── KeyboardShortcuts.tsx # Help overlay
├── data/
│   └── slides.ts        # Slide content data
├── styles/
│   ├── theme.ts         # Design system theme
│   └── global.ts        # Global styles
├── types/
│   └── Slide.ts         # TypeScript interfaces
├── test/                # Test files
└── main.tsx            # Application entry point
```

## Content

The presentation covers 14 slides about quantum computing hardware research:

1. **Title Slide**: Introduction to quantum computing hardware research
2. **Moore's Law and Beyond**: Classical computing limitations
3. **Quantum Computing Basics**: Fundamental concepts
4. **Quantum vs Classical**: Key differences and advantages
5. **Qubit Technologies**: Different physical implementations
6. **Superconducting Qubits**: IBM and Google's approach
7. **Trapped Ion Qubits**: IonQ and Honeywell's technology
8. **Photonic Qubits**: Light-based quantum computing
9. **Quantum Error Correction**: Handling quantum noise
10. **Current Limitations**: Present challenges
11. **Research Frontiers**: Cutting-edge developments
12. **Industry Players**: Major companies and investments
13. **Future Outlook**: Long-term predictions
14. **Thank You**: Conclusion and credits

## Development

This project was migrated from a vanilla HTML/CSS/JavaScript presentation to a modern React application while maintaining all original functionality and adding new features like animations, touch support, and comprehensive testing.

### Key Design Decisions

- **Component Architecture**: Modular design with reusable components
- **TypeScript**: Full type safety for maintainability
- **CSS-in-JS**: Emotion for scoped styles and theme system
- **Testing**: Comprehensive test coverage for reliability
- **Accessibility**: WCAG compliant with proper ARIA support
- **Performance**: Optimized with React best practices and Vite bundling
  },
})
```
