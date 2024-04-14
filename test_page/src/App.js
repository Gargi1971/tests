import { useState } from "react";

function App() {
  const [cards] = useState([
    {
      title: 'CSS (Basic)'
    },
    {
      title: 'Java (Basic)'
    },
    {
      title: 'C++ (Basic)'
    },
    {
      title: 'Python (Basic)'
    },
    {
      title: 'Javascript (Intermediate)'
    },
    {
      title: 'Node (Basic)'
    },
    {
      title: 'Node.js (Intermediate)'
    },
    {
      title: 'React (Basic)'
    },
    {
      title: 'SQL (Basic)'
    },
  ])
  return (    
    <div>
      <section>
        <div className="container">
          <h1>Get Certified</h1>
          <div className="cards">
            {
              cards.map((card, i) => (
                <div key = {i} className="card">
              <h3>
                {card.title}
              </h3>
              <button className="btn">
                Take Test
              </button>
            </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
