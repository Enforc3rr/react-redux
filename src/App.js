import './App.css';
import {useSelector , useDispatch} from 'react-redux';
import {increment, login,logout} from './actions';



function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(login())}>-</button>      
      <button onClick={()=>dispatch(logout())}>__</button>    
      {isLogged ? <h3> valuable information</h3>:""}
    </div>
  );
}

export default App;
