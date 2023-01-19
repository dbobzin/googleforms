// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Tweet from "./components/Tweet";
import MyForm from "./components/reactform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <MyForm />
          
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/tweets" exact element={<Tweet />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}
export default App;

//import logo from './logo.svg';

//mod

// import "./App.css";
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Tweet from "./components/Tweet";
// // import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <div className="App">
//           <header className="App-header">
//             <Nav />
//             <Route path="/" exact element={<Home />} />
//             <Route path="/tweets" exact element={<Tweet />} />
//           </header>
//         </div>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// export default App;

//source

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
// import Nav from "./components/Nav";
// import Home from "./components/Home";
// import Tweet from "./components/Tweet";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//       <Route path="/" exact component={<Home />} />
//           <Route path="/tweets" exact component={<Tweet />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
