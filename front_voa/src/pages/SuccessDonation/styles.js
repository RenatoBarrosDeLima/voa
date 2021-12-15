import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: fixed;
`;

export const Card = styled.div`
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #C8D0D8;
    display: inline-block;
    margin: 0 auto;
`;

export const ContentIcon = styled.div`
    border-radius:200px;
    height:200px;
    width:200px;
    background: #F8FAF5;
    margin:0 auto;
`;

export const Icon = styled.i`
    color: #9ABC66;
    font-size: 100px;
    line-height: 200px;
    margin-left:-15px;
`;

export const TextH1 = styled.h1`
    color: #88B04B;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
`;

export const TextP = styled.p`
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size:20px;
    margin: 0;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: center;
    margin-top: 20px;
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
