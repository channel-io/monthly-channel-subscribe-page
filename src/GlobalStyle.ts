import { createGlobalStyle } from '@channel.io/bezier-react'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family:
      'Inter',
      'NotoSansKR',
      -apple-system,
      BlinkMacSystemFont,
      'Helvetica Neue',
      'Segoe UI',
      'Roboto',
      system-ui,
      sans-serif;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`
