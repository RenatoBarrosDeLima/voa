import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 9999;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: rgba(255, 255, 255, 0.7);
`;

export const Loader = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #333;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  background: black;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
