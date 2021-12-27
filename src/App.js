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
          <a
          class="text-blue-400 hover:text-sky-700 text-bold" 
          href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
          target="_blank"
          rel="noopener noreferrer"
          >
          Tailwind test
        </a>
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