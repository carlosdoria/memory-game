import * as S from './styles'
import Link from 'next/link'

interface ICard {
  name: string
  path: string
}

export const GameCard = ( { name, path }:ICard ) => {
  return (
    <S.Container>
      <Link href={path}>
        <S.Box>
          <span></span>
          <S.Content>
            <h2>{name}</h2>
          </S.Content>
        </S.Box>
      </Link>
    </S.Container>
  )
}
