import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './component/about';
import Home from './component/home';
import Contact from './component/contact';
import Project from './component/project';
import Footer from './component/footer';

const App = () => {
  return (
    
      <>
        <Navbar />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
       
        <Footer />
        
      </>
    
  );
};

export default App;
