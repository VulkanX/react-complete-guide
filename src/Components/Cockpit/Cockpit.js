import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleButtonRef.current.click();

        // setTimeout(() => {
        //     alert('save data to cloud')
        // }, 1000)
        return () => {
            console.log('[Cockpit.js] Cleanup useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2');
        return () => {
            console.log('[Cockpit.js] Cleanup useEffect 2')
        }
    })

    let btnClass = '';

    if (!props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (props.personsLength <= 2) { assignedClasses.push(classes.red); }
    if (props.personsLength <= 1) { assignedClasses.push(classes.bold); }

    return (
        <div className={classes.Cockpit}>
            <h1>Person Lists</h1>
            <p className={assignedClasses.join(' ')}>{props.personsLength.toString()} person(s) in the list</p>
            <button className={btnClass} onClick={props.clicked} ref={toggleButtonRef}>Toggle Persons</button>
            <br /><br />
            <button onClick={props.login}>Login</button>
        </div>
    );
}

export default React.memo(cockpit);