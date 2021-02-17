import styled from 'styled-components';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
 /* background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};  */
 background: #CD853F; 
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  transform: translateX(15%);
  max-width:200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 14px 24px;
  color: #000d1a;
  font-size: ${({ big }) => (big ? '30px' : '15px')};

  /* &:hover {
      transform: translateY(-2px);
  } */
`;
