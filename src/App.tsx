import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";

//Components
import { Navbar } from "./components/Navbar.tsx";
import { Footer } from "./components/Footer.tsx";

//Pages
import { Home } from "./pages/Home/Home.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.tsx";
import { Dictionary } from "./pages/Dictionary/Dictionary.tsx";
import { Explore } from "./pages/Explore/Explore.tsx";
import { CreateWord } from "./pages/CreateWord/CreateWord.tsx";

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

  console.log(user);

  return (
    <AuthProvider value={user}>
      <Router>
        <Navbar user={user} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/dashboard" />}
            ></Route>
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            ></Route>
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/dictionary"
              element={
                user ? <Dictionary user={user} /> : <Navigate to="/login" />
              }
            ></Route>
            <Route
              path="/explore"
              element={user ? <Explore /> : <Navigate to="/login" />}
            ></Route>
            <Route
              path="/word/create"
              element={
                user ? <CreateWord user={user} /> : <Navigate to="/login" />
              }
            ></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
