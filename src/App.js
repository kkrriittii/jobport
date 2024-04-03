import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer';
import SignIn from './components/SignIn'; 
import { useState } from 'react';
import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import * as React from "react";



function App() {


  return (
 <>
  <Header/>
  <Router>
  <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup/>} /> 
        </Routes>
        </Router>
<Footer/>


 </>
  );
}

export default App;
