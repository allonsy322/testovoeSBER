import { createGlobalStyle } from 'styled-components'

export const regular = {
    font: {
      default: '"Open Sans"',
    },

    fontSize: {
        smXs: '0.65rem',
        xs: '0.75rem',
        xsSm: '0.8125rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '2.375rem',
        '1.3xl': '1.3125rem',
        '1.5xl': '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
}

export type ThemeType = typeof theme

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  body {
    margin:0;
    line-height: 1.5;
    font-size: 14px;
    font-family: 'Open Sans';
    color: #000;
    font-weight: 400;
  }
`

export const theme = regular