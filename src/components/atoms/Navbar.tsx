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
    color: #fff;
  }
  a:hover {
    color: #ccc;
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
