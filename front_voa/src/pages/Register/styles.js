import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;

    @media (min-width: 900px) {
        height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    max-width: 840px;

    @media (min-width: 900px) {
        background-color: rgb(255, 255, 255);
        min-height: calc(100vh - 70px);
        padding: 40px;
    }
`;

export const TitleContainer = styled.div`
    margin-bottom: 10px;
    width: 100%;
    display: flex;

    @media (min-width: 900px) {
        -webkit-box-pack: center;
        justify-content: center;
    }
`;

export const TextH1Title = styled.h1`
    margin: 0px;
    padding: 0px;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.44px;
    line-height: 24px;
    color: rgb(132, 42, 136);
`;

export const SubTitleContainer = styled.div`
    margin-bottom: 20px;
    width: 100%;
    display: flex;

    @media (min-width: 900px) {
        -webkit-box-pack: center;
        justify-content: center;
    }
`;

export const TextPSubTitle = styled.p`
    margin: 0px;
    padding: 0px;
    color: rgb(113, 113, 117);
`;

export const Form = styled.form`
    box-sizing: border-box;
`;

export const ContentForm = styled.div`
    margin-top: 30px;
`;

export const ContainerInput = styled.div`
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    overflow: hidden;
    box-shadow: rgb(62 18 98 / 5%) 0px 10px 20px;
    box-sizing: border-box;
`;

export const Input = styled.input`
   border-bottom: 1px solid rgb(181, 25, 105);
    font-weight: 300;
    padding: 20px 10px 10px;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    outline: none;
    background: rgb(245, 242, 247);
    box-sizing: border-box;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
    color: rgb(113, 113, 117);
    font-size: 1rem;
`;

export const LabelInput = styled.label`
    color: gray;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    pointer-events: none;
    padding-left: 10px;
    padding-top: 15px;
    display: flex;
`;

export const TextSpanInput = styled.span`
    transform: translateY(-60%);
    font-size: 0.7rem;
    /* color: rgb(204, 53, 119); */
    height: max-content;
    transition: all 0.3s ease 0s;
    font-weight: 500;
`;

export const ContainerPassword = styled.div`
    box-sizing: border-box;
`;

export const IconVisible = styled.div`
    cursor: pointer;
    position: absolute;
    width: 40px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    bottom: 8px;
    left: calc(95% - 30px);

    @media (min-width: 700px) {
        left: calc(95% - 10px);
    }

    @media (min-width: 500px) {
        left: calc(95% - 20px);
    }
`;

export const Image = styled.img`
    width: 20px;
    height: 35px;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const ButtonFinish = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 14px;
    letter-spacing: 1.4px;
    text-decoration: none;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    align-items: center;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border-radius: 50px;
    max-width: 300px;
    font-weight: 600;
    color: rgb(247, 248, 250);
    border: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(263deg, rgb(171, 49, 101) 10%, rgb(125, 42, 138) 100%);
    background-color: rgb(123, 9, 126);
    box-shadow: rgb(125 42 138 / 30%) 0px 12px 30px 0px;
`;
