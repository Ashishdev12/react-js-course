import React, { Component } from 'react';
import ToDoItemChild from './toDoItemChild';

class ToDoListParent extends Component {
    state = { 
        task: '',
        allTodo: [
            {id: 1, task: 'Call Accountant'}
        ]
     }

    // Mounting - 1 
    // what should be done
    //  - initialize the state
    //  - bind events
    // what should not be done
    //  - do not cause side effects like backend API calls
    constructor(){
        super();
        console.log("Parent constructor called...");
    }

    // Mounting - 2, Updating - 1
    // rarely used method, used when the state of the component depends on the changes in props over time
    // what should be done
    //  - set the state
    //  - a static method - so cant access this keyword
    // what should not be done
    //  - do not cause side effects like backend API calls
    static getDerivedStateFromProps(props, state){
        console.log("Parent getDerivedStateFromProps called", props, state);
        return {};

    }

    // Mounting - 4
    // called only once in the whole lifecycle of the compoenent
    // perfect place to make side effects like backend API calls
    componentDidMount(){
        console.log("Parent componentDidMount called...");
    }

    // Updating - 2
    // what should be done
    //  - can decide if the compoenent should be redenred or not by comparing nextProps and nextState with current props and state
    //  - used to enhance performance
    //  - by default all compoennt and child components will redender, by returning false we can avoid this
    // what should not be done
    //  - do not cause side effects like backend API calls
    //  - do not call setState
    shouldComponentUpdate(nextProps, nextState){
        console.log("Parent shouldComponentUpdate called...", nextProps, nextState);
        return true;
    }

    // Mounting - 3, Updating - 3
    // what should be done
    //  - read the state and props and return JSX
    // what should not be done
    //  - do not cause side effects like backend API calls
    //  - do not interact with DOM
    render() { 
        console.log("Parent render called...");
        return (
            <div className="container m-5 p-5">
                <h2>ToDo List</h2>
                <input type='text' value={this.state.task} onChange={(event)=>this.setState({task: event.target.value})}/>
                <button className="btn btn-warning mx-5" onClick={()=>this.handleAddTodo()}>Add</button>
                <ul className="list-group">
                    {this.renderTodoTasks()}
                </ul>
            </div>
        );
    }

    // Updating - 4
    // called right before the changes in the virtual DOM are going to be made in actual DOM
    // use case is can get some info from the DOM like the scroll position
    // the return value is passed as the 3rd parameter to the next lifecycle method
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Parent getSnapshotBeforeUpdate called...", prevProps, prevState);
        return null;
    }

    // Updating - 5
    // called only once during the rerender cycle
    // correct place to make api calls based on the previous and current prop values
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Parent componentDidUpdate called...", prevProps, prevState, snapshot);
    }

    // Unmounting - 1
    // called immediately before a component is unmounted amd destroyed
    // should not call setState here
    // can perform cleaning tasks like cancelling network calls, cancelling subscriptions etc
    componentWillUnmount(){
        console.log("Parent componentWillUnmount called...")
    }


    renderTodoTasks=()=>{
        return (
            this.state.allTodo.map((eachTodo)=>(<ToDoItemChild key={eachTodo.id} todo={eachTodo}/>))
        )
    } 

    handleAddTodo=()=>{
        const updatedAllTodo = this.state.allTodo;
        updatedAllTodo.push({
            id: this.state.allTodo.length+1,
            task: this.state.task
        });
        this.setState({allTodo: updatedAllTodo});
        this.setState({task: ''})
    }

    
}
 
export default ToDoListParent;