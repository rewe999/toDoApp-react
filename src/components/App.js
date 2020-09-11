import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component { 
  state = {
    tasks: [
      {
        id:0,
        text: 'wyjsc na piwo',
        date: '2020-09-10',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id:1,
        text: 'wyjsc na piwo1',
        date: '2020-09-10',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id:2,
        text: 'wyjsc na piwo2',
        date: '2020-09-10',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id:3,
        text: 'wyjsc na piwo3',
        date: '2020-09-10',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id:5,
        text: 'wyjsc na piwo4',
        date: '2020-09-10',
        important: false,
        active: true,
        finishDate: null,
      },
      
  ],
  }
  counter = this.state.tasks.length+1
          // 1 METODA NA USUNIECIE
  // deleteTask = (id) => {
  //   console.log('delete elementu id ' + id)
  //   const tasks = [...this.state.tasks];
  //   const index = tasks.findIndex(task => task.id === id);
  //   tasks.splice(index,1);
  //   this.setState({
  //     tasks: tasks
  //   })
  // }

          // 2 METODA NA USUNIECIE
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks,
    })
  }
  

  changeTaskStatus = (id) => {
    console.log('change elementu id ' + id)
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false
        task.finishDate = Date.now()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text,date,important) => {
    const task = {
        id: this.counter,
        text: text, //teks z inputa 
        date: date, //teks z inputa data
        important: important,  //checked z inputa
        active: true,
        finishDate: null,
    }
    this.counter++;
    console.log(task)
    this.setState(prevState => ({
      tasks: [...prevState.tasks,task]
    }))
    return true
  }

  render() {
    return (
      <div>
        <p>TODOAPP</p>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
        
      </div>
    );
  }
}

export default App;
