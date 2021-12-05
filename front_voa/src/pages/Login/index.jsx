import React, { useState } from 'react';

import Header from '../../layout/HeaderHome';

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

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  }

  return (
    <Container>
      <Header />
      <Content>
        <TitleContent>
          <svg alt="voltar" width="12" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9.6a1.2 1.2 0 0 1 .352-.852l7.393-7.396a1.202 1.202 0 1 1 1.7 1.7L3.906 9.6l6.541 6.537a1.202 1.202 0 0 1-1.7 1.7l-7.395-7.39A1.2 1.2 0 0 1 1 9.6v0z" fill="#CC3577" stroke="#CC3577" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <TextH4Content>
            Faça login para Continuar
          </TextH4Content>
        </TitleContent>

        <Form>
          <div>
            <DivInput>
              <InputName type="email" />
              <LabelInput>
                <TextSpanInput>E-mail </TextSpanInput>
              </LabelInput>
            </DivInput>
          </div>

          <div>
            <PasswordWrapper>
              <DivInput>
                <InputName type={visible ? 'text' : 'password'} />
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
            <Sign>
              ENTRAR
            </Sign>
          </ButtonSign>

          <ButtonRegister>
            <TextP>
              Novo por aqui?
            </TextP>
            <Register>
            Cadastre-se
            </Register>
          </ButtonRegister>
        </GroupButtons>


      </Content>
    </Container>
  )
}

export default Login;
