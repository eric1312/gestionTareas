import logo from './logo.svg';
import './App.css';
//import ListaTareasComponent from './components/container/lista_tareas';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/**Componente de listado de tareas */}
          <TaskListComponent></TaskListComponent> 
      </header>
    </div>
  );
}

export default App;
