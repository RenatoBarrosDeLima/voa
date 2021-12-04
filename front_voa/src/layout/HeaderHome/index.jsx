import React from 'react';

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
  SVG,
  Button
} from './styles'

const Header = () => {
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
                  <LinkP href="#"> Home </LinkP>
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
            <SVG alt="pesquisar" xmlns="http://www.w3.org/2000/svg" width="18.383" height="18.956">
              <g transform="translate(-269.5 -28.5)">
                <circle cx="6.788" cy="6.788" r="6.788" transform="translate(271 30)" style={{ fill: 'none', stroke: 'rgb(140, 30, 126)', strokeWidth: '3px' }}></circle>
                <rect width="6.943" height="3.156" rx="1.578" transform="rotate(45 92.822 361.737)" style={{ fill: 'rgb(140, 30, 126)' }}></rect>
              </g>
            </SVG>
            <Button>Login</Button>
          </Rigth>
        </Items>
      </Content>
    </Container>
  )
}

export default Header;
