import styled from 'styled-components';

export const Section = styled.div`
    min-height: 100vh;
    padding-top: 72px;
    box-sizing: border-box;
`


export const TopNav = styled.ul`
    display: flex;
    justify-content: center;
    background: #383E4C;
    list-style: none;
    position: fixed;
    width: 100vw;

    & li {
    margin: 10px;
    }

    & a {
    display: block;
    padding: 13px 25px;
    color: white;
    border: 1px solid #646d7c;
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    transition: .5s background;

    &:hover, &:active{
        background: #49505F;
    }
    }
`