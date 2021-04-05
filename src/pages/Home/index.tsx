import * as S from './styles'
import Link from 'next/link'

const Home = ( { title = 'Lista de jogos' } ) => {
  return (
    <S.Main>
      <h1>{title}</h1>
      <ol>
        <li >
          <Link href='MemoryGame'>
            Jogo da Memória
          </Link>
        </li>
      </ol>
    </S.Main>
  )
}

export default Home
