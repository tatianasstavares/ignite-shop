import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import shirt from '../src/assets/shirt.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}