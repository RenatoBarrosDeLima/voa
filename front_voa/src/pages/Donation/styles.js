import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
`;

export const Content = styled.div`
    margin-top: 80px;
`;

export const Body = styled.div`
    box-sizing: border-box;
    display: block;
`;

export const GridContainer = styled.div`
    padding-top: 10px;
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

    @media only screen and (min-width: 1500px) {
    width: 80rem;
}
`;

export const GridRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    margin: 0px -10px;
`;

export const ColLeft = styled.div`
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

export const ColRight = styled.div`
    padding-left: 0;
    padding: 0px 10px;
    margin-top: 10px;
    box-sizing: border-box;
    flex: 1 0 auto;
    display: flex;
    margin-top: 2px;
    max-width: 30%;

    @media only screen and (min-width: 1000px) {
      flex: 0 0 33.3333%;
      width: 33.3333%;
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

export const BlurContainer = styled.div`
    top: 0px;
    left: 0px;
    width: 100%;
    margin: 0px auto;
    height: 0%;
    z-index: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    opacity: 1;
    transition: opacity 0.4s ease-in-out 0s;

    @media (min-width: 600px) {
      height: fit-content;
    }
`;

export const ContentRight = styled.div`
    width: 100%;
    background-color: white;
    z-index: 8;
    overflow-y: auto;
    left: 0px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media (min-width: 600px){
      top: 0px;
      position: relative;
      max-width: 100%;
      height: initial;
      animation: 0s ease 0s 1 normal none running none;
    }
`;

export const GridContainerDonation = styled.div`
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

export const TextCategory = styled.p`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    margin: 15px 0px 3px;
    color: rgb(113, 113, 117);

    @media (min-width: 1000px) {
      margin-top: 20px;
    }

`;

export const ContainerCardProgressBar = styled.div`
    box-sizing: border-box;
`;

export const ValueCollected = styled.div`
    height: 25px;
    display: flex;
    justify-content: space-between;
`;

export const ValueCollectedText = styled.span`
    font-weight: 600;
    color: rgb(98, 45, 123);
`;

export const ValueCollectedPercent = styled.div`
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
    -webkit-box-pack: justify;
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

export const TextValue = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-top: 60px;
    color: rgb(113, 113, 117);
`;

export const Anonymous = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const CheckBoxWrapper = styled.div`
    position: relative;
    z-index: 0;
    display: inline;
    margin-right: 20px;
`;

export const TextAnonymous = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: rgb(0, 0, 0);
    margin-bottom: 18px;
`;

export const TextHide = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: rgb(0, 0, 0);
`;

export const ContainerDonationResume = styled.div`
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

export const ContentDonationResume = styled.div`
    border-style: solid;
    border-color: rgba(113, 113, 117, 0.15);
    border-image: initial;
    border-width: 1px 0px 0px;
    margin: 30px 0px 20px;
`;

export const GridInlineResume = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const TextTitleResume = styled.p`
    font-size: 18px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    color: rgb(98, 45, 123);
    margin: 30px 0px 10px;
`;

export const TextContribution = styled.p`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 16px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    margin: 0px;
`;

export const TextContributionValue = styled.p`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 16px;
    color: rgb(0, 0, 0);
    font-weight: 600;
    margin: 0px;
`;

export const ContributionTotalResume = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const ContributionTotalResumeTitle = styled.p`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: rgb(98, 45, 123);
`;

export const ContributionTotalResumeValue = styled.p`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 18px;
    color: rgb(98, 45, 123);
    font-weight: 600;
`;

export const ContainerButtons = styled.div`
    padding: 30px 0px;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;

    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    box-sizing: border-box;
    overflow-y: auto;

    @media only screen and (min-width: 1000px)  {
        width: 70rem;
    }


`;

export const ButtonFinish = styled.a`
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 1.4px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    height: 55px;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-box-align: center;
    align-items: center;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border-radius: 50px;
    font-size: 16px;
    background-color: rgb(140, 30, 126);
    width: 100%;
    max-width: 300px;
    color: rgb(247, 248, 250);
    border: none;
    outline: none;
    cursor: pointer;
`;













