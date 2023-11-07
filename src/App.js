import React, {useState} from 'react';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register"
import Dashboard from './Dashboard'; 


function App() {

  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const switchForm = () => {
    switch(currentForm){
      case "login": return (
        <div>
          <Login onFormSwitch={toggleForm}/>
          
        </div>
      );
        break;
      case "register": return (
        <div>
          <Register onFormSwitch={toggleForm}/>
          
        </div>
      );
        break;
      case "dashboard": return (
        <div>
          <Dashboard onFormSwitch={toggleForm}/>
        </div>
      );
      default:
        break;
    }
    
  }

  return (
    
    <div className="App">
    {
      // currentForm === "login"  ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      
       switchForm()
        
        
      
    
    }
    
  </div>
   
  );
}

export default App;


