import styled from "styled-components";

export const GridButtonFinish = styled.div`
    width: 100%;
    box-sizing: border-box;
    flex: 1 0 auto;
    display: flex;
    margin-top: 2px;

    @media only screen and (min-width: 1000px) {
        flex: 0 0 100%;
        width: 100%;
    }

    @media only screen and (min-width: 800px) {
        flex: 0 0 100%;
        width: 100%;
    }

    @media only screen and (min-width: 0px) {
        flex: 0 0 100%;
        width: 100%;
    }
`;

export const GridRowButtonFinish = styled.div`
    padding: 50px 20px 90px;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: 0px -10px;

`;

export const GridColButtonFinish = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px 10px;
    margin-top: 10px;

    @media only screen and (min-width: 1000px) {
        flex: 0 0 100%;
        width: 100%;
    }


    @media only screen and (min-width: 800px) {
        flex: 0 0 100%;
        width: 100%;
    }


    @media only screen and (min-width: 0px) {
        flex: 0 0 100%;
        width: 100%;
    }
`;

export const ButtonFinish = styled.a`
    text-decoration: none;
    margin-bottom: 10px;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border-radius: 50px;
    font-size: 16px;
    width: 100%;
    max-width: 300px;
    font-weight: 600;
    color: rgb(247, 248, 250);
    border: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(263deg, rgb(171, 49, 101) 10%, rgb(125, 42, 138) 100%);
    background-color: rgb(123, 9, 126);
    box-shadow: rgb(125 42 138 / 30%) 0px 12px 30px 0px;

    @media (min-width: 600px)  {
        max-width: 400px;
        margin: 0px auto;
    }
`;

export const TextPFinish = styled.p`
    font-size: 14px;
    color: rgb(247, 248, 250);
    margin: 0px auto;
    font-weight: 600;
    letter-spacing: 1.4px;
`;
