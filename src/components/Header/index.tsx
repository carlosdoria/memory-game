import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'
import * as S from './styles'

interface header {
  title: string
}

export const Header = ( { title }:header ) => {
  return (
    <S.Header>
      <Link href='/'>
        <S.LinkCustomized>
          <GoArrowLeft
            color='white'
            size={50}
          />
        </S.LinkCustomized>
      </Link>
      <h2>{title}</h2>
    </S.Header>
  )
}
