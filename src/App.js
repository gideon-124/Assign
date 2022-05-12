import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';
import {BrowserRouter} from "react-router-dom"
import {Routes,Route } from "react-router-dom"

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/Add" element={<Add/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
