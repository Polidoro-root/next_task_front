import 'styled-components';

interface Colors {
  primary: string
  secondary: string
  tertiary: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: Colors
    text: Colors
  }
}
