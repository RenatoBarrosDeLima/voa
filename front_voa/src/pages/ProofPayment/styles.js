import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
`;

export const Content = styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    overflow-y: auto;

    @media only screen and (min-width: 1000px) {
        width: 70rem;
    }
`;

export const GridRow = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 30px;
    min-height: 823px;
`;

export const TextH2Title = styled.h2`
    font-weight: 700;
    font-size: 26px;
    color: black;
`;

export const Image = styled.img`
    width: 150px;
    height: 150px;
`;

export const TextH2Value = styled.h2`
    color: rgb(204, 53, 119);
    font-weight: 700;
    font-size: 26px;
`;

export const StepArea = styled.div`
    box-sizing: border-box;
`;

export const Step = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const StepCircle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(140, 30, 126);
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    text-align: center;
    display: flex;
    margin-right: 10px;
`;

export const TextH3Step = styled.h3`
    margin: 0px;
    padding: 0px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    text-align: center;
    font-size: 20px;
`;

export const StepText = styled.div`
    width: 80%;
`;

export const TextPStep = styled.p`
    text-align: left;
    font-size: 14px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 400;
    color: black;
    margin: 0px;
    padding: 0px;
    letter-spacing: -0.4px;
`;

export const ButtonGoBack = styled.a`
    text-decoration: none;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    background: none rgb(255, 255, 255) !important;
    box-shadow: none !important;
    border: 2px solid rgb(204, 53, 119) !important;
    margin-top: 10px !important;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    font-size: 16px;
    max-width: 300px;
    font-weight: 600;
    color: rgb(247, 248, 250);
    outline: none;
    cursor: pointer;

    :hover {
      color: #fff;
      box-shadow: 0px 0px 4px 4px  #e0abff;
      transform: translateY(-1px);
    }
`;

export const ButtonTextP = styled.p`
    padding: 0px;
    margin: 0px;
    letter-spacing: -0.28px;
    color: rgb(98, 45, 123) !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    text-align: center;
`;


