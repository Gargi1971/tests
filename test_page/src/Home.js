import "./index.css"
import { useState } from "react";
import React from "react";
import { Navigate} from 'react-router-dom';


function Home(){  
    const [goToCSS, setgoToCSS] = React.useState(false);
  
  
    if(goToCSS){
      return <Navigate to = "/QuizCSS"/>
    }
    
    return (   
      <div>
        <section>
          <div className="container">
            <h1>Get Certified</h1>
            <div className="cards">
                
                <div className="card">
                <h3>Tensorflow</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Java</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Python</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>JavaScript</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>ReactJs</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Nodejs</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>C++</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>SQL</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Pytorch</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

            </div>
          </div>  
        </section>
      </div>  
    );
  }
  export default Home;