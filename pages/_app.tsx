import { AppProps } from "next/app"
import { globalStyles } from "../src/styles/global"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default App
