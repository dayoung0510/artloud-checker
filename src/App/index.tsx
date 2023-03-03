import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "src/components/atoms/Layout";
import Navbar from "src/components/atoms/Navbar";
import Setting from "src/pages/Setting";
import Home from "src/pages/Home";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;
