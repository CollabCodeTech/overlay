import styled, { keyframes } from "styled-components";
import gueio1 from "../../img/gueio_voando1.png";
import gueio2 from "../../img/gueio_voando2.png";
import gueio3 from "../../img/gueio_voando3.png";

const voante = keyframes`
  0% {
    background-image: url(${gueio1});
    transform: rotate(-15deg) scale(1.8);
  }
  10% {
    background-image: url(${gueio2});
    transform: rotate(10deg) translateY(-10px) scale(1.8);
  }
  20% {
    background-image: url(${gueio3});
    transform: rotate(5deg) translateY(-10px) scale(1.8);
  }
  30% {
    background-image: url(${gueio2});
    transform: rotate(5deg) translateY(-10px) scale(1.8);
  }
  40% {
    background-image: url(${gueio1});
    transform: rotate(5deg) translateY(-10px) scale(1.8);
  }
  70% {
    background-image: url(${gueio1});
    transform: rotate(20deg) translateY(0px) scale(1.8);
  }
  85% {
    background-image: url(${gueio2});
    transform: rotate(5deg) translateY(0px) scale(1.8);
  }
  95% {
    background-image: url(${gueio3});
    transform: rotate(0deg) translateY(0px) scale(1.8);
  }
  100% {
    background-image: url(${gueio2});
    transform: rotate(-5deg) translateY(0px) scale(1.8);
  }
`;

export const Wrapper = styled.figure`
  position: relative;
  top: 6px;
  width: 23px;
  height: 19px;
  background-image: url(${gueio1});
  transform: scale(1.8);
  animation: ${voante} 1.5s linear infinite;
`;




