module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#232323',
        'main-background': '#eaeaea;',
        'error-red': '#f15524',
        'thanks-background': '#232323',
      },
      keyframes: {
        shrink: {
          '0%': { transform: 'scale(50)' },
          '100%': { transform: 'scale(1))' },
        },
        moveUp: {
          '0%': { transform: 'translate(80px, 80px)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '100%' },
        },
        moveDown: {
          '0%': { transform: 'translate(-80px, -80px)', opacity: '0' },
          '100%': { transform: 'translate(0, 0)', opacity: '100%' },
        },
      },
    },
    fontFamily: {
      Arial: ['Arial', 'sans-serif'],
      TBC: ['TBC', 'sans-serif'],
      Anonymous: ['Anonymous Pro', 'sans-serif'],
    },
  },
  plugins: [],
};
