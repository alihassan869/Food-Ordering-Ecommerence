import React, {  useState } from 'react';
import './App.css';
import Home from './components/pages/Home';
import Pizza from './components/pages/Pizza';
import Biryani from './components/pages/Biryani';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Forget from './components/pages/Forget';
import Newpassword from './components/pages/Newpassword';
import Cartpage from './components/pages/Cartpage';
import Chectout from './components/pages/Chectout';
import Notfound from './components/pages/Notfound';
import Successfull from './components/pages/Successfull';
import {   BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
function App() {
  const [user, setuserlogin] = useState({});
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Home to="/" />
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
                  <Route
            exact
            path='/Pizza'
            element={
              user && user._id ? (
                <Pizza/>
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
           <Route
            exact
            path='/Biryani'
            element={
              user && user._id ? (
                <Biryani/>
              ) : (
                <Login setuserlogin={setuserlogin} />
              )
            }
          />
           <Route exact path='/Login' element={<Login setuserlogin={setuserlogin}/>}/>
           <Route exact path='/Register' element={<Register/>}/>
           <Route exact path='/Forget' element={<Forget/>}/>
           <Route exact path='*' element={<Notfound/>}/>
           <Route exact path='/Successfull' element={<Successfull/>}/>
           <Route exact path="/Cartpage/:id/:type" element={<Cartpage />} />
           <Route exact path="/Newpassword/:token" element={<Newpassword />} />
           <Route exact path="/Checkout/:Price" element={<Chectout />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
