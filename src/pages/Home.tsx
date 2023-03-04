import { useEffect, useState } from "react";
import styled from "styled-components";
import Recording from "src/components/organisms/Recording";
import Dashboard from "src/components/organisms/Dashboard";
import Loading from "src/components/atoms/Loading";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState<string[]>([]);

  //시트에서 데이터 불러오기
  useEffect(() => {
    setLoading(true);
    fetch(import.meta.env.VITE_SPREADSHEET_API)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <Div>
      <Recording loading={loading} setLoading={setLoading} />
      <Dashboard loading={loading} records={records} />
    </Div>
  );
};

export default Home;
