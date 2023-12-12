import { AppProps } from "next/app"
import { globalStyles } from "../src/styles/global"
import logoImg from '../src/assets/logo.svg'
import { Container, Header } from "@/styles/pages/app"
import Image  from "next/image"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container> 
      <Header>
        <Image src={logoImg} alt="logo rocketseat" />
      </Header>
      <Component {...pageProps} />
    </Container>
     
  )
}

export default App
