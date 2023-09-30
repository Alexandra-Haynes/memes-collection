import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    font-family: Montserrat;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.bg};
}

.container{
    margin-top: 5rem;
    margin-bottom: 5rem;
}

.heading{
    font-weight: 700;
    font-size: 2rem;
    margin: 0px;
}

.sub-heading{
    font-weight: 500;
    font-size: 1.5rem;
}

.hightlight{
    color: ${({ theme }) => theme.colors.helper};
    font-weight: bold;
}

a.button {
    position: relative;
    display: flex;
    padding: 5.5px 13.5px;
    width: fit-content;
    height: fit-content;
    border: 1px solid #01b3af;
    color: #01b3af;
    font-size: 13px;
    font-family: Montserrat;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
}
  
a.button:hover {
    color: #fff;
    background-color: #01b3af;
}

.text-center img{
    height: 400px;
    border: 1px solid grey;
}
`;
