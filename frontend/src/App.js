import "./styles/App.css";
import "./styles/ShoeStrap.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import UnrthdxHome from "./pages/UnrthdxHome";

const AppLayout = () => {
  const location = useLocation();
  const isUnrthdx = location.pathname === "/unrthdx";

  return (
    <div className={`app-shell ${isUnrthdx ? "theme-unrthdx" : "theme-skate"}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unrthdx" element={<UnrthdxHome />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;