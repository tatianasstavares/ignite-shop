import { styled } from '../src/styles/index'


const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },
  '&:hover': {
    filter: 'brigthness(0.8)',
  },
})

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar

    </Button>
  )
}