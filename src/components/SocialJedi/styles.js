import styled from 'styled-components';

export const Content = styled.figcaption`
  transform: translate(-24px,5px);
`

export const Wrapper = styled.figure`
  display: flex;
  transform: translateX(30px);

  &:not(:last-child) {
    margin-right: 22px;
  }

  &:last-child {
    margin-right: 5px;
  }
`;