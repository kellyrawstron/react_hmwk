import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {              // 3️⃣
  // we can write JS here :)  // 4️⃣
  const name = "kelly";
  const age = 31;
  return (     

  
                 // 5️⃣
    <div>
    <h1 className="title">Hello World!</h1>
    <p> My name is {name} and i'm {age} years old</p>
  </div>
       // 6️⃣
  );                          // 7️⃣
}                             // 8️⃣

export default App;           // 9️⃣
