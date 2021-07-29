import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Products from './products'
import First from './first'
function App() {
  
  
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(false);
  
  const handleClick =() =>{
    setCount(count +1);
  };
  const handleLogClick = () => {
    setIsLog(!isLog);
    
  };

  return (
    <div className="App">
     {isLog ? (
     <p> we are logged in </p> )
     :( <p>you are logged out, please sihn in</p> 
     )}
     <button onClick={handleLogClick}>{isLog ? <span>Logout</span> : <span>login </span>} </button>
     <Products count={count} handleClick={handleClick}/>
    </div>
   
      
  );
}

export default App;
