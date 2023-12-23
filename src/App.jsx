import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
