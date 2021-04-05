import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  p {
    justify-self: center;
  }

  h1 {
    display: flex;margin: auto;
    justify-self: center;
    font-size: 3rem;
    color: blue;
  }
`

export const Board = styled.main`
  height: 640px;
  width: 640px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

  perspective: 1000px;

  .flip {
    transform: rotateY(180deg);
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
