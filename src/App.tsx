import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";

//Components
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

//Pages
import { Home } from "./pages/Home/Home.tsx";
import { Register } from "./pages/Register/Register.tsx";

//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.ts";

//context
import { AuthProvider } from "./context/AuthContext.tsx";

function App() {
  const [user, setUser] = useState<any>(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthProvider value={user}>
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
    </AuthProvider>
  );
}

export default App;
