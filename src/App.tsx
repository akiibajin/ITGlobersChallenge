import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import NavBar from "./Components/NavBar";
import agenciesFromJson from "./agencies.json"
import { IAgency } from "./Interfaces/NavBar";
import './App.scss'
function App() {
  const [agencies, setAgencies] = React.useState<IAgency[]>([])

  React.useEffect(()=>{ 
    setAgencies(agenciesFromJson)    
  },[])
  
  return (
    <div className="App">
      <NavBar agencies={agencies}/>
      <Routes>      
      <Route path='/' element={<Home />} />
      <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
