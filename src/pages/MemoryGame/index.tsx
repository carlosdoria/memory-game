import { useState, useEffect } from 'react'
// import Image from 'next/image'
import { Header } from '../../components'
import { Card } from './components'
import * as S from './styles'

interface ICard {
  name: string
  isActive: boolean
  isDisable: boolean
}

const MemoryGame = () => {

  const [ cards, setCards ] = useState<ICard[]>( [
    { name: 'luigi', isActive: false, isDisable: false },
    { name: 'luigi', isActive: false, isDisable: false },
    { name: 'bowser', isActive: false, isDisable: false },
    { name: 'mario', isActive: false, isDisable: false },
    { name: 'peach', isActive: false, isDisable: false },
    { name: 'toad', isActive: false, isDisable: false },
    { name: 'yoshi', isActive: false, isDisable: false },
    { name: 'bowser', isActive: false, isDisable: false },
    { name: 'mario', isActive: false, isDisable: false },
    { name: 'peach', isActive: false, isDisable: false },
    { name: 'toad', isActive: false, isDisable: false },
    { name: 'yoshi', isActive: false, isDisable: false },
  ] )

  const [ hasFlippedCard, setHasFlippedCard ] = useState( false )
  const [ lockBoard, setLockBoard ] = useState( false )
  const [ firstCard, setFirstCard ] = useState<ICard>( { name: '', isActive: false, isDisable: false } )
  const [ secondCard, setSecondCard ] = useState<ICard>( { name: '', isActive: false, isDisable: false } )

  function flipCard ( id: number, card: ICard ) {
    if ( lockBoard ) return
    if ( JSON.stringify( card ) === JSON.stringify( firstCard ) ) return alert( 'Escolha outra carta!' )

    setCards( cards .map( ( obj, index ) => {
      if ( id === index ) {
        return {
          ...obj,
          isActive: true
        }
      } else return obj
    } ) )

    if ( !hasFlippedCard ) {
      setHasFlippedCard( true )
      setFirstCard( { ...card, isActive: true } )
      return
    }

    setSecondCard( card )
    checkMacthCards( firstCard.name, card.name )

  }

  function checkMacthCards ( firstCard: string, secondCard: string ) {
    if ( firstCard === secondCard ){
      disableCards()
      return
    }
    unFlipCards()
  }

  function disableCards () {
    clearFields()
  }

  function unFlipCards () {
    setLockBoard( true )
    setTimeout( () => {
      setCards( [ ...cards ].map( obj => {
        if ( firstCard.name === obj.name || secondCard.name === obj.name ) {
          return {
            ...obj,
            isActive: false
          }
        } else return obj
      } ) )
      setLockBoard( false )
      clearFields()
    }, 2000 )
  }

  function clearFields () {
    setHasFlippedCard( false )
    setLockBoard( false )
    setFirstCard( { name: '', isActive: false, isDisable: false } )
    setSecondCard( { name: '', isActive: false, isDisable: false } )
  }

  function resetGame () {
    setCards( [ ...cards ].map( obj => {
      return {
        ...obj,
        isActive: false,
        isDisable: false
      }
    } ) )
    shuffleCards()

    clearFields()
  }

  function shuffleCards ( ) {

    let currentIndex = cards.length, temporaryValue, randomIndex
    console.log( currentIndex )

    // While there remain elements to shuffle...
    while ( 0 !== currentIndex ) {

      // Pick a remaining element...
      randomIndex = Math.floor( Math.random() * currentIndex )
      console.log( randomIndex )
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = cards[ currentIndex ]
      cards[ currentIndex ] = cards[ randomIndex ]
      cards[ randomIndex ] = temporaryValue
    }
    clearFields()
    setCards( cards )
    return
  }

  function verifyWin () {
    const isWin = cards.every( card => {
      return card.isActive == true
    } )
    if ( isWin ) {
      alert( 'Você ganhou!' )
    }
  }

  useEffect( () => {
    verifyWin()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ disableCards ] )

  return (
    <>
      <Header title="Jogo da mémoria"/>

      <S.Container>
        <S.Board>
          {cards.map( ( card, index ) => (
            <Card key={index} name={card.name} flipCard={() => flipCard( index, card )} isActive={card.isActive} />
          ) )}
        </S.Board>

        <S.Reset>
          <button onClick={resetGame}>Reset Game</button>
          <button onClick={() => console.log( cards )}>Cards</button>
          <button onClick={() => shuffleCards( )}>Console</button>
        </S.Reset>
      </S.Container>
    </>
  )
}

export default MemoryGame
