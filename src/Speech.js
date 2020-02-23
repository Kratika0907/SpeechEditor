import React,{useState, useEffect} from 'react';

import './Speech.css';

export const Speech = (props) => {
  
    const[speechData , setSpeechData] = useState({
        title:"",
        content:"",
        author:"",
        subject:"",
        date :""
    })
    useEffect(()=>{ 
        if (props.match.params.id) {
            let datam =  localStorage.getItem(props.match.params.id);
            let m = JSON.parse(datam)
            setSpeechData(m);
            console.log(speechData.date , "date")
           
        } 
        
    },[props.match.params]
    )

const handleFormChange = (event) => {
    event.preventDefault();
    let formData = document.getElementsByClassName("speech-container")[0].elements;
    let speechDetails = {...speechData}
    for (let i = 0 ; i < formData.length ; ++i){
      if (speechDetails.hasOwnProperty(formData[i].name))
      speechDetails[formData[i].name]=formData[i].value;
    }
    setSpeechData(speechDetails);
   
}
    
const handleFormSubmit = (event) => {
    event.preventDefault();
    let formData = document.getElementsByClassName("speech-container")[0].elements;
    let speechDetails = {...speechData}
    for (let i = 0 ; i < formData.length ; ++i){
      if (speechDetails.hasOwnProperty(formData[i].name))
      speechDetails[formData[i].name]=formData[i].value;
    }
    console.log(speechDetails , "user input")
    setSpeechData(speechDetails);
    localStorage.setItem(speechData.title , JSON.stringify(speechDetails));
}
    return (
        <>
        {props.speechId}
        <form className="speech-container" onSubmit={handleFormSubmit} onChange={handleFormChange}>
        <input type="text" name="title"  placeholder="Title" value={speechData.title} required/>
        <textarea  name="content" placeholder="Speech content over here" value={speechData.content} required/>
        <div className="speech-second-container">
        <input type="text" name="author"  placeholder="Author name" value={speechData.author} required/>
        <input type="text" name="subject" placeholder="Suject area keywords" value={speechData.subject} required/>
        <input type="date" name="date" value={speechData.date} required/>
        </div>
        <input type="submit"  value="Save"/>
        </form>
        </>
    )
}