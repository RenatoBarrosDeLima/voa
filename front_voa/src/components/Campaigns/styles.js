import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 20px;
    padding-right: 0px;
    padding-left: 20px;

    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;

    @media only screen and (min-width: 1000px){
      width: 70rem;
    }
`;

export const Content = styled.div`
    display: block;
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
    overflow-y: auto;
    transform: translateZ(0);
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
    width: 423.077px;
    margin-bottom: 50px;
    height: auto;
    flex-shrink: 0;
    position: relative;
`;

export const LazyloadWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const SlideA = styled.a`
    border: 1px solid rgba(123, 9, 126, 0.1);
    color: rgba(113, 113, 117, 0.6);
    border-radius: 10px;
    min-width: 320px;
    overflow: hidden;
    margin-right: 2.66667vw;
    max-width: 420px;
    height: 100%;
    position: relative;
    cursor: pointer;
    user-select: none;
    text-decoration: none;

    @media (min-width: 600px) {
      margin-right: 16px !important;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 61.3333vw;
    max-height: 368px;
    position: relative;
`;

export const ImageContent = styled.div`
    display: block;
    overflow: hidden;
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    margin: 0px;
`;

export const Image = styled.img`
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
    filter: none;
    background-size: cover;
    background-image: none;
    background-position: 0% 0%;

    user-select: none;
    object-fit: cover;
    object-position: center center;
`;

export const DayRemaining = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 15px;
    bottom: -35px;
    border-radius: 20px;
    padding: 0px 12px;
    height: 20px;
    background-color: rgb(223, 147, 46);
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0px;
`;

export const CardBody = styled.div`
    padding: 15px 17px 20px;
`;

export const TextSpan = styled.span`
    font-size: 12px;
    color: rgb(113, 113, 117);
    font-weight: 500;
    letter-spacing: 0.24px;
    margin: 0px;
    text-transform: uppercase;
`;

export const TextH3 = styled.h3`
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.36px;
    color: rgb(132, 42, 136);
    margin: 15px 0px 2px;
`;

export const Resume = styled.div`
    line-height: 20px;
    padding-bottom: 90px;
`;

export const TextP = styled.p`
    margin: 5px 0px 0px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(113, 113, 117, 0.6);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
`;

export const ContainerCardProgressBar = styled.div`
    position: absolute;
    bottom: 20px;
    width: calc(100% - 34px);
    color: rgba(113, 113, 117, 0.6);
`;

export const FundraisingTarget = styled.div`
    height: 25px;
    display: flex;
    justify-content: space-between;
`;

export const TextValue = styled.span`
    font-weight: 600;
    color: rgb(98, 45, 123);
`;

export const Percentage = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: rgb(171, 49, 101);
    margin: 0px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    background-color: rgba(123, 9, 126, 0.05);
    height: 12px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
`;

export const Progress = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgb(204, 53, 119);
    border-radius: 6px;
    width: ${props => `${props.$progress}%`};
    height: 100%;
`;

export const ContentDetail = styled.div`
    padding-top: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const GoalDetail = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    letter-spacing: -0.28px;
`;

export const GoalValue = styled.span`
    font-weight: 600;
    margin: 0px 3px 0px 0px;
    color: rgb(141, 141, 141);
`;

export const GoalText = styled.span`
    font-weight: 300;
    font-size: 10px;
    color: rgb(141, 141, 141);
    margin: 2px 0px 0px;
`;



