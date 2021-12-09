import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
`;

export const Content = styled.div`
    padding-top: 80px;
`;

export const Body = styled.div`
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    overflow-y: auto;

    @media only screen and (min-width: 1000px) {
        width: 70rem;
    }
`;

export const GridTitle = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const GridTitleCenter = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
`;

export const TextH1 = styled.h1`
    font-size: 18px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    color: rgb(132, 42, 136);
    padding-right: 10px;
`;

export const TextP = styled.p`
    font-size: 16px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 300;
    color: rgb(132, 42, 136);
`;

export const GridRow = styled.div`
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
`;

export const Image = styled.img`
    width: 78px;
    height: 78px;
    border-radius: 50%;
    object-fit: cover;
`;

export const Info = styled.div`
    display: flex;
    -webkit-box-align: center;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const TextH3 = styled.h3`
    margin: 0px;
    line-height: normal;
    font-size: 18px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    color: rgb(132, 42, 136);
`;

export const TextH4 = styled.h4`
    margin: 0px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 300;
    color: rgb(72, 72, 72);
    line-height: normal;
`;

export const TextH5 = styled.h5`
    margin: 0px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 300;
    font-size: 14px;
    color: rgb(164, 164, 164);
    line-height: normal;
`;

export const Division = styled.div`
    height: 1px;
    width: 90%;
    margin: 15px 0px 10px 9%;
    background-color: rgb(227, 227, 227);
`;


