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
            tasks: [
                'Необходимо купить молоко!',
                'Надо почистить зубы',
                'Просто отдохнуть'
            ]
        };
    };

    deleteBlock = (i) => {
        var arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };

    addTask = (text) => {
        var arr = this.state.tasks;
        arr.push(text);
        this.setState ({tasks: arr});

    };

    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };

    checkedTask = (i) =>{

    }

    eachTask = (item, i) => {
        return (
            <List key={i} index={i} updateText={this.updateText} delete={this.deleteBlock}>
                {item}
            </List>
        );
    };
  render() {
    return (
        <div>
            <Head/>

            <ul>
                {this.state.tasks.map (this.eachTask)}
            </ul>

            <Sort/>

            <Form newTask={this.addTask} />

        </div>


    );
  }
}

export default App;
