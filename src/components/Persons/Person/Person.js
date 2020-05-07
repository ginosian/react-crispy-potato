import React, {Component, Fragment} from 'react';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount.');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Person.js] shouldComponentUpdate.');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate.');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate.');
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
        )
        // <div className={classes.Person}>
        //
        // </div>
    }
}

export default Person;