import React, { Component } from 'react';


class Form extends Component {
    save = () => {
        var value = this.refs.newTxt.value;
        this.props.newTask (value);
        value = '13213213';
        //this.setState ({edit: false})
        this.refs.newTxt.value = '';

    };
    render() {
        return (
            <form name="newform">
                <label for="newitem">Add to the todo list</label>
                <input ref="newTxt" type="text" name="newitem" id="newitem"/>
                <button onClick={this.save} type="button">Add item</button>
            </form>
        );
    }
}

export default Form;
