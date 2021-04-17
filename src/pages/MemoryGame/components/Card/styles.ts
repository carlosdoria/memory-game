import styled from 'styled-components'

export const Container = styled.div``

export const Card = styled.div`
  position: relative;

  height: calc( 33.333% - 10px);
  width: calc(25% - 10px);

  margin: 5px;

  box-shadow: 1px 1px 1px rgba(0,0,0,.3);

  cursor: pointer;

  transform: scale(1);
  /* don't leave the element flat on the plane */
  transform-style: preserve-3d;
  transition: transform .9s;

  .card-front {
    transform: rotateY(180deg);
  }

  img {
    position: absolute;

    height: 100%;
    width: 100%;

    padding: 20px;

    border-radius: 5px;

    background: #fff;

    /* defines whether or not the back face of an element should be visible when facing the user */
    backface-visibility: hidden;
  }

  :active {
    transform: scale(0.95);
    transition: transform .3s;
  }


`
