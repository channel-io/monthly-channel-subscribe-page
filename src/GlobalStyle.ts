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

    margin: 0;
    padding: 0;
  }

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`
