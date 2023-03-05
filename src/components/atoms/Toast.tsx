import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: 100;
  font-size: 0.75rem;
`;

const Toast = () => {
  return <Container>임시저장 완료!</Container>;
};

export default Toast;
