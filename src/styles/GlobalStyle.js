import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/color';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
  }
  body{
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor};
  }
  html, body, #root{
    height: 100%;
  }
  button{
    cursor: pointer;
    background: ${primaryColor};
    color: #fff;
    padding: 10px 20px;
    border: none;
    font-weight: 700;
    border-radius: 4px;
  }
  a{
    text-decoration: none;
    color: ${primaryColor};
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
