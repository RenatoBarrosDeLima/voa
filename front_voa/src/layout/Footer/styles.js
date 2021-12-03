import styled from "styled-components";

export const Container = styled.div`
    display: block;
    min-height: 300px;
    background-image: linear-gradient(rgb(123, 9, 126), rgb(62, 18, 98));
    padding: 24px 20px 19px;
`;

export const ContainerLinks = styled.div`
    display: block;
    opacity: 1;
    font-family: "M PLUS Rounded 1c", sans-serif;
    color: rgb(245, 245, 245);
`;

export const GridLinks = styled.div`
    justify-content: space-around;
    color: rgb(255, 255, 255);
    opacity: 1;
    line-height: 40px;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: 0px;
`;

export const Collumn = styled.div`
    *{
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
    opacity: 1;
    line-height: 40px;
    box-sizing: border-box;
    display: block;
`;

export const TextB = styled.b`
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0px;
    margin: 0px;
`;

export const TextP = styled.p`
    cursor: pointer;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 0px;
    margin: 0px;
`;

export const Divider = styled.div`
    width: 89.3vw;
    height: 1px;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    margin: 30px auto;
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto 50px;
`;

export const Left = styled.a`
    font-family: "M PLUS Rounded 1c", sans-serif;
    color: rgb(245, 245, 245);
`

export const Center = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const Rigth = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const InstagramIcon = styled.a`
    margin-left: 0px;
`;

export const YoutubeIcon = styled.a`
    transform: rotate(180deg);
    margin-bottom: 12px;
    margin-left: 12px;
`;

export const TiktokIcon = styled.a`
    margin-left: 12px;
`;

export const LinkedinIcon = styled.a`
    margin-left: 12px;
`;

export const Contato = styled.div`
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px auto 50px;
    *{
      color: rgb(245, 245, 245);
    }
`;

export const ContatoLeft = styled.div`
    text-align: left;
    margin-bottom: 64px;
    padding: 0px 18px;
`;

export const TextH5 = styled.h5`
    font-weight: 600;
    font-size: 14px;
    margin: 0px;
    opacity: 0.6;
    letter-spacing: 0px;
    line-height: 22px;
`;

export const TextContatoP = styled.p`
    font-weight: 300;
    font-size: 14px;
    margin: 0px;
    opacity: 0.6;
    letter-spacing: 0px;
    line-height: 22px;
`;

