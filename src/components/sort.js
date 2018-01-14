import React, { Component } from 'react';


class Sort extends Component {
    render() {
        return (
            <div class="togglebutton-wrapper">
                <label for="todosort">
                    <span class="togglebutton-label">Move done items at the end?</span>
                    <span class="tooglebutton-box"></span>
                </label>
                <input id="todosort" type="checkbox" name="todosort"/>
            </div>
        );
    }
}

export default Sort;
