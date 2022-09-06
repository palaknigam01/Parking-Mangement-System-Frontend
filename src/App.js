import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SignInComponent from "./components/Sign-in";
import Banner from "./components/Banner";
import SignupComponent from "./components/Sign-up";
import Contectus from "./components/Contect-us";
import First from "./components/First-Flor";
import Slot from "./components/Slot";
import Third from "./components/Third-Flor";
import Second from "./components/Second-Flor";
import Error from "./components/Error-page";
import ProtectedRoutes from "./components/Auth/protectedroutes";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/flor-1" element={<ProtectedRoutes  Cmp={First}/>} />
        <Route path="/flor-2" element={<ProtectedRoutes Cmp={Second}/>} />
        <Route path="/flor-3" element={<ProtectedRoutes Cmp={Third} />} />
        <Route path="/sign-up" element={<SignupComponent />} />
        <Route path="/log-in" element={<SignInComponent />} />
        <Route path="/contect-us" element={<Contectus />} />
        <Route path="/slots" element={<Slot />} />
        <Route path="/" element={<> </>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
