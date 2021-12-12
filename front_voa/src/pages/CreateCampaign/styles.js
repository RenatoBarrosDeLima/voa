import styled from "styled-components";

export const Container = styled.div`
    margin: 50px 80px 50px 80px;
    display: grid;
    gap: 2rem;
`;

export const Form = styled.form`
    margin-top: 80px;
    display: grid;
    gap: 2rem;
`;

export const Button = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1.4px;
    width: 10vw;
    text-decoration: none;
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

