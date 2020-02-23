import React,{useEffect, useState}from 'react' ;
import {useParams} from 'react-router-dom'
import {NavLink , useRouteMatch , Route , Switch,} from 'react-router-dom'
import {Speech} from './Speech'
import './Navbar.css'


const Navbar =(props)=> {
    let { path, url } = useRouteMatch();
    const generateNavLinks = (num) => {
        let arrNav = [];
        for (let i = 1 ; i <= num ; ++i) {
            arrNav.push(<li><NavLink to={`${url}/Speech${i}`}>Speech{i}</NavLink></li>)
        }
        return arrNav;
    
    }
 
   const [numOfSpeech , setNum] = useState(0);
    useEffect(()=>{
     let num =   localStorage.getItem("NumOfSpeech");
     setNum(num);
    },[])
    const showSpeech = (event) => {
        console.log(event.target)
    }
    return (
    <>
     <ul className="Navbar" onClick={showSpeech}>
       {generateNavLinks(numOfSpeech)}  
    </ul>
    <Switch>
        <Route  path={`${path}/:id`} render={(props) => <Speech key={props.match.params.id} {...props}/>}>    
        </Route>
      </Switch>
    </>

    )
}

export default Navbar;