import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavLinkStyled = styled(NavLink)`
color: darkgray;
&.active{
    color: red;
}
`

export const List = styled.ul`
display: flex;
list-style: none;
gap: 30px;

`