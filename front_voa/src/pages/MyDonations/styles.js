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
`;

export const TextH1 = styled.h1`
    font-size: 18px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    color: rgb(132, 42, 136);
    padding-right: 10px;
    margin-bottom: 0px;
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

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    font-size: 20px;
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
`;

export const Label = styled.label`
    margin-right: 20px;
`;

export const GridFilter = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const Checkbox = styled.input`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;

export const ButtonExport = styled.button`
    border-radius: 5px;
    background: #fff;
`;

export const Span = styled.span`
    text-align: center;
`;

export const Export = styled.div`
    display: grid;
    margin-right: 10px;
`;
