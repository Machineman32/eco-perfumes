import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "./responsive";
import Header from '../images/header.png'

const Container = styled.div`
  background-image: linear-gradient(to right top, #000000, #0c0c0c, #151515, #1c1c1c, #232323);
  ${mobile({height: "100px"})}
  z-index: 100;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  ${mobile({ display: "none"})}
`;

const Input = styled.input`
  border: none;
  margin-right: 10px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  ${mobile({ 
    width: '100px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 30px;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center", marginLeft: '50px'})}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>RO</Language>
                    <SearchContainer>
                        <Input placeholder="Cauta" />
                        <Search style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo src={Header}></Logo>
                </Center>
                <Right>
                    <MenuItem>INREGISTARE</MenuItem>
                    <MenuItem>AUTENTIFICARE</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;