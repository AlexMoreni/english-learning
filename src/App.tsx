import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

//Pages
import { Home } from "./pages/Home/Home.tsx";
import { Register } from "./pages/Register/Register.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
