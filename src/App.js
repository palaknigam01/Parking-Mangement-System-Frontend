
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import SignInComponent from './components/Sign-in';
import Banner from './components/Banner';
import SignupComponent from './components/Sign-up';
import Contectus from './components/Contect-us';
import Sloat from './components/Sloat';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
      <Route path="/home" element={<Banner/>}/>
      <Route path="/avl-sloats" element={<Sloat/>}/>
      <Route path="/sign-up" element={<SignupComponent/>} />
      <Route path="/log-in" element={<SignInComponent/>} />
      <Route path="/contect-us" element={<Contectus/>} />
      <Route path="" element={<> </>}/>
      </Routes>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
