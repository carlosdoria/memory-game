import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  padding: 40px 0;

  width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Box = styled.div`
  position: relative;

  width: 320px;
  height: 80px;

  margin: 20px 30px;

  color: #fff;
  background: #000;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: .5s;
  cursor: pointer;

  :hover {
    transform:translateY(-20px);
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    background: linear-gradient(45deg, #03a9f4, #ff0058);
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    border-radius: 10px;
    background: linear-gradient(45deg, #03a9f4, #ff0058);
    filter: blur(15px);
  }

  span {
    position: absolute;
    top: 6px;
    right: 6px;
    left: 6px;
    bottom: 6px;
    border-radius: 5px;
    background: rgba(0,0,0,0.6);
    z-index: 2;

    /* ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;

      width: 50%;
      height: 100%;

      background: rgba(255,255,255,0.1);
      pointer-events: none;
    } */
  }
`

export const Content = styled.div`
  position: relative;
  z-index: 10;

  padding: 20px 40px;
`
