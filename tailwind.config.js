module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#176F6B',
          secondary: '#FFC000',
          accent: '#FFEDD5',
          neutral: '#F3F4F6',
          'base-100': '#FFFFFF',
          'base-200': '#F4F8FA',
          info: '#98A8DD',
          success: '#1BBB70',
          warning: '#DF7E07',
          error: '#FA5C5C',
        },
        dark: {
          primary: '#D9F99D',
          secondary: '#FDE68A',
          accent: '#4B5563',
          neutral: '#F3F4F6',
          'base-100': '#1F2937',
          'base-200': '#253142',
          info: '#98A8DD',
          success: '#1BBB70',
          warning: '#F59E0B',
          error: '#FB7185',
        },
      },
    ],
  },
};
