import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {Speech} from './Speech'
import Navbar from './Navbar';
import './App.css';


function App() {
  
  useEffect(()=>{
    localStorage.setItem('NumOfSpeech', "5");
    let speech = {
      content:"Billo rani kaho toh apni jaan de du",
      author:"Kratika",
      subject:"meow meow",
      date:"12-09-1996"
    }
    localStorage.setItem("Speech1",JSON.stringify(speech))
  },[])
  
  return (
    <Router>
      <ul className="home-page-nav">
        <li>
        <Link to="/">Submit a new speech</Link>
        <Link to="/view">View my speech</Link>
        </li>
      </ul>
      <Switch>
        
        <Route exact path="/" render={(props)=><Speech {...props}/>}/>
        <Route  path="/view" children={<Navbar/>}/>

      </Switch>
      
    </Router>
    
  );
}

export default App;
