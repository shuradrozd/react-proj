import React, {Component} from 'react';
import classes from './Person.css';

export default class Person extends Component {

    render() {

        // const rnd = Math.random();

        // if (rnd > 0.7) {
        //     throw new Error('Component not found');
        // }

        const { name, age, click, changed } = this.props;
        return (
            <div className={classes.Person}>
                <p onClick={click}>I'm {name} and I am {age} years old.</p>
                <input type="text" onChange={changed} value={name}/>
            </div>
        );
    }
}


