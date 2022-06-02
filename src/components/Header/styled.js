import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px 0;
    color: #fff;
    font-weight: bold;
  }
`;
