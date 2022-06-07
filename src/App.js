import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/404' element={<ErrorPage />} /> */}
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
