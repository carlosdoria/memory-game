import * as S from './styles'

interface IProps {
  name: string
  isActive: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  flipCard: () => any
}

export const Card = ( { name, isActive, flipCard }: IProps ) => (
  <S.Card
    onClick={flipCard}
    className={isActive ? 'flip' : ''}
    data-card={name}>
    <img className='card-front' src={`/img/memoryGame/${name}.png`} alt={`Face da carta, carta do ${name}.png`}/>
    <img src='/img/memoryGame/box.png' alt='Verso da carta'/>
  </S.Card>
)

