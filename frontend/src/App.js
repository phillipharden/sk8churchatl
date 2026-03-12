import "./styles/App.css";
import "./styles/ShoeStrap.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import BackgroundVideo from "./components/ui/BackgroundVideo";

const App = () => {
  return (
    <div className="app-shell">
      <BackgroundVideo />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;