import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';


class App extends Component {

  state = {
    persons: [
      { id: 3456, name: 'Max', age: 28 },
      { id: 6789, name: 'Will', age: 39, hobbies: 'Gaming, Racing, Sleepin!' },
      { id: 1998, name: 'Katy', age: 30 }
    ],
    showPersons: false
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
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
