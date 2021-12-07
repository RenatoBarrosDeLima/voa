import React, { useState } from 'react';

// API
import api from '../../services/api';

// HOOKS
import { useAuth } from '../../hooks/useAuth';

// COMPONENTES
import Header from '../../layout/Header';

// COMPONENTES CUSTOMIZADOS
import {
  Container,
  Content,
  TitleContainer,
  TextH1Title,
  SubTitleContainer,
  TextPSubTitle,
  Form,
  ContentForm,
  ContainerInput,
  Input,
  LabelInput,
  TextSpanInput,
  ContainerPassword,
  IconVisible,
  Image,
  ContainerButton,
  ButtonFinish
} from './styles';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);


  const handleRegister = () => {
    console.log('name ', name);
    console.log('email ', email);
    console.log('cpf ', cpf);
    console.log('telephone ', telephone);
    console.log('admin ', admin);
    console.log('password ', password);
    console.log('visible ', visible);

    if (name == '' || email == '' || cpf == '' || password == '') {
      return window.alert('Informe Nome, Email, CPF e Senha para continuar!');
    }


  }

  return (
    <Container>
      <Header />
      <Content>
        <TitleContainer>
          <TextH1Title>
            Cadastre-se na VOAA
          </TextH1Title>
        </TitleContainer>

        <SubTitleContainer>
          <TextPSubTitle>
            Por favor preencha os campos abaixo
          </TextPSubTitle>
        </SubTitleContainer>

        <Form>
          <ContentForm>
            <ContainerInput>
              <Input onChange={(e) => setName(e.target.value)} type="text" />
              <LabelInput>
                <TextSpanInput>
                  Seu nome
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input onChange={(e) => setEmail(e.target.value)} type="email" />
              <LabelInput>
                <TextSpanInput>
                  E-mail*
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input onChange={(e) => setCpf(e.target.value)} type="number" />
              <LabelInput>
                <TextSpanInput>
                  CPF
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input onChange={(e) => setTelephone(e.target.value)} type='text' />
              <LabelInput>
                <TextSpanInput>
                  Telefone
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerPassword>
              <ContainerInput>
                <Input onChange={(e) => setPassword(e.target.value)} type={visible ? 'text' : 'password'} />
                <LabelInput>
                  <TextSpanInput>
                    Senha
                  </TextSpanInput>
                </LabelInput>
                <IconVisible onClick={() => setVisible(!visible)}>
                  <Image src={visible ? 'https://voaa.me/icons/invisible.svg' : 'https://voaa.me/icons/view.svg'} />
                </IconVisible>
              </ContainerInput>
            </ContainerPassword>
          </ContentForm>

          <ContentForm>
            <ContainerPassword>
              <ContainerInput style={{ height: '60px' }}>
                <TextSpanInput> ADMIN? </TextSpanInput>
                <Input onChange={(e) => setAdmin(!admin)} type='checkbox' />
              </ContainerInput>
            </ContainerPassword>
          </ContentForm>

          <ContainerButton>
            <ButtonFinish onClick={() => handleRegister()}> Cadastrar </ButtonFinish>
          </ContainerButton>
        </Form>
      </Content>
    </Container>
  )
}

export default Register;
