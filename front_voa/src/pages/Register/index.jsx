import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// API
import api from '../../services/api';

// HOOKS
import { useAuth } from '../../hooks/useAuth';

// COMPONENTES
import Header from '../../layout/Header';
import Loading from '../../components/LoadingScreen';

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
  const history = useHistory()
  const { onAddToAuth } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telephone, setTelephone] = useState('');
  const [admin, setAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleRegister = () => {

    if (name == '' || email == '' || cpf == '' || password == '') {
      return window.alert('Informe Nome, Email, CPF e Senha para continuar!');
    }

    setLoading(true);

    const body = {
      name: name,
      email: email,
      cpf: cpf,
      telephone: telephone,
      password: password,
      admin: admin ? 1 : 0
    }

    api.post("/users/", {
      ...body
    })
      .then(response => {
        onAddToAuth(response.data)
        history.push('/');
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        return window.alert('Ocorreu um erro, tente novamente');
      })


  }

  return (
    <Container>
      <Loading loading={loading} />
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
