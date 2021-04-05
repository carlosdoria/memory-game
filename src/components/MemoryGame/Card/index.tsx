import { useState } from 'react'
import * as S from './styles'

interface IProps {
  name: string
}

export const Card = ( { name }: IProps ) => {

  const [ activeCard, setActiveCard ] = useState( false )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function flipCard ( ) {
    setActiveCard( !activeCard )
  }

  return (
    <S.Card onClick={flipCard} className={activeCard ? 'flip' : ''} data-card={name}>
      <img className='card-front' src={`/img/memoryGame/${name}.png`} alt={`Face da carta, carta do ${name}.png`}/>
      <img src='/img/memoryGame/box.png' alt='Verso da carta'/>
    </S.Card>
  )
}
