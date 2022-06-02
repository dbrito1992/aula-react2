import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>Hello World!</Title>
      <small>Teste de styled!</small>
      <Paragrafo> ghrdhguidhguidh </Paragrafo>
      <button type="button">Enivar</button>
    </Container>
  );
}
