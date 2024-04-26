import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import QuizCSS from "./components/QuizCSS";
import Home from "./Home";

function App(){  
  return (   
    <div className="App">
      <Router>
        <Routes>
          <Route path ="/" element= {<Home />} />
          <Route path ="/QuizCSS" element= {<QuizCSS />} />
        </Routes>
      </Router>
    </div>  
  );
}
export default App;
