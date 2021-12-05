import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    min-height: 650px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 520px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    min-height: calc(100vh - 80px);

    @media (min-width: 900px) {
        background-color: rgb(255, 255, 255);
        padding-left: 40px;
        padding-right: 40px;
        justify-content: space-around;
    }
`;

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
`;

export const TextH4Content = styled.h4`
    font-size: 26px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 30px;
    color: rgb(132, 42, 136);
`;

export const Form = styled.form`
    box-sizing: border-box;
    display: block;
    margin-top: 0em;
`;

export const DivInput = styled.div`
    position: relative;
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    overflow: hidden;
    box-shadow: rgb(62 18 98 / 5%) 0px 10px 20px;
    box-sizing: border-box;
`;

export const InputName = styled.input`
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
    color: rgb(204, 53, 119);
    height: max-content;
    transition: all 0.3s ease 0s;
    font-weight: 500;
`;

export const PasswordWrapper = styled.div`
    box-sizing: border-box;
`;

export const IconVisible = styled.div`
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

export const GroupButtons = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const ButtonSign = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const Sign = styled.a`
    text-decoration: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 80%;
    font-size: 14px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    padding: 0px;
    letter-spacing: 1.4px;
    height: 55px;
    align-items: center;
    border-radius: 50px;
    max-width: 300px;
    color: rgb(247, 248, 250);
    border: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(263deg, rgb(171, 49, 101) 10%, rgb(125, 42, 138) 100%);
    background-color: rgb(123, 9, 126);
    box-shadow: rgb(125 42 138 / 30%) 0px 12px 30px 0px;
`;

export const ButtonRegister = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const TextP = styled.p`
    font-size: 16px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 500;
    margin: 0px;
    padding: 0px;
    color: rgb(125, 42, 138);
`;

export const Register = styled.a`
    cursor: pointer;
    margin: 0px 0px 0px 5px;
    padding: 0px;
    font-size: 16px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    color: rgb(223, 147, 46);
    font-weight: 700;
`;






