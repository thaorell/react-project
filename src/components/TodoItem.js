import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {   
    getStyle = () => {
        // if(this.props.todo.completed){
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // }
        // else{
        //     return{
        //         textDecoration: 'none'
        //     }
        // }
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = () => {
           console.log(this.props)
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style = {this.getStyle()} >
                <p>
                    <input type= "checkbox" onChange={this.props.markComplete.bind(
                        this, id)} />{' '} 
                    { this.props.todo.title }
                    <button style = {btnStyle} onClick={this.props.delete.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '100%',
    padding: '9px 9x',
    float: 'right',
}
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
} 

// const itemStyle = {
//     backgroundColor: 'f4f4f4'
// }

export default TodoItem
 