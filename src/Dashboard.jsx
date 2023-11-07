import React, {useState} from 'react';
import Navbar from "./Navbar.jsx"
import CreatePost from './CreatePost.jsx';
import BulletinBoard from './BulletinBoard.jsx';


export const Dashboard = () => {

  const [currentComponent, setCurrentComponent] = useState('bulletin');
  
  const toggleComponent = (componentName) => {
    setCurrentComponent(componentName);
  }

  const switchComponent = () => {
    switch(currentComponent){
      case "bulletin": return (
        <div>
          <BulletinBoard/>
          
        </div>
      );
        break;
      case "createPost": return (
        <div>
          <CreatePost/>
          
        </div>
      );
        break;
      default:
        break;
    }
    
  }
  return (
    <div>
      <Navbar onComponentSwitch={toggleComponent}/>
        <div>
            {switchComponent()}
        </div>
    </div>
  );
}

export default Dashboard;