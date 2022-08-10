import styled from 'styled-components';

export const Comments = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 576px)  {
        grid-template-columns: 1fr   ;
    }
    grid-gap: 20px;
    margin: 20px 0px;
    box-sizing: border-box; 
`;

export const CommentsTitle = styled.div`
    display: flex;
    width: 100%;
    font-size: ${props=> props.theme.textSizeTitle};
    font-weight: 500;
`;

export const Content = styled.div`
    display: grid;
    width: 100%;
    align-items: center;
    align-self: center;
    grid-template-columns: 1fr;
    grid-gap: 20px;
`;

export const CommentsList = styled.div`
    display: flex;
    flex-direction: column;
`;


