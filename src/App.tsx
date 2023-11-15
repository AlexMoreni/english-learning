import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//Pages
import { Home } from "./pages/Home/Home.tsx";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
