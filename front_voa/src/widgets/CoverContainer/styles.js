import styled from "styled-components";

export const Container = styled.div`
    * {
        box-sizing: border-box;
    }
    width: 100%;
    position: relative;
`;

export const TextH1 = styled.h1`
    width: 100%;
    position: absolute;
    bottom: 30px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 22px;
    letter-spacing: -0.44px;
    padding: 0px 40px;
`;

export const MainImage = styled.div`
    /* display: grid; */
    width: 100%;
    height: 480px;
    background: linear-gradient(270deg, rgba(123, 9, 126, 0.2), rgba(204, 53, 119, 0.35)) center center / cover;
    background-blend-mode: darken, soft-light, lighten;
`;

export const DivImageExterna = styled.div`
    display: contents;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0;
`;

export const DivImageInterna = styled.div`
    box-sizing: border-box;
    display: block;
    max-width: 100%;
`;

export const Image1 = styled.img`
    max-width: 100%;
    display: contents;
    margin: 0;
    border: none;
    padding: 0;
    z-index:-1;
    width: 100%;
    height: 80vw;
    max-height: 480px;
    object-fit: cover;
`;

export const Image2 = styled.img`
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    filter: none;
    background-size: cover;
    background-image: none;
    background-position: 0% 0%;
    z-index: -1;
`;

export const StoriesContainer = styled.div`
    display: flex;
    width: 100%;
    position: absolute;
    bottom: -25px;
    text-align: center;
    justify-content: center;
`;

export const Link = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0px;
    display: flex;
    justify-content: center;
    width: 75%;
    max-width: 300px;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border-radius: 50px;
    font-size: 16px;
    background-color: rgb(140, 30, 126);
    color: rgb(247, 248, 250);
    border: none;
    outline: none;
    cursor: pointer;
    background-image: linear-gradient(122deg, rgb(204, 53, 119), rgb(247, 147, 30));
`;

