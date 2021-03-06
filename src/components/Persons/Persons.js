import React, {Component} from 'react';
import Person from "./Person/Person";


class Persons extends Component{

    constructor(props) {
        super(props);
        console.log('[Persons.js] Constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    }

    componentWillMount() {
        console.log('[Persons.js] componentWillMount.');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount.');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Persons.js] shouldComponentUpdate.', nextProps, nextState, nextContext);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate.', prevProps, prevState);
        // return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate.', prevProps, prevState, snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}/>
            }
        );
    }

}

export default Persons;