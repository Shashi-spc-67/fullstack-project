// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import About from './Components/About';
import Products from './Components/Products';
import Cards from './Components/Cards';
import SignUpPage from './Components/SignUpPage';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
 
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path='/Cards' element={<Cards/>}/>
<Route path="/About" element={<About/>}/>
<Route path='/SignUpPage' element={<SignUpPage/>}/>
<Route path='/LoginPage' element={<LoginPage/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;

