import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// HOOKS
import { useAuth } from '../../hooks/useAuth';

// COMPONENTES CUSTOMIZADOS
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
  const history = useHistory();
  const { getAuth, isAuthenticated, removeAuth } = useAuth();
  const user = getAuth();

  const handleLogout = () => {
    removeAuth();
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Items>
          <Left>
            <div style={{ display: 'inline-block', maxWidth: '100%', overflow: 'hidden', position: 'relative', boxSizing: 'border-box', margin: '0px' }}>
              <img style={{ maxWidth: '100%', display: 'block', margin: '0px', border: 'none', padding: '0px' }} src={"https://voaa.me/_next/image?url=%2Fimages%2Fheader-logo.svg&w=256&q=75"} />
            </div>
          </Left>
          <Center>
            <Ul>
              <div>
                <Li>
                  <Link to="/">
                    <LinkP> Home </LinkP>
                  </Link>
                </Li>
              </div>

              {user?.admin == 1 && (
                <div>
                  <Link to="/criar-campanha">
                    <Li>
                      <LinkP> Criar Campanha </LinkP>
                    </Li>
                  </Link>
                </div>
              )}

              {user?.admin == 1 && (
                <div>
                  <Link to="/minhas-campanhas">
                    <Li>
                      <LinkP> Minhas Campanhas </LinkP>
                    </Li>
                  </Link>
                </div>
              )}

              {isAuthenticated() && (
                <div>
                  <Link to="/minhas-doacoes">
                    <Li>
                      <LinkP> Minhas doações </LinkP>
                    </Li>
                  </Link>
                </div>
              )}

              {isAuthenticated() && (
                <div>
                  <Li>
                    <LinkP onClick={() => handleLogout()}> Sair </LinkP>
                  </Li>
                </div>
              )}

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
