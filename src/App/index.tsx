import Layout from "src/components/atoms/Layout";
import Recording from "src/components/organisms/Recording";
import Records from "src/components/organisms/Records";

const App = () => {
  return (
    // <div className="App">
    <Layout>
      <Recording />
      <Records />
    </Layout>
    // </div>
  );
};

export default App;
