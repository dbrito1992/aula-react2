import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Paragrafo = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;
