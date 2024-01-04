import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import {useKeenSlider} from 'keen-slider/react'
import {stripe} from '../src/lib/stripe'
import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps, GetStaticProps } from "next";
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {

  const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount  / 100),
    }
  })
  

  return {
    props: {
       products,
    },
    revalidate: 60 * 60 * 2
  }
  
}