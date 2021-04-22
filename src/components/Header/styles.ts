import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  padding: 2rem 0  4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;

  color: #fff;

  text-shadow:
    0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 10px #00b3ff
  ;

  /* animation:  animete 5s linear;

  @keyframes animete {
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
      color: var(--first-background-color);
      text-shadow: none;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 100% {
      color: #fff;
      text-shadow:
        0 0 10px #00b3ff,
        0 0 20px #00b3ff,
        0 0 40px #00b3ff,
        0 0 80px #00b3ff,
        0 0 10px #00b3ff
      ;
    }
  } */
`

export const LinkCustomized = styled.a`
  position: absolute;
  left: 0;

  height: 40px;
  width: 40px;

  margin-left: .5rem;

  font-size: 0;

  cursor: pointer;
`
