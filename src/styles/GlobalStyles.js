import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
  }

  html, body, #root{
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul{
    list-style: none;
  }

  body
  .Toastify
  .Toastify__toast-container
  .Toastify__toast--success{
    color: #fff;
    background-color: ${colors.successColor};
  }
  body
  .Toastify
  .Toastify__toast-container
  .Toastify__toast--error{
    color: #fff;
    background-color: ${colors.errorColor};
  }
`;

export const Container = styled.section`
  max-width: 360px;
  margin: 30px auto;
  background: #fff ;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0.1);

`;
