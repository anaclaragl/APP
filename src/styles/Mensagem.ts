import styled from "styled-components/native";
import colors from "./colors"

export const Header = styled.View`
    flex: 1;
    background-color: ${colors.white};
    flex-direction: row;
    margin-top: 20px;
`
export const Nav = styled.View`
    background-color: ${colors.white};
`
export const Footer = styled.View`
    align-items: flex-end;
    flex: 1;
    background-color: ${colors.white};
    flex-direction: row;
`