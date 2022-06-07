module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      spacing: {
        'min-content': 'min-content'
      },
      dropShadow: {
        main: '0 1px 3px black'
      },
      boxShadow: {
        main: '0 3px 5px -2px black'
      },
      screens: {
        xs: '320px'
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      margin: ['first']
    }
  }
}
