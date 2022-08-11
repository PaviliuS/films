import styled from 'styled-components';
export const Comment = styled.div`
    display: flex;
    width: 100%;
    background-color: ${props => props.theme.iconColor};
    border-radius: 10px;
    box-shadow: 0px 0px 3px ${props => props.theme.shadowColor};
    margin:0px 0px 10px 0px;
    &:last-child{
        margin:0px 0px 0px 0px;
    }
    box-sizing: border-box;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 20px; 
    width: 100%;
    box-sizing: border-box;
`;

export const CommentData = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25px;
    border-bottom: 1px solid ${props => props.theme.accentColor1};
    margin: 0px 0px 10px 0px;
    box-sizing: border-box;
`;

export const Name = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex: 1 1 auto;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextM};
    font-weight: 500;
    color:${props => props.theme.accentColor1};
    margin: 0px 20px 0px 0px;
    line-height: 20px;
    height: 100%;
    align-items: center;
`;

export const Time = styled.div`
    display: flex;
    flex: 1 1 auto;
    width: 100%;
    font-size: ${props => props.theme.textSizeTextS};
    font-weight: 400;
    color:${props => props.theme.textColor};
    /* height: 100%; */
    justify-content: flex-end;
    align-items: flex-end;
`;

export const Button = styled.div`
cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    width: 30px;
    height: 100%;
    justify-content: flex-end;
    font-size:  ${props => props.theme.textSizeTitle};;
    align-items: flex-end;
    transition: 0.3s;
    &:hover {
        
        color: ${props => props.theme.accentColor1};
        transition: 0.3s;
    }
`;

export const Text = styled.div`
    display: flex;
    width: 100%;
    font-weight: 400;;
    font-size:  ${props => props.theme.textSizeM};;
`;