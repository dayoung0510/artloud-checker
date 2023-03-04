import ContentContainer from "src/components/atoms/ContentContainer";
import Loading from "src/components/atoms/Loading";

type Props = {
  loading: boolean;
  records: string[];
};

const Dashboard = ({ loading, records }: Props) => {
  if (loading) return <Loading />;
  return (
    <ContentContainer>
      {records.map((record) => (
        <div>{record}</div>
      ))}
    </ContentContainer>
  );
};

export default Dashboard;
