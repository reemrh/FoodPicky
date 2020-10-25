import React from 'react';
import '../App.css';
import arrow from "../includes/imgs/arrow.png";

function Steps(props) {   
     let steps = [];    
     props.Steps.map(i =>steps.push(JSON.parse(i.value)));
     steps.map((i,key) => {
         i.arrow = arrow;
         if(key === 2){
             i.arrow = '';
         }
         return i;
     })
 
    return (
        <div className="steps-wrapper">
            {steps.map( (item,key) =>
               <div className="step_wrapper" key={key}>
                    <div className="step_content"> 
                        <img src={item.icon} alt="step" />            
                        <p><span>{key+1}. </span> {item.text}</p>                       
                    </div>
                  {(item.arrow)?<img className="arrow" src={item.arrow} alt="arrow" />:'' }               
                </div>             
            )}            
        </div>
    );
}

export default Steps;