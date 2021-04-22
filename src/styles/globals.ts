import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
    --first-background: #050410;
    --black: #050410;
    --first-color: #3f70f3;
    --second-color: #fff;
    --footer-first-color: #fff;
    --footer-second-color: #3f70f3;
  }

  :root {
    @media (max-width: 720px) {
      font-size: 87.50%;
    }

    @media (max-width: 540px) {
      font-size: 81.25%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    button {
      outline: none;
    }
  }

  html, body, #__next {
    height: 100vh;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #000;
  }
`

export default GlobalStyles
