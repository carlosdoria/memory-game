import styled from 'styled-components'

export const Title = styled.header`
  padding: 2.5rem 0 4rem;

  display: flex;
  justify-content: center;

  font-size: 2.5rem;
  text-align:center;

  color: #fff;

  text-shadow:
    0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 40px #00b3ff,
    0 0 10px #00b3ff
  ;

  animation:  animete 5s linear;

  @keyframes animete {
    0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92% {
      opacity: 0;
      text-shadow: none;
    }
    18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 100% {
      color: #fff;
      opacity: 1;
      text-shadow:
        0 0 10px #00b3ff,
        0 0 20px #00b3ff,
        0 0 40px #00b3ff,
        0 0 80px #00b3ff,
        0 0 10px #00b3ff
      ;
    }
  }

`

export const Main = styled.main`
  margin: auto;

  padding: 0 2rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
