import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],

  theme: {
    extend: {
      fontFamily: {
        cookie: 'var(--font-cookie)',
        nunito: 'var(--font-nunito)',
        inter: 'var(--font-inter)',
      },

      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },

      maxWidth: {
        content: '64rem',
        102: '25.5rem',
      },

      maxHeight: {
        102: '25.5rem',
      },

      minHeight: {
        64: '16rem',
        80: '20rem',
      },

      width: {
        124: '31rem',
        120: '30rem',
        108: '27rem',
      },

      height: {
        100: '24rem',
        152: '38rem',
        'mobile-menu': 'calc(100vh - 23rem)',
        'web-menu': 'calc(100vh - 33rem)',
      },

      screens: {
        '4xl': '2100px',
      },

      borderRadius: {
        '3xl': '32px',
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
        limeade: {
          '50': '#feffe5',
          '100': '#faffc7',
          '200': '#f3ff96',
          '300': '#e6fc5a',
          '400': '#d5f328',
          '500': '#b7d909',
          '600': '#84a102',
          '700': '#6b8407',
          '800': '#55680c',
          '900': '#47580f',
          '950': '#253102',
        },
      },

      keyframes: {
        slideDownAccordion: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUpAccordion: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },

      animation: {
        slideDownAccordion:
          'slideDownAccordion 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUpAccordion:
          'slideUpAccordion 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },

  plugins: [],
}
export default config
