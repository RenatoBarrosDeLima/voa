import styled from "styled-components";

export const ValuesContainer = styled.div`
    margin: 10px -8px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

export const CardValue = styled.div`
    background-color: rgb(245, 242, 247);
    border: 1.5px solid rgba(113, 113, 117, 0.2);
    font-size: 16px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 300;
    color: rgb(0, 0, 0);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
    width: 31.1%;
    height: 60px;
    float: left;
    margin: 0px 1% 2% 0px;
`;

export const Input = styled.input`
    height: 52px;
    background-color: rgb(245, 242, 247);
    border: 1.5px solid rgba(113, 113, 117, 0.2);
    font-size: 16px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 300;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    margin: 0px 2% 0px 0px;
    text-align: center;
    color: rgb(204, 53, 119);
`;
