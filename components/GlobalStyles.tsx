import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *:before, *:after {
      box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Arial', sans-serif;
    line-height: 1.75;
    font-size: 87.5%;
  }
`
