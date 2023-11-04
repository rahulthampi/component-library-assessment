/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screen: {
      tablet: '960px',
      desktop: '1248px',
    },

    fontSize: {
      'display-2xl': ['72px', { lineHeight: '90px', letterSpacing: '-0.02rem' }],
      'display-xl': ['60px', { lineHeight: '72px', letterSpacing: '-0.02rem' }],
      'display-lg': ['48px', { lineHeight: '60px', letterSpacing: '-0.02rem' }],
      'display-md': ['36px', { lineHeight: '44px', letterSpacing: '-0.02rem' }],
      'display-sm': ['30px', { lineHeight: '38px', letterSpacing: '2.375rem' }],
      'display-xs': ['24px', { lineHeight: '32px', letterSpacing: '2rem' }],

      'text-xl': ['20px', { lineHeight: '30px' }],
      'text-lg': ['18px', { lineHeight: '28px' }],
      'text-md': ['16px', { lineHeight: '24px' }],
      'text-sm': ['14px', { lineHeight: '20px' }],
      'text-xs': ['12px', { lineHeight: '18px' }],
      'text-xxs': ['10px', { lineHeight: '15px' }],
      'text-xxxs': ['8px', { lineHeight: '15px' }],
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    spacing: {
      0: '0',
      '0-5': '0.125rem',
      1: '0.25rem',
      2: '0.5rem',
      '2-5': '0.625rem',
      3: '0.75rem',
      '3-5': '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4rem',
      20: '5rem',
      22: '5rem',
      24: '6rem',
    },

    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',

      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      info: {
        DEFAULT: 'hsl(var(--info))',
        foreground: 'hsl(var(--info-foreground))',
      },
      warning: {
        DEFAULT: 'hsl(var(--warning))',
        foreground: 'hsl(var(--warning-foreground))',
      },
      danger: {
        DEFAULT: 'hsl(var(--danger))',
        foreground: 'hsl(var(--danger-foreground))',
      },
      success: {
        DEFAULT: 'hsl(var(--success))',
        foreground: 'hsl(var(--success-foreground))',
      },
      neutral: {
        DEFAULT: 'hsl(var(--neutral))',
        foreground: 'hsl(var(--neutral-foreground))',
      },

      border: {
        DEFAULT: 'hsl(var(--border))',
        ring: 'hsl(var(--border-ring))',
      },

      palette: {
        // All the other color definitions
        blue: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
        orange: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
        yellow: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
        red: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
        green: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
        violet: {
          // 10: '',
          // 20: '',
          // 30: '',
          // 40: '',
          // 50: '',
          // 60: '',
          // 70: '',
          // 80: '',
          // 90: '',
          // 100: '',
        },
      },
    },

    borderRadius: {
      none: 'var(--radius-none)',
      sm: 'var(--radius-sm)',
      DEFAULT: 'var(--radius)',
      lg: 'var(--radius-lg)',
      full: 'var(--radius-full)',
    },

    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
