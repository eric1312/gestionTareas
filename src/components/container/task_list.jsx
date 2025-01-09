import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import Taskform from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Tarea1', 'Descripcion1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Tarea2', 'Descripcion 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task('Tarea1', 'Descripcion 3', false, LEVELS.BLOCKING);


    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            console.log('TaskList component is going to unmount...')
        }
    }, [tasks])


    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Detele this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Detele this Task:', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Titule</th>
                        <th scope='col'>Descripcion</th>
                        <th scope='col'>Prioridad</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tasks.map((task, index) => {
                        return (
                                <TaskComponent 
                                    key={index} 
                                    task={task}
                                    complete={completeTask}
                                    remove = {deleteTask}
                                >
                                </TaskComponent>
                            )
                        }
                    )}
                </tbody>
            </table>
        )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
        <div>
            <h3>No hay ninguna tarea</h3>
            <h4>Puedes empezar a crearlas</h4>
        </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>
                            Tus Tareas:
                        </h5>
                    </div>
                    {/* Card Body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {/* TODO: Add Loading Spinner */}
                        {loading ? (<p style={loadingStyle}>Cargando Tareas...</p>) : tasksTable}
                    </div>
                </div>
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>
        </div>
    );
};


export default TaskListComponent;
