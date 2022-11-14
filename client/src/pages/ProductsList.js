import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from '../components/Products'
import {mobile} from "../components/responsive";

const Container = styled.div`

`

const Title = styled.div`
  color: white;
  font-size: 30px;
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: right;
  
`

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const ProductsList = () => {
    return(
        <Container>
            <Navbar/>
            <Title>
                Gentlemen
            </Title>
            <FilterContainer>
                <Filter>
                    Filter products:
                    <Select>
                        <Option disabled selected>
                            Arome:
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
        </Container>
    )
}

export default ProductsList
