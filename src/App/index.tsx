import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "src/components/atoms/Layout";
import Navbar from "src/components/atoms/Navbar";
import Info from "src/pages/Info";
import Home from "src/pages/Home";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
};

export default App;
