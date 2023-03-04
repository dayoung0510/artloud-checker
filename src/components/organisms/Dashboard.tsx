import ContentContainer from "src/components/atoms/ContentContainer";
import styled from "styled-components";

type Props = {
  records: string[];
};

const Div = styled.div`
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;

  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;
const Number = styled.span`
  color: #fff;
  letter-spacing: 4px;
  filter: drop-shadow(2px 2px 4px #12cd19);
`;

const ResultBox = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 0.2rem 0.5rem;
  margin-top: 1rem;
`;

const Dashboard = ({ records }: Props) => {
  return (
    <ContentContainer>
      {records.map((record) => {
        const dateAcc = record[0];
        const timeAcc = record[1];
        const coffeeAcc = record[2];
        const perTime = record[3];

        return (
          <Div key={record[0]}>
            <div>
              52일 중 <Number>{dateAcc}</Number>일 출석하여
            </div>
            <div>
              <Number>{timeAcc}</Number>시간 머물렀습니다.
            </div>
            <div>
              총 <Number>{coffeeAcc}</Number>
              잔의 커피를 마셨습니다.
            </div>
            <ResultBox>
              시간당 <Number>{perTime}</Number>원에 이용 중입니다.
            </ResultBox>
          </Div>
        );
      })}
    </ContentContainer>
  );
};

export default Dashboard;
