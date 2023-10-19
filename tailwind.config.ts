import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],

  theme: {
    extend: {
      fontFamily: {
        cookie: 'var(--font-cookie)',
        nunito: 'var(--font-nunito)',
        'nunito-sans': 'var(--font-nunito-sans)',
      },

      colors: {
        ruby: {
          '50': '#fff2f1',
          '100': '#ffe2df',
          '200': '#ffcac4',
          '300': '#ffa59b',
          '400': '#ff7161',
          '500': '#ff4430',
          '600': '#f12711',
          '700': '#cb1d0a',
          '800': '#a81b0c',
          '900': '#8a1e12',
          '950': '#4c0a03',
        },
        sun: {
          '50': '#fffceb',
          '100': '#fff7c6',
          '200': '#ffed88',
          '300': '#ffde49',
          '400': '#ffcc20',
          '500': '#faaf12',
          '550': '#f89e1b',
          '600': '#dd8202',
          '700': '#b75c06',
          '800': '#95460b',
          '900': '#7a390d',
          '950': '#461d02',
        },
      },
    },
  },

  plugins: [],
}
export default config
