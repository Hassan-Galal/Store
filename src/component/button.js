import styled from 'styled-components';



export const ButtonContainer = styled.button`  
 text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.5mm solid var(--lightBlue);
    color : var(--lightBlue);
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0 ;
    transition:all 0.5s;
    &:hover{
        background:var(--lightblue);
        color:var(--mainblue)
    }
    &:focus{
        outline:none;
    }
    
    `