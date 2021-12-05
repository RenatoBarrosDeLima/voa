import React, { useState } from 'react';

import Header from '../../layout/Header';

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

  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
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
              <Input type='text' />
              <LabelInput>
                <TextSpanInput>
                  Seu nome
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input type='email' />
              <LabelInput>
                <TextSpanInput>
                  E-mail*
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input type='number' />
              <LabelInput>
                <TextSpanInput>
                  CPF
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input type='text' />
              <LabelInput>
                <TextSpanInput>
                  Telefone
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input type='number' />
              <LabelInput>
                <TextSpanInput>
                  CEP
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerInput>
              <Input type='text' />
              <LabelInput>
                <TextSpanInput>
                  Número
                </TextSpanInput>
              </LabelInput>
            </ContainerInput>
          </ContentForm>

          <ContentForm>
            <ContainerPassword>
              <ContainerInput>
                <Input type={visible ? 'text' : 'password'} />
                <LabelInput>
                  <TextSpanInput>
                    Senha
                  </TextSpanInput>
                </LabelInput>
                <IconVisible onClick={() => handleVisible()}>
                  <Image src={visible ? 'https://voaa.me/icons/invisible.svg' : 'https://voaa.me/icons/view.svg'} />
                </IconVisible>
              </ContainerInput>
            </ContainerPassword>
          </ContentForm>

          <ContainerButton>
            <ButtonFinish>
              Cadastrar
            </ButtonFinish>
          </ContainerButton>
        </Form>
      </Content>
    </Container>
  )
}

export default Register;
