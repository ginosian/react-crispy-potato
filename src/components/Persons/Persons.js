import React, {Component, PureComponent} from 'react';
import Person from "./Person/Person";


class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount.');
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] shouldComponentUpdate.');
    //     if (
    //         nextProps.persons !== this.props.persons
    //         || nextProps.changed !== this.props.changed
    //         || nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate.');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate.');
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount.');
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