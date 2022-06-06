import React from 'react';
import { Container } from '../../styles/GlobalStyle';
import { Title } from './styled';

export default function Painel() {
  return (
    <Container>
      <Title isRed={false}>Painel!</Title>
    </Container>
  );
}
