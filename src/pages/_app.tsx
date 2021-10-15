import { ThemeProvider, } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import { useTheme } from 'hooks/useTheme'
import { themes } from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useTheme()

  return <>
    <GlobalStyles />

    <ThemeProvider theme={themes[theme]}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
export default MyApp
