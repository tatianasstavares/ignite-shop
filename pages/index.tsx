import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import shirt1 from '../src/assets/shirt1.png'
import shirt2 from '../src/assets/shirt2.png'
import shirt3 from '../src/assets/shirt3.png'
import shirt4 from '../src/assets/shirt4.png'
import {useKeenSlider} from 'keen-slider/react'
import {stripe} from '../src/lib/stripe'

import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string[],
    price: number
  }[]
}

export default function Home({products}:HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  console.log(products)
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {

        const {id, imageUrl, name, price} = product
        const [srcUrl] = imageUrl
        return (
          <Product key={id} className="keen-slider__slide" >
          <Image src={srcUrl} priority={false} width={520} height={480} alt={name}/>
          <footer>
            <strong>{name}</strong>
            <span>{price}</span>
          </footer>
        </Product>
        )
      })
      }
      
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {

  const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images,
      price: price.unit_amount  / 100,
    }
  })
  

  return {
    props: {
       products
    }
  }
  
}