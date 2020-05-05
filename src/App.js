import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephan', age: 20},
        ],
        otherState: 'some other state'
    }

    switchNameHandler = (newName) => {
        this.setState({persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephan', age: 40},
            ]})
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 29},
                {name: 'Stephan', age: 20},
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm React App</h1>
                <p>This is really working!</p>
                <button onClick={ () => this.switchNameHandler('Marta')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Marta2')}
                    changed={this.nameChangedHandler}
                >My hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;
