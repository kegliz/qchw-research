export const theme = {
  colors: {
    // Light theme colors
    background: '#fcfcf9',
    surface: '#fffffd',
    text: '#134252',
    textSecondary: '#626c71',
    primary: '#21808d',
    primaryHover: '#1d7480',
    primaryActive: '#1a6873',
    secondary: 'rgba(94, 82, 64, 0.12)',
    secondaryHover: 'rgba(94, 82, 64, 0.2)',
    border: 'rgba(94, 82, 64, 0.2)',
    error: '#c0152f',
    success: '#21808d',
    warning: '#a84b2f',
    info: '#626c71',
    focusRing: 'rgba(33, 128, 141, 0.4)',
    
    // Status colors
    status: {
      high: '#21808d',
      good: '#4ade80',
      moderate: '#facc15',
      low: '#f87171',
      'very-low': '#dc2626',
      excellent: '#10b981',
      unknown: '#9ca3af'
    }
  },
  fonts: {
    base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
  },
  fontSizes: {
    xs: '11px',
    sm: '12px',
    base: '14px',
    md: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '30px',
    '5xl': '36px',
    '6xl': '48px'
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 550,
    bold: 600
  },
  spacing: {
    0: '0',
    1: '1px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
    64: '64px',
    80: '80px',
    96: '96px'
  },
  borderRadius: {
    sm: '6px',
    base: '8px',
    md: '10px',
    lg: '12px',
    xl: '16px',
    full: '9999px'
  },
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.02)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.04), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  transitions: {
    fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '350ms cubic-bezier(0.16, 1, 0.3, 1)'
  }
};

export type Theme = typeof theme;
