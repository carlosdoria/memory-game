import * as S from '../styles/home.styles'
import { GameCard } from '../components'

const Home = ( { title = 'Lista de jogos' } ) => {
  return (
    <>
      <S.Title>
        <h1>
          {title}
        </h1>
      </S.Title>
      <S.Main>

        <GameCard name='Jogo da memória' path='MemoryGame'/>
        <GameCard name='Jogo da Velha' path='TicTacToeGame'/>
      </S.Main>
    </>
  )
}

export default Home
