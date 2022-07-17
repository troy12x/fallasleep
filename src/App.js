import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from "react";
import Home from './pages/Home';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Register';
import Start from './pages/Start';
import FullItems from './pages/FullItems';
import All from './pages/All';



function App() {
  return (
    <div className="App ">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/all" element={<All />} /> 

        <Route path="/fullitems" element={<FullItems />} /> 
        <Route path="/register" element={<Signup />} /> 
        <Route path="/start" element={<Start />} /> 


    </Routes>
</div>
  );
}

export default App;
