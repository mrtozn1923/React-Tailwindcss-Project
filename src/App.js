import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';



function App() {
  const [isOpen,setIsOpen]=useState(false);
  
  const toggle=()=>{
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener('resize',hideMenu);
    return ()=>{
      window.removeEventListener('resize',hideMenu);
    }
  });

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
