import { ReactNode } from "react";
import styled from "styled-components";

const Bg = styled.div`
  width: 100vw;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;

  background-image: url("src/assets/bg3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media screen and (max-width: 500px) {
    background-image: url("src/assets/bg4.jpg");
  }
`;

const Layout = ({ children }: { children: ReactNode }) => {
  return <Bg>{children}</Bg>;
};

export default Layout;
