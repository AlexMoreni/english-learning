import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import { Home } from "./pages/Home/Home.tsx";

//Components
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
