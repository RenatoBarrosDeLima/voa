import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';

import {
  Container,
  Content,
  TitleContent,
  TextH4Content,
  Form,
  DivInput,
  InputName,
  LabelInput,
  TextSpanInput,
  PasswordWrapper,
  IconVisible,
  Image,
  GroupButtons,
  ButtonSign,
  Sign,
  ButtonRegister,
  TextP,
  Register
} from './styles';

const Login = () => {
  const history = useHistory()
  const { onAddToAuth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  }

  const handleSign = () => {
    setLoading(true);

    if (email == '' || password == '') {
      return window.alert('Informe Email e Senha para continuar!');
    }

    api.post("/tokens/login", {
      email,
      password,
    })
      .then(response => {
        onAddToAuth(response.data)
        history.goBack();
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Email ou Senha incorreto!');
      })
  }

  return (
    <Container>
      <Loading loading={loading} />

      <Header />
      <Content>
        <TitleContent>
          <TextH4Content>
            Faça login para Continuar
          </TextH4Content>
        </TitleContent>

        <Form>
          <div>
            <DivInput>
              <InputName onChange={(e) => setEmail(e.target.value)} type="email" />
              <LabelInput>
                <TextSpanInput>E-mail </TextSpanInput>
              </LabelInput>
            </DivInput>
          </div>

          <div>
            <PasswordWrapper>
              <DivInput>
                <InputName onChange={(e) => setPassword(e.target.value)} type={visible ? 'text' : 'password'} />
                <LabelInput>
                  <TextSpanInput>Senha </TextSpanInput>
                </LabelInput>
                <IconVisible onClick={() => handleVisible()}>
                  <Image src={visible ? 'https://voaa.me/icons/invisible.svg' : 'https://voaa.me/icons/view.svg'} />
                </IconVisible>
              </DivInput>

            </PasswordWrapper>
          </div>
        </Form>

        <GroupButtons>
          <ButtonSign>
            <Sign onClick={() => handleSign()}>
              ENTRAR
            </Sign>
          </ButtonSign>

          <ButtonRegister>
            <TextP>
              Novo por aqui?
            </TextP>
            <Link to="/cadastro">
              <Register>
                Cadastre-se
              </Register>
            </Link>
          </ButtonRegister>
        </GroupButtons>


      </Content>
    </Container>
  )
}

export default Login;
