import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #fff;

  h2 {
  padding: 1rem 0;
  }
`

export const Title = styled.h1`
  margin-top: 50px;
`

export const Board = styled.div`
  height: 400px;
  width: 400px;
  margin: 0;
  padding: 0;
`

export const Row = styled.div`
  height: 133.3px;
  width: 400px;
  margin: 0;
  padding: 0;
  line-height: 0;
  display: flex;
  flex-wrap: wrap;
`

export const Square = styled.button`
  height: 100%;
  width: 33.3%;

  margin: 0;
  padding: 0;

  font-size: 5rem;
  font-weight: bold;
  color: #15f4ee;

  background: none;
  border: 1px solid #999;

  outline: none;

  cursor: pointer;

  :hover,
  :active {
    color: #fff;
    /* cursor: ; */
    cursor: inherit;
  }
`

export const Button = styled.button`
  margin-top: 3rem;
  padding: 1.2rem 4rem;

  font-size: 1.4rem;

  color: #15f4ee;
  border: 2px solid #15f4ee;
  border-radius: 1.2rem;

  background: none;

  text-transform: uppercase;

  cursor: pointer;
`
