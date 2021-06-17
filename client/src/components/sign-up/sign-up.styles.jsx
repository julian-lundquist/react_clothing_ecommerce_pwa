import styled from 'styled-components';

export const SignUpContainer = styled.div`
    width: 25vw;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 800px) {
      width: 100%;
      margin-bottom: 2em;
    }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;

  @media screen and (max-width: 800px) {
    font-size: 2em;
  }
`;

export const SignUpSubTitle = styled.span`
  font-size: 1.25em;
        
  @media screen and (max-width: 800px) {
    font-size: 1.35em;
  }
`;