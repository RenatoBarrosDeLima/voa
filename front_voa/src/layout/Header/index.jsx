import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Content,
  Items,
  Left,
  Center,
  Ul,
  Li,
  LinkP,
  Rigth,
  Button
} from './styles'

const Header = () => {
  const { getAuth, isAuthenticated } = useAuth();

  return (
    <Container>
      <Content>
        <Items>
          <Left href="#">
            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
              <img style={{ maxWidth: '100%', display: 'block', margin: '0px', border: 'none', padding: '0px' }} src={"https://voaa.me/_next/image?url=%2Fimages%2Fheader-logo.svg&w=256&q=75"} />
            </div>
          </Left>
          <Center>
            <Ul>
              <div>
                <Li>
                  <Link to="/">
                    <LinkP href="#"> Home </LinkP>
                  </Link>
                </Li>
              </div>

              <div>
                <Li>
                  <LinkP href="#"> Sobre a VOAA </LinkP>
                </Li>
              </div>

              <div>
                <Li>
                  <LinkP href="#"> Central de ajuda </LinkP>
                </Li>
              </div>

              <div>
                <Li>
                  <LinkP href="#"> Envie sua história </LinkP>
                </Li>
              </div>

            </Ul>
          </Center>
          <Rigth>
            {isAuthenticated() ? (
              <Button> {getAuth()?.name} </Button>
            ) :
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            }
          </Rigth>
        </Items>
      </Content>
    </Container>
  )
}

export default Header;
