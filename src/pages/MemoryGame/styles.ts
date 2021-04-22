import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Board = styled.div`
  height: 640px;
  width: 640px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

  perspective: 1000px;

  .flip {
    transform: rotateY(180deg);
  }
  @media (max-width: 640px) {
    height: 300px;
    width: 300px;
  }
`

export const Reset = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  justify-content: center;

  button {
    height: 100px;
    width: 640px;

    font-size: 2.4rem;
  }
`
