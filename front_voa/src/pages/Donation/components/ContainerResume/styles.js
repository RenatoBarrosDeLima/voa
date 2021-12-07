import styled from "styled-components";

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
