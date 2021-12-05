import styled from "styled-components";

export const Container = styled.div`
    padding: 0px 0px 75px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 260px;
    margin-top: 45px;
    width: 99%;
`;

export const GridRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: 0px -10px;
`;

export const GridCol = styled.div`
    padding: 0px 10px;
    margin-top: 10px;
    display: flex;
    justify-content: center;


    @media only screen and (min-width: 1000px) {
        flex: 0 0 25%;
        width: 25%;
    }

    @media only screen and (min-width: 800px) {
        flex: 0 0 50%;
        width: 50%;
    }

    @media only screen and (min-width: 0px) {
        flex: 0 0 100%;
        width: 100%;
    }
`;

export const ButtonPix = styled.a`
    text-decoration: none;
    background: transparent;
    border: 1.5px solid rgb(223, 147, 46);
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    max-width: 1000px;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(247, 248, 250);
    outline: none;
    cursor: pointer;
`;
