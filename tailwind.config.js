// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This line is critical
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6e7ed',
          100: '#c1c3d1',
          200: '#9a9db3',
          300: '#747895',
          400: '#565c7d',
          500: '#3e4464',
          600: '#2e334b',
          700: '#1f2351', // Primary navy color as requested by client
          800: '#161a3d',
          900: '#0d102a',
          950: '#07091a', // Added for darker backgrounds
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
        // Add accent colors for highlights (derived from existing accent colors)
        accent: {
          50: '#edf1ff',
          100: '#dde5ff',
          200: '#c0cdff',
          300: '#97a9ff',
          400: '#7584fc', // Highlight color on dark backgrounds
          500: '#5a62f6',
          600: '#4847ed',
          700: '#3934c9',
          800: '#2d2da0',
          900: '#282d7e',
        },
        // Gray palette for text and UI elements in dark mode
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#121416',
        }
      },
      backgroundColor: {
        dark: '#07091a', // Base background
      },
      textColor: {
        dark: {
          primary: '#f1f3f5', // Primary text color
          secondary: '#adb5bd', // Secondary text
          muted: '#868e96', // Muted text
        }
      },

    }
  }
}