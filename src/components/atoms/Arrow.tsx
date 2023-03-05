import styled, { keyframes } from "styled-components";

const Opacity = keyframes`
  from {opacity: 0.5;}
  to {opacity: 1;}
`;

type dirType = "UP" | "DOWN";

const Div = styled.div<{ dir: dirType }>`
  animation: ${Opacity} 0.4s infinite alternate;
  font-weight: 100;
  color: #999;

  margin-bottom: ${(props) => (props.dir === "UP" ? "1rem" : 0)};
  margin-top: ${(props) => (props.dir === "DOWN" ? "1rem" : 0)};
`;

const ArrowDown = ({ dir }: { dir: dirType }) => {
  return <Div dir={dir}>{dir === "DOWN" ? "↓" : "↑"}</Div>;
};

export default ArrowDown;
