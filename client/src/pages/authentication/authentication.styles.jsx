import styled from 'styled-components';

export const AuthenticationPageContainer = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 80px;

  @media screen and (max-width: 800px) {
    width: 80vw;
    padding: 0;
    display: block;
    margin: 0 auto;
  }
`;