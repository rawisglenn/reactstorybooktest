import './App.css';
import Header from './Page/Header';
import Content from './Page/Content';
import { useState, createContext} from 'react';
 

export const UserNameContext = createContext();

function App() {  
//const [myusername, setUserName] = useState("Adam");

  return (
    <>
    <UserNameContext.Provider value={"Jim"}>
    <div>
      <Header/>
      <Content/>
    </div>
    </UserNameContext.Provider>

    {/*
    <div>
      <Header username={myusername}/>
      <Content username={myusername} setUserName={setUserName}/>
    </div> 
    */
    }

    </>
  );
}

export default App;



