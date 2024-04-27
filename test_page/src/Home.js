import "./index.css"
import { useState } from "react";
import React from "react";
import { Navigate} from 'react-router-dom';


function Home(){  
    const [goToCSS, setgoToCSS] = React.useState(false);
    const [goToJava, setgoToJava] = React.useState(false);
    const [goToPython, setgoToPython] = React.useState(false);
    const [goToJavaScript, setgoToJavaScript] = React.useState(false);
    const [goToReactJs, setgoToReactJs] = React.useState(false);
    const [goToNodeJs, setgoToNodeJs] = React.useState(false);
    const [goToCpp, setgoToCpp] = React.useState(false);
    const [goToSQL, setgoToSQL] = React.useState(false);
    const [goToPytorch, setgoToPytorch] = React.useState(false);
    
  
    if(goToCSS){
      return <Navigate to = "/QuizCSS"/>
    }
    if(goToJava){
      return <Navigate to = "/QuizJava"/>
    }
    if(goToPython){
      return <Navigate to = "/QuizPython"/>
    }
    if(goToJavaScript){
      return <Navigate to = "/QuizJavaScript"/>
    }
    if(goToReactJs){
      return <Navigate to = "/QuizReactJs"/>
    }
    if(goToNodeJs){
      return <Navigate to = "/QuizNodeJs"/>
    }
    if(goToCpp){
      return <Navigate to = "/QuizCpp"/>
    }
    if(goToSQL){
      return <Navigate to = "/QuizSQL"/>
    }
    if(goToPytorch){
      return <Navigate to = "/QuizPytorch"/>
    }

    
    return (   
      <div>
        <section>
          <div className="container">
            <h1>Get Certified</h1>
            <div className="cards">
                
                <div className="card">
                <h3>CSS</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCSS(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Java</h3>
                <button 
                className="btn"
                onClick={() => {setgoToJava(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Python</h3>
                <button 
                className="btn"
                onClick={() => {setgoToPython(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>JavaScript</h3>
                <button 
                className="btn"
                onClick={() => {setgoToJavaScript(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>ReactJs</h3>
                <button 
                className="btn"
                onClick={() => {setgoToReactJs(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Nodejs</h3>
                <button 
                className="btn"
                onClick={() => {setgoToNodeJs(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>C++</h3>
                <button 
                className="btn"
                onClick={() => {setgoToCpp(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>SQL</h3>
                <button 
                className="btn"
                onClick={() => {setgoToSQL(true)}}> Take Test </button>
              </div>

              <div className="card">
                <h3>Pytorch</h3>
                <button 
                className="btn"
                onClick={() => {setgoToPytorch(true)}}> Take Test </button>
              </div>

            </div>
          </div>  
        </section>
      </div>  
    );
  }
  export default Home;