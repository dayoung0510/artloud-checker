import { ReactNode } from "react";
import styled from "styled-components";

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-image: url("src/assets/bg.jpg");
  background-size: cover;

  @media screen and (max-width: 500px) {
    background-image: url("src/assets/bg2.png");
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <Bg>{children}</Bg>;
};

export default Layout;
