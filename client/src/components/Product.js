import styled from "styled-components";
import {AddShoppingCart, Favorite} from "@mui/icons-material";
import ProductImg from '../images/parfum.jpg'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  border-radius: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgb(162, 162, 162) 0%, rgba(255, 255, 255, 1) 100%);
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Name = styled.h2`
  font-size: 30px;
  position: absolute;
  z-index: 3;
  color: black;
  text-align: center;
  width: 100%;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgb(174, 175, 174) 0%, rgba(255, 255, 255, 1) 30%)
`


const Image = styled.img`
  height: 80%;
  z-index: 2;
  border-radius: 50px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #545454;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Name>{item.name}</Name>
            <Image src={ProductImg}/>
            <Info>
                <Icon>
                    <AddShoppingCart/>
                </Icon>
                <Icon>
                    <Favorite/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product