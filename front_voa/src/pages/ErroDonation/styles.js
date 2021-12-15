import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    height: 100vh;

    @keyframes floating {
      from {
        transform: scale(1.4) translate(0, 0);
      }

      50% {
        transform: scale(1.4) translate(0, 15px);
      }

      to {
        transform: scale(1.4) translate(0, 0);
      }
    }

`;

export const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    max-width: 520px;
    width: 100%;
    text-align: center;
    line-height: 1.4;
`;

export const Erro = styled.div`
    height: 190px;

    @media only screen and (max-width: 767px) {
      height: 115px;
    }
`;

export const TextH1 = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-size: 146px;
    font-weight: 700;
    margin: 0px;
    color: #232323;

    span {
      display: inline-block;
      width: 120px;
      height: 120px;
      background-image: url("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/mozilla/36/pensive-face_1f614.png");
      background-size: cover;
      -webkit-transform: scale(1.4);
      -ms-transform: scale(1.4);
      transform: scale(1.4);
      z-index: -1;
      animation-name: floating;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    @media only screen and (max-width: 767px) {
      font-size: 86px;

      span {
        width: 86px;
        height: 86px;
      }
    }
`;

export const TextH2 = styled.h2`
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
    color: #232323;
`;

export const TextP = styled.p`
    font-family: "Montserrat", sans-serif;
    color: #787878;
    font-weight: 300;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: center;
`;

export const Button = styled.a`
    text-decoration: none !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1.4px;
    width: 10vw;
    height: 35px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border-radius: 50px;
    max-width: 300px;
    color: rgb(247, 248, 250);
    background-image: linear-gradient(263deg, rgb(171, 49, 101) 10%, rgb(125, 42, 138) 100%);
    background-color: rgb(123, 9, 126);
    box-shadow: rgb(125 42 138 / 30%) 0px 12px 30px 0px;

    :hover {
      color: #fff;
      box-shadow: 0px 0px 4px 4px  #e0abff;
      transform: translateY(-1px);
    }
`;

