import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


function App() {
  return (
   <Router>
     <div>
       <Header/>
        <Route exact path="/" component={Home}/>

        <Route exact path="/projects" component={Projects}/>
        <Footer/>        
     </div>
   </Router>
  );
}

export default App;
