import { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { GoArrowLeft } from 'react-icons/go'
import { Card } from '../../components'
import * as S from './styles'

interface ICard {
  name: string
  isActive: boolean
}

const MemoryGame = () => {

  const [ cards, setCards ] = useState<ICard[]>( [
    { name: 'luigi', isActive: false },
    { name: 'luigi', isActive: false },
    { name: 'bowser', isActive: false },
    { name: 'mario', isActive: false },
    { name: 'peach', isActive: false },
    { name: 'toad', isActive: false },
    { name: 'yoshi', isActive: false },
    { name: 'bowser', isActive: false },
    { name: 'mario', isActive: false },
    { name: 'peach', isActive: false },
    { name: 'toad', isActive: false },
    { name: 'yoshi', isActive: false },
  ] )

  const [ hasFlippedCard, setHasFlippedCard ] = useState( false )
  const [ firstCard, setFirstCard ] = useState<ICard>( { name: '', isActive: false } )
  const [ secondCard, setSecondCard ] = useState<ICard>( { name: '', isActive: false } )

  function flipCard ( id: number, card: ICard ) {
    setCards( [ ...cards ].map( ( obj, index ) => {
      if ( id === index ) {
        return {
          ...obj,
          isActive: true
        }
      } else return obj
    } ) )

    if ( !hasFlippedCard ) {
      setHasFlippedCard( true )
      setFirstCard( card )
      return
    }

    setSecondCard( card )
    checkMacthCards( firstCard.name, secondCard.name )

  }

  function checkMacthCards ( firstCard: string, secondCard: string ) {
    if ( firstCard === secondCard ){
      console.log( 'etssd' )
      // disableCards()
      return
    }
    // unFlipCards()
  }

  function resetGame () {
    setHasFlippedCard( false )
    setFirstCard( { name: '', isActive: false } )
    setSecondCard( { name: '', isActive: false } )
    setCards( [ ...cards ].map( obj => {
      return {
        ...obj,
        isActive: false
      }
    } ) )
  }

  return (
    <>
      <S.Header>
        <Link href='/Home'>
          <GoArrowLeft
            size={30}
          />
        </Link>
        <h1>MemoryGame</h1>
      </S.Header>

      <S.Board>
        {cards.map( ( card, index ) => (
          <Card key={index} name={card.name} flipCard={() => flipCard( index, card )} isActive={card.isActive} />
        ) )}
      </S.Board>

      <S.Reset>
        <button onClick={resetGame}>Reset Game</button>
      </S.Reset>
    </>
  )
}

export default MemoryGame
