import Navbar from "./components/navbar/Navbar";
import Featured from "./components/navbar/featured/Featured";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
