import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import TodoShow from './TodoShow';
import AddTodo from './AddTodo';
function App() {

  return (
    <div>
      <div className="  flex justify-center p-2 mb-2">
        <p className='text-[30px] uppercase'>Todo With Redux toolkit</p>
      </div>
      <AddTodo />
      <TodoShow />
    </div>
  );
}

export default App;
