import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import { ExcludeButton , Container, ConfirmExclude, ButtomConfirm, ButtomCancel } from './styled';
import Loading from "../Loading";
import axios from '../../services/axios';
import * as actions from '../../store/modules/auth/actions';

export default function Exclude(){
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteAsk = e =>{
    const confirmDelete = e.currentTarget.nextSibling;
    confirmDelete.style.display = 'flex';
  }

  const handleConfirm = async e =>{
    e.preventDefault();
    const confirmDelete = e.target.parentElement.parentElement.parentElement;
    try{
      setIsLoading(true);
      await axios.delete('/users');
      dispatch(actions.loginFailure());
      confirmDelete.style.display = 'none';
      setIsLoading(false);
      toast.success('Usuario excluido com sucesso!');

    } catch(err) {
      setIsLoading(false);
      console.log(err);
    }
  }
  const handleCancel = e =>{
    e.preventDefault();
    const confirmDelete = e.target.parentElement.parentElement.parentElement;
    confirmDelete.style.display = 'none';

  }

  return(
    <>
    < Loading isLoading={isLoading} />
    <ExcludeButton onClick={handleDeleteAsk}>
    < FaTrash size={24} />
    </ ExcludeButton>


    <Container>
      <ConfirmExclude>
        <span> Tem certeza que deseja Excluir o contato?</span>
        <div>
          <ButtomConfirm onClick={handleConfirm} to='/login/'> Confirmar </ButtomConfirm>
          <ButtomCancel onClick={handleCancel} to='/register/'> Cancelar </ButtomCancel>
        </div>
      </ConfirmExclude>
    </Container>
    </>
  )
}
