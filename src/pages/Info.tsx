import ContentContainer from "src/components/atoms/ContentContainer";
import styled from "styled-components";

const Flex = styled.div`
  color: #fff;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;
const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  font-weight: 100;
  display: inline-block;
  padding: 0 2px;
  margin-bottom: 5px;
  font-size: 0.4rem;
  color: #ccc;
`;
const Content = styled.div`
  font-size: 1rem;
  letter-spacing: 2px;

  @media screen and (max-width: 500px) {
    font-size: 0.7rem;
  }
`;

const Info = () => {
  return (
    <ContentContainer>
      <Flex>
        <Title>시작일</Title>
        <Content>2023.02.08</Content>
      </Flex>
      <Flex>
        <Title>종료일</Title>
        <Content>2023.03.31</Content>
      </Flex>
      <Flex>
        <Title>결제금액</Title>
        <Content>₩214,000</Content>
      </Flex>
      <Flex>
        <Title>커피환산</Title>
        <Content>₩4,000</Content>
      </Flex>
    </ContentContainer>
  );
};

export default Info;
