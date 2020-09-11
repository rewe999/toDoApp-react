import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active === true)
    const done = props.tasks.filter(task => task.active !== true)

    done.sort((a,b) => {
        return b.finishDate - a.finishDate
    })

    if(done.length>2){
        done.sort((a,b) => {
            if(a<b) return -1;
            if(a>b) return 1;
            return 0
        })
    }

    if(active.length>2){
    active.sort((a,b) => {
        if(a<b) return -1;
        if(a>b) return 1;
        return 0
    })
    }

    const activeTasks = active.map(task => 
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
     )

     const doneTasks = done.map(task => 
        <Task key={task.id} task={task} delete={props.delete} change={props.change}/>
     )


    return ( 
        <>
        <div className="active">
            <>
            <h1>Zadania do Zrobienia ({activeTasks.length})</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Brak zadań :)</p>}
            </>
        </div>

        <hr/>

        <div className="done">
            <h1>Zadania zrobione ({doneTasks.length})</h1>
            {doneTasks.length>3 && <p>wyświetlono ostatnie 3 zadania</p>}
            {doneTasks.slice(0,3)}
        </div>
        </>
     );
}
 
export default TaskList;