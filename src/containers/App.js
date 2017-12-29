import React, {Component} from 'react';
//means the default export is React from the react package and
//also the another export is Component will be imported.
import './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
    state = {
        persons: [
            {id: "adsas1", name: "Max", age: 28},
            {id: "dsavs1", name: "Manu", age: 29},
            {id: "adqwas1", name: "Stephanie", age: 26}
        ],
        showPersons: false,
        text: ''
    }

    deletePersonHandler = (personIndex) => {
        //because the objects and array is a reference types . when we change the array we also changed to
        //the real array inside the state.
        // so firstly we must create a copy from a real object or array then update the state.
        let persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }


    togglePersonsHandler = () => {
        const showPersons = this.state.showPersons;
        this.setState({showPersons: !showPersons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        // spread operator
        const person = {
            ...this.state.persons[personIndex]
        };

        /// or we can use  :
        // const person =  Object.assign({},this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })

    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        //<ErrorBoundry key={person.id}>

                        return <Person name={person.name}
                                       age={person.age}
                                       click={() => this.deletePersonHandler(index)}
                                       key={person.id}
                                       changed={(event) => this.nameChangedHandler(event, person.id)}/>
                        //</ErrorBoundry>
                    })}
                </div>
            );
            style.backgroundColor = 'red'; //dynamically edit style.
        }

        let classNames = []; //dynamically edit class names

        if (this.state.persons.length <= 2) {
            classNames.push('red');
        }

        if (this.state.persons.length <= 1) {
            classNames.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi I'am React app </h1>
                <p className={classNames.join(' ')}>This is actually working </p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>

        );
        // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Hi I\'am React app '))
    }
}

export default App;
