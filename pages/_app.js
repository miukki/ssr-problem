import App from 'next/app'
import React from 'react'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {createMuiTheme, CssBaseline, MuiThemeProvider} from '@material-ui/core'

const ThemeStyledComponents = {
  colors: {
    primary: '#0070f3',
  },
}

const GlobalStyle = createGlobalStyle`

    @font-face {
      font-family: 'Gotham Light';
      src: url('/static/fonts/Gotham-Light.eot');
      src: url('/static/fonts/Gotham-Light.eot?#iefix')
          format('embedded-opentype'),
        url('/static/fonts/Gotham-Light.woff') format('woff'),
        url('/static/fonts/Gotham-Light.ttf') format('truetype'),
        url('/static/fonts/Gotham-Light.svg#/static/fonts/Gotham-Light')
          format('svg');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Gotham Medium';
      src: url('/static/fonts/Gotham-Medium.eot');
      src: url('/static/fonts/Gotham-Medium.eot?#iefix')
          format('embedded-opentype'),
        url('/static/fonts/Gotham-Medium.woff') format('woff'),
        url('/static/fonts/Gotham-Medium.ttf') format('truetype'),
        url('/static/fonts/Gotham-Medium.svg#gotham-medium')
          format('svg');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Paytone One';
      src: url('/static/fonts/PaytoneOne.eot');
      src: url('/static/fonts/PaytoneOne.eot?#iefix')
          format('embedded-opentype'),
        url('/static/fonts/PaytoneOne.woff') format('woff'),
        url('/static/fonts/PaytoneOne.ttf') format('truetype'),
        url('/static/fonts/PaytoneOne.svg#PaytoneOne') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    
  html, body {
    font-family: 'Gotham Light', sans-serif;
    height: 100%;
    margin: 0;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-decoration: none;
    font-size: 16px;
    color: #9b9b9b;
  
  }
  a {
    color: rgb(0,90,144);
    text-decoration:underline;
    &:hover {
      text-decoration:none;
    }
  }

`

// #__next {
//   // display: flex;
//   // flex-direction: column;
// }

const Theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Gotham Light', 'sans-serif'].join(','),
    fontSize: 16,
    htmlFontSize: 10,
    color: '#9b9b9b',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
  palette: {
    primary: {500: '#003A53'},
    error: {500: '#ff0000'},
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  fontWeightMedium: 500,
  button: {
    borderRadius: 0,
  },
  status: {
    danger: '#ff0000',
  },
  overrides: {
    MuiButton: {
      // Name of the component
      text: {
        // Name of the rule
        color: '#fff', // Some CSS
      },
    },
  },
})

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <ThemeProvider theme={ThemeStyledComponents}>
        <GlobalStyle />
        <CssBaseline />

        <MuiThemeProvider theme={Theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ThemeProvider>
    )
  }
}
