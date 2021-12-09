import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height: 100vh;
    background-color: rgb(202, 200, 200);
    position: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes rotate{
      to{
          transform: rotate(350deg)
      }
    }


    @keyframes scale{
      50%{
          transform: scale(1.2)
      }
    }

`;

export const Content = styled.div`
    width:80px;
    display: flex;
    flex-wrap: wrap;
    animation: rotate 3s linear infinite;


    span{
      width: 32px;
      height:32px;
      background-color: purple;
      margin: 4px;
      animation: scale 1.5s linear infinite;
    }

    span:nth-child(1){
      border-radius: 50% 50% 0 50%;
      background-color: rgb(6, 201, 6);
      transform-origin: bottom right;
    }

    span:nth-child(2){
      border-radius: 50% 50% 50% 0%;
      background-color: rgb(0, 13, 128);
      transform-origin: bottom left;
      animation-delay: .5s;
    }
    span:nth-child(3){
      border-radius: 50% 0% 50% 50%;
      background-color: rgb(231, 6, 6);
      transform-origin: top right;
      animation-delay: 1.5s;
    }
    span:nth-child(4){
      border-radius: 0% 50% 50% 50%;
      background-color: rgb(223, 219, 9);
      transform-origin: top left;
      animation-delay: 1s;
    }
`;
