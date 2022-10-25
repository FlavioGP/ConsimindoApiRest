import React ,{ useState, useEffect } from "react";
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import axios from '../../services/axios';
import history from '../../services/history';
import { Container } from '../../styles/GlobalStyles'
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }){
  const dispatch = useDispatch();

  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(!id) return;

    async function getData(){
      try{
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        // const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setIdade(data.idade);
        setEmail(data.email);
        setAltura(data.altura);
        setPeso(data.peso);

        setIsLoading(false);
      } catch(err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if(status === 400) {
          errors.map(error => toast.error(error))
          history.push('/');
        }
      }
    }

    getData();

  }, [id]);

  const handleSubmit = async e => {
    let formErrors = false;

    e.preventDefault();

    if(nome.length < 3 || nome.length > 255){
      formErrors = true;
      toast.error('O nome precisa ter entre 3 e 255 caracteres');
    }

    if(sobrenome.length < 3 || sobrenome.length > 255){
      formErrors = true;
      toast.error('O sobrenome precisa ter entre 3 e 255 caracteres');
    }

    if(!isEmail(email)){
      formErrors = true;
      toast.error('E-mail inválido');
    }

    if(!isInt(String(idade))){
      formErrors = true;
      toast.error('idade inválida');
    }

    if(!isFloat(String(peso))){
      formErrors = true;
      toast.error('Peso inválido');
    }

    if(!isFloat(String(altura))){
      formErrors = true;
      toast.error('Altura inválida');
    }

    if(formErrors) return;

    try {
      setIsLoading(true);
      if(id){
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          idade,
          email,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso')
      } else {
        const { data } = await axios.post(`/alunos/`, {
          nome,
          sobrenome,
          idade,
          email,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso')
        history.push(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch(err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);
      if(errors.length > 0){
        errors.map(error => toast.error(error));
      } else {
        toast.error('erro desconhecido');
      }
      if(status === 401) dispatch(actions.loginFailure());
    }
  }

  return(
    <Container>
      < Loading isLoading={isLoading}/>
      <h1>{ id ? 'Editar Aluno' : 'Novo Aluno' }</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={e => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="number"
          value={idade}
          onChange={e => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={altura}
          onChange={e => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <input
          type="text"
          value={peso}
          onChange={e => setPeso(e.target.value)}
          placeholder="Peso"
        />

        <button type="submit">{id ? 'Atualizar Aluno' : 'Cadastrar Aluno'}</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape( {} ).isRequired,
}
