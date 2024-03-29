import './App.css';
import Mainpagebody from './components/mainpagebody';
import Login from './components/Login.component'
import SignUp from './components/Signup.component'
import Services from './components/Services';
import Estimate from './components/Estimate';
import Contactus from './components/Contactus';
import Knowmore from './components/Knowmore';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
    const isLoggedIn=window.localStorage.getItem("loggedIn");
  return (
   <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={isLoggedIn==="true"?<Services />:<Mainpagebody />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Estimate" element={<Estimate />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Knowmore" element={<Knowmore />} />

        </Routes>
      </Router>

    </div>

  );
}

export default App;
