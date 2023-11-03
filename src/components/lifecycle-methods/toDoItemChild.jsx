import React, { Component } from 'react';

class ToDoItemChild extends Component {
    state = { 
        todo: this.props.todo
    }
    
    // Mounting - 1
    constructor(props){
        super(props);
        console.log("Child constructor called...");
    }

    // Mounting - 2, Updating - 1
    static getDerivedStateFromProps(props, state){
        console.log("Child getDerivedStateFromProps called", props, state);
        return {todo: props.todo}
    }

    // Updating - 2
    shouldComponentUpdate(nextProps, nextState){
        console.log("Child shouldComponentUpdate called...", nextProps, nextState);
        return true;
    }

    // Mounting - 3, Updating - 3
    render() { 
        console.log("Child render called...");
        return (    
            <li className="list-group-item">{this.state.todo.id} - { this.state.todo.task }</li>
        );
    }

    // Mounting - 4
    componentDidMount(){
        console.log("Child componentDidMount called...");
    }
    // Updating - 4
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Child getSnapshotBeforeUpdate called...", prevProps, prevState);
        return null;
    }

    // Updating - 5
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Child componentDidUpdate called...", prevProps, prevState, snapshot);
    }
    
    // Unmounting - 1
    componentWillUnmount(){
        console.log("Child componentWillUnmount called...")
    }
}
 
export default ToDoItemChild;