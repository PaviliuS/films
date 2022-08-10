import styled ,{keyframes} from 'styled-components';

const changeColor = keyframes`
    0%{
     
      background-color: ${props => props.theme.textColor};
    }
    50%{
      background-color:  ${props => props.theme.accentColor1};
    }
    100%{
      background-color: ${props => props.theme.textColor};
    }    
`;

export const Loader = styled.div`
  display: flex; 
  width: 100%;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 50px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  animation: ${changeColor} 3s ease infinite;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: ${props => props.theme.textSizeTitle};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  animation: ${changeColor} 3s ease infinite;
  font-weight: 600;
`;

