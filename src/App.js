import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Head from './components/head';
import List from './components/list';
import Sort from './components/sort';
import Form from './components/form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                number: '1',
                class: 'done',
                text: 'Необходимо купить молоко!'
            },

            task2: {
                number: '2',
                class: '',
                text: 'clean your teeth'
            }
        };
    };

    deleteBlock = (i) => {


        var arr = this.state.tasks;
        delete arr[i];
        this.setState ({tasks: arr});
    };

    addTask = (text) => {
        var counter = 0;

        for (var key in this.state) {
            counter++;
        }

        var allTasks = this.state;
        var lastTaskPlace = counter + 1;
        var taskName = 'task' + lastTaskPlace
        allTasks.taskName.number = lastTaskPlace;
        allTasks.taskName.class = '';
        allTasks.taskName.text = text;

        this.setState ({allTasks});

    };

    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };

    checkedTask = (i) =>{

    }

    eachTask = (obj) => {
        console.log(obj);

        return (
            <List key={obj.number}
                  index={obj.number}
                  procesStatus={obj.class}
                  updateText={this.updateText}
                  delete={this.deleteBlock}>

                {obj.text}
            </List>
        );
    };
  render() {
    return (
        <div>
            <Head/>

            <ul>
                {/*{this.eachTask(this.state)}*/}
                {Object.keys(this.state).map(taskParam => (
                    this.eachTask(this.state[taskParam])
                ))}
            </ul>

            <Sort/>

            <Form newTask={this.addTask} />

        </div>


    );
  }
}

export default App;
