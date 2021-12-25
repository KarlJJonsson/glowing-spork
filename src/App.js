import './App.css';
import { useState } from 'react';
import { Signin } from './Signin';
import Main from './Main';
import Headermenu from './Headermenu';

export const App = () => {
  const [authorized, setAuthorized] = useState(false);

  const handleLogin = (val) => {
    setAuthorized(val);
  }

  if (!authorized){
    return(
      <div>
        <Signin auth={authorized} handleLogin={handleLogin}/>
      </div>
    );
  }
  else{
    return(
    <div className="App">
      <Headermenu/>
      <div>
        <button onClick={() => handleLogin(!authorized)}>
          Logout
        </button>
       <Main/>
      </div>
      
    </div>
    );
  }
}
export default App;