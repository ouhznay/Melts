import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
width: 100%;
height: 30px;
background-color: #07173f;
display: flex;
flex-direction: column;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  margin: 10px;
  font-weight: bold;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;