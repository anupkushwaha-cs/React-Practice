import React, { useState } from "react";
import Card from "./Componets/Card";
import Navbar from "./Componets/Navbar";
import Form from "./Componets/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar setToggle = {setToggle}/>
      {toggle? 
      
      ( <div className="p-6 flex justify-center">
      
        <Card />
      </div>):  <Form/>
      
      
      }
    
    
    </div>
  );
};

export default App;
