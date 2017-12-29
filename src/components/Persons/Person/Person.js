import React from 'react';

const person = (props) => {

    // const randomNum = Math.random();

    // if(randomNum >= 0.7){
    //     throw new Error("Something went wrong");
    // }

    return (
        <div className="Person">
            <p onClick={props.click}>I'am a {props.name} and I am {props.age}! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}


export default person;

