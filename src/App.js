import './App.css';
import Header from './Page/Header';
import Content from './Page/Content';
import Footer from './Page/Footer';
import { useState } from 'react';



function App() {
  
const [myusername, setUserName] = useState("Adam");

  return (
    <div>
      <Header username={myusername}/>
      <Content username={myusername} setUserName={setUserName}/>

    </div>

  );
}

export default App;
