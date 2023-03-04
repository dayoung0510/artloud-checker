import { Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 5rem;
  text-align: center;
  font-size: 0.4rem;
  font-weight: 100;
  a {
    font-size: 0.4rem;
    font-weight: 100;
    color: #fb5ff9;
    -webkit-text-stroke: 0.5px #fb62f9;
    filter: drop-shadow(0 0 5px #fb62f9);
  }
  a:hover {
    color: #fca1e5;
    -webkit-text-stroke: 0.5px #ffcbf2;
    filter: drop-shadow(0 0 5px #ffcbf2);
  }
`;

const Navbar = () => {
  return (
    <Flex>
      <Item>
        <Link to="/">BOARD</Link>
      </Item>
      <Item>
        <Link to="/setting">SETTING</Link>
      </Item>
    </Flex>
  );
};

export default Navbar;
