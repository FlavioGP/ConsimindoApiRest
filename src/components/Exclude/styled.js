import styled from "styled-components";
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors'


export const ExcludeButton = styled.div`
  position: absolute;
  right: 40px;
  top: 30px;
  cursor: pointer;
  color: ${colors.primaryColor};
`;



export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
  display: none;
  justify-content: center;
  align-items: center;
  transition: all .4s;

`;

export const ConfirmExclude = styled.div`
  width: 350px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  span{
    font-size: 20px;
  }

  a{
    width: 100px;
    padding: 10px;
    color: #fff;
    border-radius: 10px;
  }

`
export const ButtomConfirm = styled(Link)`
  background-color: ${colors.excludeColor};
`

export const ButtomCancel = styled(Link)`
  background-color: #bbb;


`
