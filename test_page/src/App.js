import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizCSS from "./components/QuizCSS";
import Home from "./Home";
import QuizJava from "./components/QuizJava";
import QuizPython from "./components/QuizPython";
import QuizJavaScript from "./components/QuizJavaScript";
import QuizReactJs from "./components/QuizReactJs";
import QuizNodeJs from "./components/QuizNodeJs";
import QuizCpp from "./components/QuizCpp";
import QuizSQL from "./components/QuizSQL";
import QuizPytorch from "./components/QuizPytorch";

function App(){  
  return (   
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element= {<Home />} />
          <Route path ="/QuizCSS" element= {<QuizCSS />} />
          <Route path ="/QuizJava" element= {<QuizJava />} />
          <Route path ="/QuizPython" element= {<QuizPython />} />
          <Route path ="/QuizJavaScript" element= {<QuizJavaScript />} />
          <Route path ="/QuizReactJs" element= {<QuizReactJs />} />
          <Route path ="/QuizNodeJs" element= {<QuizNodeJs />} />
          <Route path ="/QuizCpp" element= {<QuizCpp />} />
          <Route path ="/QuizSQL" element= {<QuizSQL />} />
          <Route path ="/QuizPytorch" element= {<QuizPytorch />} />
        </Routes>
      </Router>
    </div>  
  );
}
export default App;
