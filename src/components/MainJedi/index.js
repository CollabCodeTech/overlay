import styled from 'styled-components';
import { BarJedi } from '../BarJedi';

export const MainJedi = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  border-left: 6px solid var(--color-gueio-primary);
  color: white;

  & > ${BarJedi} {
    display:flex;
    justify-content: space-between;
    position: absolute;
    opacity: 1;
    width: calc(100% - 455px);
    height: 65px;
    left: -4px;
    bottom: -4px;
  }

  & .nes-icon {
    transform: scale(2) translateY(-2px);
  }
`