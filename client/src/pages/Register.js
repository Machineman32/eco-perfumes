import styled from "styled-components";
import {mobile} from "../components/responsive";
import Background from '../images/background.jpg'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
  background: transparent;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #008033;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
  color: #ffffff;
`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Links>
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </Links>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;