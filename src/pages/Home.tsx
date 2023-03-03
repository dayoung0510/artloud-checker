import Recording from "src/components/organisms/Recording";
import Dashboard from "src/components/organisms/Dashboard";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <Div>
      <Recording />
      <Dashboard />
    </Div>
  );
};

export default Home;
