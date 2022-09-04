import '../styles/globals.css'
import { NextUIProvider } from "@nextui-org/react"
import { dark } from '../theme/dark.mjs'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={dark}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
