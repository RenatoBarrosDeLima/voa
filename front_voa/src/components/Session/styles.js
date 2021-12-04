import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    overflow-y: auto;

    @media only screen and (min-width: 1000px){
      width: 70rem;
    }
`;

export const TextH2 = styled.h2`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    font-size: 22px;
    letter-spacing: 0px;
    z-index: 10;
    line-height: 30px;
    color: rgb(132, 42, 136);
`;
