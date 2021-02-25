import React from 'react'

import classes from './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]]} >
            {props.children}
        </button>
    )
}

export default Button
