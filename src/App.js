import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
    
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  state = {
    persons: [
      { id: 3456, name: 'Max', age: 28 },
      { id: 6789, name: 'Will', age: 39, hobbies: 'Gaming, Racing, Sleepin!' },
      { id: 1998, name: 'Katy', age: 30 }
    ],
    showPersons: false,
    showCockpit: true
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p => id === p.id));
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;   
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const currentState = this.state.showPersons;
    this.setState({showPersons: !currentState});
  }


  render() {
    console.log('[App.js] Render')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
      )
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        { this.state.showCockpit ? (<Cockpit showPersons={this.state.showPersons} personsLength={this.state.persons.length} clicked={this.togglePersonsHandler} />) : null }
        {persons}
      </div>
    );
  }
}

export default App;
