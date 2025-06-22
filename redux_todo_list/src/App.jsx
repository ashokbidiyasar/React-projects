
import './App.css'
import AddTodo from './components/AddTodo';
import Todo_shape from './components/Todo_shape';
function App() {
  

  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-3 mt-[20%]'>
        <AddTodo />
        <Todo_shape />
      </div>
    </>
  );
}

export default App
