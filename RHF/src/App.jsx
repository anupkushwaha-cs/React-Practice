import React, { useState } from "react";
import Card from "./Componets/Card";
import Navbar from "./Componets/Navbar";
import Form from "./Componets/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setToggle={setToggle} />
      {toggle ? 
      
      (
        <div className="p-6 flex justify-center">
          {user.map((elem, index) => {
            return <Card key={index} user={elem} />;
          })}
        </div>
      ) 
      
      : 
      
      (
        <Form setForm={setUser}  setToggle={setToggle}/>
      )}


    </div>
  );
};

export default App;
