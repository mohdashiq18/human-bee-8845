import logo from './logo.svg';
import './App.css';
import Navbar  from './Component/Navbar';
import {Routes,Route} from "react-router-dom"
 import About  from './Component/About';
import Home from "./Component/Home"
import Donate  from './Component/Donate';
import Pricing from './Component/Pricing';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route exact path={'/About'} element={<About/>}/>
        <Route exact path={'/Donate'} element={<Donate/>}/>
        <Route exact path={'/Pricing'} element={<Pricing/>}/>
        <Route exact path={'/Contact'} element={<Contact/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
