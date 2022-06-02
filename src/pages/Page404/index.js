import React from 'react';
import { Error404 } from './styled';
import { Container } from '../../styles/GlobalStyle';

export default function Page404() {
  return (
    <Container>
      <Error404>Página não existe!!</Error404>
    </Container>
  );
}
