import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import shirt from '../src/assets/shirt.svg'
import {useKeenSlider} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
const [sliderRef] = useKeenSlider({
  slides: {
    perView: 3,
  }
})

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}