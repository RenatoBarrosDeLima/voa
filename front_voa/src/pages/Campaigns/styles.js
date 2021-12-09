import styled from "styled-components";

export const Container = styled.div`
    margin-top: 80px;
    display: grid;
    gap: 2rem;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: minmax(250px, 300px);
    justify-content: center;
    gap: 2rem;
    margin: 2rem;

    @media screen and (min-width: 650px) {
      grid-template-columns: repeat(2, minmax(250px, 300px));
    }

    @media screen and (min-width: 960px) {
      grid-template-columns: repeat(3, minmax(250px, 300px));
    }

    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(250px, 300px));
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: repeat(5, minmax(250px, 300px));
    }
`;

export const Body = styled.div`
    box-shadow: 0rem 0.125rem 0.5rem 0rem #b0bec5;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.img`
    width: 100%;
    margin-top: 0px;
    transition: all 0.5s ease 0;

    :hover {
      filter: grayscale(1);
    }
`;

export const TextH1 = styled.h1`
    font-size: 15px;
    margin: 10px;
`;

export const TextP = styled.p`
    line-height: 1.3;
    margin: 10px;
    font-size: 13px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #651fff;
    padding: 1rem;
    cursor: pointer;
`;


