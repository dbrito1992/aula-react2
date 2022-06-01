import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }
  body{
    font-family: sans-serif;
  }
  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
`;

export const Container = styled.section`
  background: #fff;
  max-width: 360px;
  padding: 10px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
