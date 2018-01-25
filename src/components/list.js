import React, { Component } from 'react';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checkedClass: '',
            checkedIcon: 'check_box_outline_blank'
        };
    };
    chekerTask = () => {
        if(this.state.checked){
            this.setState({
                checked: !this.state.checked,
                checkedClass: '',
                checkedIcon: 'check_box_outline_blank'
            })
        }
        else{
            this.setState({
                checked: !this.state.checked,
                checkedClass: 'done',
                checkedIcon: 'check_box'
            })
        }
    };
    remove = () => {
        this.props.delete (this.props.index);
    };
    save = () => {
        this.setState ({edit: false})
    };

    render() {
        return (
            <li className={this.props.procesStatus}>
                <span class="label">{this.props.children}</span>
                <div class="actions">
                    <button onClick={this.chekerTask} type="button" aria-label="Undone" title="Undone" class="btn-picto">
                        <i aria-hidden="true" class="material-icons">{this.state.checkedIcon}</i>
                    </button>

                    <button type="button" aria-label="Delete" title="Delete" className="btn-picto" onClick={this.remove}>
                        <i aria-hidden="true" class="material-icons">delete</i>
                    </button>
                </div>
            </li>
        );
    }
}

export default List;
