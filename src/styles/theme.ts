import { DefaultTheme } from 'styled-components'

interface Themes {
  light: DefaultTheme
  dark: DefaultTheme
}

const dark: DefaultTheme = {
  background: { primary: '#2eb398', secondary: '#222b2e', tertiary: '#1b2224' },
  text: { primary: '#ffffff', secondary: '#c2ccc9', tertiary: '#2eb398' }
}

const light: DefaultTheme = {
  background: { primary: '#2eb398', secondary: '#ffffff', tertiary: '#f7f7f7' },
  text: { primary: '#2e373a', secondary: '#394245', tertiary: '#2eb398' }
}

const themes: Themes = {
  dark,
  light
}

export { themes }
