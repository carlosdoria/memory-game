import Link from 'next/link'
// import Image from 'next/image'
import { GoArrowLeft } from 'react-icons/go'
import { Card } from '../../components'
import * as S from './styles'

const MemoryGame = () => {

  // const cards = document.querySelectorAll( '.card' )

  // let firstCard, secondCard
  // let hasFlippedCard = false
  // let lockBoard = false

  // function checkForMath () {
  //   if ( firstCard.dataset.card === secondCard.dataset.card ) {
  //     disableCard()
  //     return
  //   }

  // function disableCard () {
  //   firstCard.removeEventListener( click, flipCard )
  //   secondCard.removeEventListener( click, flipCard )

  //   resetBoard()
  // }

  // function unflipCard () {
  //   lockBoard = true

  //   setTimeout( () => {
  //     firstCard.classList.remove( 'flip' )
  //     secondCard.classList.remove( 'flip' )

  //     resetBoard()
  //   }, 1500 )
  // }

  // function resetBoard () {
  //   [ hasFlippedCard, lockBoard ] = [ false, false ];
  //   [ firstCard, secondCard ] = [ '', '' ]
  // }

  // function shuffle () {
  //   cards.forEach ( card => {
  //     const randomPosition = Math.floor( Math.random() * 12 )

  //     card.style.order = randomPosition
  //   } )
  // }

  // shuffle()

  function resetGame () {
    // lockBoard = true
    // cards.forEach ( card => {
    //   card.classList.remove( 'flip' )
    // } )
    // setTimeout( () => {
    //   resetBoard()
    //   shuffle()
    //   alert( 'As cartas foram embaralhadas!' )
    // }, 1500 )
  }

  const CARDS = [
    { name: 'luigi' },
    { name: 'bowser' },
    { name: 'mario' },
    { name: 'peach' },
    { name: 'toad' },
    { name: 'yoshi' },
    { name: 'bowser' },
    { name: 'luigi' },
    { name: 'mario' },
    { name: 'peach' },
    { name: 'toad' },
    { name: 'yoshi' },
  ]

  return (
    <>
      <S.Header>
        <Link href='Home'>
          <GoArrowLeft
            size={30}
          />
        </Link>
        <h1>MemoryGame</h1>
      </S.Header>

      <S.Board>
        {CARDS.map( ( card, index ) => (
          <Card key={index} name={card.name} />
        ) )}
      </S.Board>

      <S.Reset>
        <button onClick={resetGame}>Reset Game</button>
      </S.Reset>
    </>
  )
}

export default MemoryGame
