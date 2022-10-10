import React from "react";
import {useDispatch} from 'react-redux';

import { Container } from '../../styles/GlobalStyles'
import { Title, Paragraph } from './styled'
import * as exampleActions from '../../store/modules/example/action'


export default function Login(){
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.ClickButtonRequest());
  }

  return(
    <Container>
      <Title>
        Login
        <small> Oie</small>
      </Title>
      <Paragraph> Lorem ipsum dolor sit amet, consectetaur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Paragraph>
      <button type="button" onClick={handleClick}> Enviar </button>
    </Container>
  );
}
