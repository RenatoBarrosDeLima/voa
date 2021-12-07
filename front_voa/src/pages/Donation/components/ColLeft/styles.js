import styled from "styled-components";

export const ColLeftContainer = styled.div`
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    padding: 0px 10px;
    margin-top: 10px;

    @media only screen and (min-width: 1000px) {
      flex: 0 0 66.6667%;
      width: 66.6667%;
    }

    @media only screen and (min-width: 800px) {
        flex: 0 0 66.6667%;
        width: 66.6667%;
    }

    @media only screen and (min-width: 0px) {
        flex: 0 0 0;
        width: 100%;
    }
`;

export const TitleBox = styled.div`
    width: 100%;
    margin: 0px auto;

    @media only screen and (min-width: 1000px) {
      width: 45vw !important;
    }

    @media only screen and (min-width: 600px) {
      padding: 0px;
      margin: 0px;
      width: 90vw !important;
      max-width: 600px !important;
    }
`;

export const TextH1 = styled.h1`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: rgb(132, 42, 136);
`;

export const ImageContent = styled.div`
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
`;

export const SwiperContainer = styled.div`
    touch-action: pan-y;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
`;

export const SwiperWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -moz-box;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform,-moz-transform;
    box-sizing: content-box;
`;

export const SwiperSlide = styled.div`
    width: 713px;
    height: auto;
    flex-shrink: 0;
    position: relative;
    transition-property: transform,-webkit-transform,-moz-transform;
`;

export const MediaContainer = styled.div`
    width: 100%;
    height: 61.3333vw;
    max-height: 480px;
`;

export const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`;

export const ContainerText = styled.div`
    width: 45vw;
    max-width: 850px;
`;

export const ContentText = styled.div`
    font-size: 16px;
    color: rgb(113, 113, 117);
    max-width: 810px !important;
`;

export const TextP = styled.p`
    color: rgb(113, 113, 117);
`;
