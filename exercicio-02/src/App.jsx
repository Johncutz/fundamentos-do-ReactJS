import Card from "./components/Card"
import swPosterImg from '../public/star-wars.jpg'
import esbPosterImg from '../public/esb-poster.jpg'
import rotjPosterImg from '../public/rotj-poster.jpg'
import Button from "./components/Button"

const App = () => {
  return (
    <>
      <h1>Exercício 2</h1>
      <Button text="Ir ao Blog" />
      <Card title="Pôster: Star Wars (1977)" posterImg={swPosterImg} />
      <Card title="Pôster: Empire Stikes back (1980)" posterImg={esbPosterImg} />
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={rotjPosterImg} />
    </>
  )
}

export default App