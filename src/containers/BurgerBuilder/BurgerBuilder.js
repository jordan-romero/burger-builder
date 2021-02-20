import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

import Aux from '../../hoc/Aux'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        )
    }
}
