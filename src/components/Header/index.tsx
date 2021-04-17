import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'
import * as S from './styles'

interface header {
  title: string
}

export const Header = ( { title }:header ) => {
  return (
    <S.Header>
      <Link href='/Home'>
        <S.LinkCustomized>
          <GoArrowLeft
            color='white'
            size={40}
          />
        </S.LinkCustomized>
      </Link>
      <span>{title}</span>
    </S.Header>
  )
}
