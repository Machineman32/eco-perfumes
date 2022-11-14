import styled from "styled-components";
import {Women, Men, Recommended} from '../data/data'

import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {Men.map((item) => (
                <Product  item={item} key={item.id} name={item.name} />
            ))}
        </Container>
    );
};

export default Products;
