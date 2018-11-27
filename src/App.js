import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

export default class App extends Component {
    magicCount = 100;
  state = {
    persons: [
        {name: 'Alex', age: 26, key: this.magicCount++},
        {name: 'Dima', age: 44, key: this.magicCount++},
        {name: 'Hleb', age: 10, key: this.magicCount++}
    ],
      showPersons: false
  };
  nameChangeHandler = (event, key) => {
      const newPersons = [...this.state.persons];
      const index = newPersons.findIndex( p => p.key === key);
      newPersons[index].name = event.target.value;
        this.setState( {persons: newPersons} )
  };
  togglePersonsHandler = () => {
      this.setState({
          showPersons: !this.state.showPersons
      });

  };

  deletePersonHandler = (ind) => {
      const newPersons  =   [...this.state.persons];
      newPersons.splice(ind, 1);
     this.setState({
         persons: newPersons
     })
  };



  render() {

      let persons = null;
      let btnClass = '';

      if (this.state.showPersons) {

          persons = (
              <div>
                  {this.state.persons.map(({name, age, key}, ind) =>
                      <Person
                          name={name}
                          age={age}
                          key = {key}
                          click = {()=> this.deletePersonHandler(ind)}
                          changed = {(event) => this.nameChangeHandler(event,key)}
                      />)}
              </div>
          );
          btnClass = classes.Red;
      }

      const assignedClasses = [];
      if (this.state.persons.length <=2 ) {
          assignedClasses.push(classes.red);
      }
      if (this.state.persons.length <=1 ) {
          assignedClasses.push(classes.bold);
      }

    return (
          <div className={classes.App}>
           <h1>This is React App</h1>
           <p className={ assignedClasses.join(" ") }>This is really working!</p>
            <button className={btnClass}
                onClick={this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
          </div>
          );
  }
}
