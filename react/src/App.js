import Home from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NotFound from "./404";
import JokeGenerator from "./joke";
import Dashboard from "./dashboard";
import Login from "./login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/register" element={<JokeGenerator/>}/>
          <Route path="/joke" element={<JokeGenerator/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
