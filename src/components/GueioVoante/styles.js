import styled, { keyframes } from "styled-components";
import gueio1 from "../../img/gueio_voando1.png";
import gueio2 from "../../img/gueio_voando2.png";
import gueio3 from "../../img/gueio_voando3.png";

const calcBase = 3;

const voante = keyframes`
  0% {
    background-image: url(${gueio1});
    transform: translateY(0) scale(1.8);
  }
  5% {
    background-image: url(${gueio2});
    transform: translateY(0) scale(1.8) rotate(calc(-1deg * ${calcBase}));
  }
  10% {
    background-image: url(${gueio3});
    transform: translateY(0) scale(1.8) rotate(calc(-2deg * ${calcBase}));
  }
  15% {
    background-image: url(${gueio2});
    transform: translateY(-5px) scale(1.8) rotate(calc(-3deg * ${calcBase}));
  }
  20% {
    background-image: url(${gueio1});
    transform: translateY(-5px) scale(1.8) rotate(calc(-4deg * ${calcBase}));
  }
  25% {
    background-image: url(${gueio2});
    transform: translateY(-5px) scale(1.8) rotate(calc(-5deg * ${calcBase}));
  }
  30% {
    background-image: url(${gueio3});
    transform: translateY(-5px) scale(1.8) rotate(calc(-5deg * ${calcBase}));
  }
  35% {
    background-image: url(${gueio2});
    transform: translateY(-10px) scale(1.8) rotate(calc(-5deg * ${calcBase}));
  }
  40% {
    background-image: url(${gueio1});
    transform: translateY(-10px) scale(1.8) rotate(calc(-2.5deg * ${calcBase}));
  }
  45% {
    background-image: url(${gueio2});
    transform: translateY(-10px) scale(1.8);
  }
  50% {
    background-image: url(${gueio3});
    transform: translateY(-10px) scale(1.8);
  }
  55% {
    background-image: url(${gueio2});
    transform: translateY(-10px) scale(1.8);
  }
  60% {
    background-image: url(${gueio1});
    transform: translateY(-10px) scale(1.8);
  }
  65% {
    background-image: url(${gueio2});
    transform: translateY(-10px) scale(1.8);
  }
  70% {
    background-image: url(${gueio3});
    transform: translateY(-10px) scale(1.8);
  }
  75% {
    background-image: url(${gueio2});
    transform: translateY(-10px) scale(1.8);
  }
  80% {
    background-image: url(${gueio1});
    transform: translateY(-10px) scale(1.8);
  }
`;

export const Wrapper = styled.figure`
  position: relative;
  top: 6px;
  width: 23px;
  height: 19px;
  background-image: url(${gueio1});
  transform: scale(1.8);
  animation: ${voante} 3s linear infinite;
`;
