// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>hello world</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Route,Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';

const App = () =>{
  return(
    <>
    <switch>
      <Route exact path='/' component={About}/>
      <Route path='/contact' component={Contact}/>
      <Route component={Error}/>
    </switch>
    </>
  );
  
};

export default App;
