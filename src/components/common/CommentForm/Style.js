import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`;
export const Icon = styled.div`
    display:flex;
    flex: 0 0 auto;
    height: 50px; 
    align-items: center;
    font-weight: 500;
    position: absolute;
    margin: 0px 20px;
    color: ${props => props.theme.accentColor1};
    z-index:0;
    font-size:${props=>props.theme.textSizeTitle};  
`;

export const TextArea = styled.textarea`
    display: flex;
    width:100%;
    outline: none;
    border: 0;
    font-family: 'Roboto';
    font-size:${props=>props.theme.textSizeTextM};  
    min-height: 50px;
    border-radius: 10px;
    padding: 15px 60px;
    box-sizing: border-box;
    resize: vertical;
    font-weight: 400;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    background-color: ${props=>props.theme.iconColor};  
    color: ${props=>props.theme.textColor};  
`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 150px;
    background: ${props => props.theme.accentColor1};
    border: 0px;
    border-radius: ${props => props.theme.borderRadius};
    height: 40px;
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
    font-size:${props=>props.theme.textSizeTextM};  
    margin: 10px 0px 0px 0px;
    box-shadow: 0px 0px 3px ${props=>props.theme.shadowColor};
    &:hover {
        opacity: 0.9;
    }
`;

export const Error = styled.div`
    display: flex;
    width:100%;
    font-family: 'Roboto';
    font-size:${props=>props.theme.textSizeTextS};  
    align-items: center;
    padding: 0px 0px 0px 20px;  
    box-sizing: border-box;
    font-weight: 500;
    color: red;
    margin: 10px 0px 0px 0px;
`;