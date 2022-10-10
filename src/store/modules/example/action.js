import * as types from '../types'

export function ClickButtonRequest(){
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  }
}

export function ClickButtonSuccess(){
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  }
}

export function ClickButtonFailure(){
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  }
}
