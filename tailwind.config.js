/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      30: '30px',
    },
    colors: {
      primary: '#FF5A5F',
      transparent: 'transparent',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      'main-blue': '#007BFF',
      'main-orange': '#FF7a45',
      'main-green': '#1bac46',
      'main-red': '#d60000',
      black: '#000000',
      gray1: '#222222',
      gray2: '#4f4f4f',
      'chart-blue': '#007BFF',
      'chart-orange': '#FF7a45',
      'chart-green': '#1bac46',
      'chart-green2': '#34c9ca',
      'chart-green3': '#a077e7',
      'chart-pink': '#F26a7b',
      'chart-yellow': '#fada37',
      'chart-purple': '#6a58e5',
    },

    extend: {
      fontFamily: {
        'i-bold': 'Inter-Bold', // 700
        'i-medium': 'Inter-Medium', //500
        'i-regular': 'Inter-Regular', //400
        'i-semibold': 'Inter-SemiBold', //600
        'i-light': 'Inter-Light', //200
        'i-thin': 'Inter-Thin', //300
        'i-extralight': 'Inter-ExtraLight', //100
        'i-extrabold': 'Inter-ExtraBold', //800
        'i-black': 'Inter-Black', // 900
      },
      lineHeight: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
      },
      padding: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
      },
    },
    borderRadius: {
      2 : '2px',
      4 : '4px',
      6 : '6px',
      8 : '8px',
      10 : '10px',
    },
    plugins: [],
  },
};
