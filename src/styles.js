import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Override = styled.div`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
  display: flex;
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const CatImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const ListItem = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 160px;
  }
  p {
    text-align: center;
  }
`;

export const Navitem = styled(NavLink)`
  color: white;
  padding: 0.2em 1em;
  font-size: 18px;

  &:hover {
    color: #f6aa1c;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
  
`;
