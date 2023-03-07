import styled from "styled-components";
import { CoffeeType } from "src/components/organisms/Recording";
import Coffee from "../../../public/coffee.png";
import NotCoffee from "../../../public/notcoffee.png";

type props = {
  coffee: CoffeeType;
  setCoffee: (value: CoffeeType) => void;
};

const Container = styled.div`
  img {
    width: 100px;
  }
`;

const CoffeeCheck = ({ coffee, setCoffee }: props) => {
  return (
    <>
      <Container
        style={{ display: coffee === "TRUE" ? "block" : "none" }}
        onClick={() => setCoffee("FALSE")}
      >
        <img src={Coffee} alt="color" />
      </Container>

      <Container
        style={{ display: coffee === "FALSE" ? "block" : "none" }}
        onClick={() => setCoffee("TRUE")}
      >
        <img src={NotCoffee} alt="black-and-white" />
      </Container>
    </>
  );
};

export default CoffeeCheck;
