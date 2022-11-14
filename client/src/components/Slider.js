import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {mobile} from "./responsive";

import Slide1 from '../images/carousel1.jpg'
import Slide2 from '../images/carousel2.jpg'
import Slide3 from '../images/carousel3.jpg'
import {useState} from "react";

const sliderItems = [
    {
        id: 1,
        img: Slide1,
        title: "SUMMER SALE",
        desc: "Now you can buy your favorite perfume directly from out website"
    },
    {
        id: 2,
        img: Slide2,
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    },
    {
        id: 3,
        img: Slide3,
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    },
];

const Container = styled.div`
  width: 100%;    
  height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  ${mobile({display: 'none'})}
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 200vh;
`


const ImageContainer = styled.div`
  flex: 1;
  height: 100%;#
`

const Image = styled.img`
  height: 60%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 3px;
`
const Button = styled.button`
  font-size: 50px;
  background: none;
  border: 1px solid white;
  color: white;
  width: auto;

  &&:hover {
    background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
    cursor: pointer;
  }
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #031c03;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return(
        <Container>
            <Arrow direction="left" onClick={()=> handleClick('left')}>
                <ArrowBackIosNewIcon/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>START SHOPPING</Button>
                        </InfoContainer>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                    </Slide>
                    ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowForwardIosIcon/>
            </Arrow>
        </Container>
    )
}

export default Slider