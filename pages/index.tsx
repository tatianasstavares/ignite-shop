import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import shirt1 from '../src/assets/shirt1.png'
import shirt2 from '../src/assets/shirt2.png'
import shirt3 from '../src/assets/shirt3.png'
import shirt4 from '../src/assets/shirt4.png'
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
        <Image src={shirt1} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt2} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt3} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt4} width={520} height={480} alt="t-shirt black"/>
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}