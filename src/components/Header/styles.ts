import styled from 'styled-components'

export const Header = styled.header`
  padding: 1rem 2rem 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */

  p {
    justify-self: center;
  }

  span {
    margin: auto;

    display: flex;
    justify-self: center;

    font-size: 3rem;

    color: #fff;
    text-shadow:
      0 0 10px #00b3ff,
      0 0 20px #00b3ff,
      0 0 40px #00b3ff,
      0 0 10px #00b3ff
    ;
  }
`

export const LinkCustomized = styled.a`
  cursor: pointer;
`
