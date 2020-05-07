import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('[Person.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount.');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[Person.js] shouldComponentUpdate.', nextProps, nextState, nextContext);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate.', prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidUpdate.', prevProps, prevState, snapshot);
    }

    render(){
        console.log('[Person.js] rendering...')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}

export default Person;