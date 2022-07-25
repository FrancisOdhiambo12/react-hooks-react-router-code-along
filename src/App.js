import Home from "./Home";
import Login from "./Login";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/about" element={[<Home/>,<About />]}></Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    
  );
}

export default App;