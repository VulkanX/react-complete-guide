import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] Rendering...');
        return (
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Login Please!</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} ref={this.inputElementRef}></input>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
}

export default withClass(Person, classes.Person);