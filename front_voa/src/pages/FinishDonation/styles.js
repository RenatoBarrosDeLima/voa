import styled from "styled-components";

export const Container = styled.div`
    * {
      box-sizing: border-box;
    }
`;

export const Content = styled.div`
    position: fixed;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 1000;
    background-color: rgba(36, 36, 38, 0.6);
    height: 300%;
`;

export const Body = styled.div`
    width: 100vw;
    border-radius: 15px 15px 0px 0px;
    max-width: 600px;
    height: 100%;
    top: 8%;
    background-color: white;
    z-index: 10000;
    overflow-y: scroll;
    position: fixed;
    left: 0px;
    padding-top: 20px;

    @media (min-width: 600px) {
        top: 0px;
        border-radius: 0px;
        position: fixed;
        max-width: 100%;
        height: 100%;
        animation-name: none;
    }
`;

export const GridContainer = styled.div`
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

export const GridHeade = styled.div`
    height: 40px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`;

export const ButtonA = styled.a`
    color: inherit;
    text-decoration: none;

    @media (min-width: 600px) {
        max-width: 400px;
        margin: 0px auto;
    }
`;

export const TextP = styled.p`
    margin: 0px;
    font-size: 22px;
    color: rgb(132, 42, 136);
    font-weight: 700;
`;

export const GridRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: 0px -5px;
`;

export const GridCol = styled.div`
    padding: 0px 5px;
    margin-top: 5px;

    @media only screen and (min-width: 1000px) {
        flex: 0 0 100%;
        width: 100%;
    }

    @media only screen and (min-width: 800px) {
        flex: 0 0 100%;
        width: 100%;
    }

    @media only screen and (min-width: 0px)  {
        flex: 0 0 100%;
        width: 100%;
    }
`;

export const GridColFlex = styled.div`
    flex: 1 1 0%;
`;

export const GridColIncolumn = styled.div`
    margin-top: 20px;
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const GridColInline = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const GridColInlineLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const Image = styled.img`
    width: 120px;
    height: 100px;
    border-radius: 12px;
    object-fit: cover;
    margin-right: 10px;
`;

export const GridColInlineLeftDescription = styled.div`
    height: 100px;
    justify-content: center;
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const TextH6Description = styled.h6`
   color: rgb(98, 45, 123);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    margin: 0px 0px 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const TextH6Value = styled.h6`
    color: rgb(204, 53, 119);
    font-size: 16px;
    margin: 0px;
    font-weight: bolder;
`;

export const GridColInlineRigth = styled.div`
    justify-content: space-between;
    display: flex;
    -webkit-box-align: center;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const ButtonEdit = styled.button`
    margin-bottom: 10px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 12px;
    border: 1.5px solid rgba(113, 113, 117, 0.2);
`;

export const ButtonDelete = styled.button`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 12px;
    border: 1.5px solid rgba(113, 113, 117, 0.2);
`;

export const ColBorder = styled.div`
    border-style: solid;
    border-color: rgba(113, 113, 117, 0.15);
    border-image: initial;
    border-width: 1px 0px;
    padding: 20px 5px;
    margin: 30px 0px 20px;
`;

export const TextH4Resumn = styled.h4`
    color: rgb(98, 45, 123);
    font-weight: 600;
    font-size: 18px;
    margin: 0px;
    line-height: 30px;
`;

export const GridColInlineLeftResumn = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const TextH4ResumnDescription = styled.h4`
    color: rgb(48, 48, 48);
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
    line-height: 30px;
`;

export const TextH4ResumnValue = styled.h4`
    color: rgb(48, 48, 48);
    font-weight: 600;
    font-size: 16px;
    margin: 0px;
    line-height: 30px;
`;

export const GridColInlineTotal = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const TextH4Total = styled.h4`
    font-size: 18px;
    padding: 0px 5px;
    font-weight: 700;
    color: rgb(98, 45, 123);
    margin: 0px;
    line-height: 30px;
`;

export const TextH4ValueTotal = styled.h4`
    color: rgb(98, 45, 123);
    padding: 0px 5px;
    font-weight: 600;
    font-size: 16px;
    margin: 0px;
    line-height: 30px;
`;

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


