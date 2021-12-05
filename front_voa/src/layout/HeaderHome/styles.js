import styled from "styled-components";

export const Container = styled.div`
  display: block;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Items = styled.header`
    background-color: rgb(255, 255, 255);
    height: 80px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 10px 20px;
    top: 0px;
    z-index: 100;
    animation-name: koBvbn;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    box-sizing: border-box;

    a{
      color: inherit;
      text-decoration: none;
    }
`;

export const Left = styled.a`
    color: inherit;
    text-decoration: none;
`;

export const Center = styled.nav`
    background: rgb(255, 255, 255);
    text-align: left;
    top: 0px;
    left: 0px;
    z-index: 9;
    overflow: hidden;
    position: relative;
    height: initial;
    width: 100%;
    max-width: 100%;
    transform: none;
    padding: 0px;
    box-shadow: none;
`;

export const Ul = styled.ul`
    display: flex !important;
    flex-flow: row wrap;
    list-style-type: none;
    padding: 0px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;

export const Li = styled.li`
    padding-left: 0px;
    margin-left: 20px;
    height: 20px;
    border-bottom: 2px solid transparent;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
`

export const LinkP = styled.a`
    color: rgb(123, 9, 126) !important;
    text-decoration: none;
    transition: color 0.3s linear 0s;
    font-size: 16px;
`;

export const Rigth = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(140, 30, 124);
    font-weight: bold;
    margin-right: 43px;
    z-index: 100;
`;

export const Button = styled.button`
    border: 0px;
    padding: 0px;
    margin: 0px;
    background-color: transparent;
    font-size: 15px;
    color: rgb(140, 30, 124);
    font-weight: bold;
`
