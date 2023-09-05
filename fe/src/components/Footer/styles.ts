import { styled } from "styled-components";

export const Container = styled.footer`
    background: #d73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div `
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .footer {
        p{
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
            margin-top: 50px;
        }
    }
`