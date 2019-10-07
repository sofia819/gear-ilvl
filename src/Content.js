import React, { Component } from "react"
import GearItem from "./components/GearItem"

class Content extends Component {

    // data is used multiple times in the code so I used class variable
    data = require('./gear-list.json').gear

    // initializes the min ilvl, currently min = 450
    constructor() {
        super()
        const min = 450
        this.state = {
            avgILVL: min
        }

    }

    // called after a selection is made
    handleChange = (event) => {
        const { name, value } = event.target
        let newILVL = 0
        value === "Tome" ?
            newILVL = 460
            :
            value === "Normal" ?
                newILVL = 450
                :
                newILVL = 470

        this.setState({ [name]: newILVL }, () => this.calcILVL())  // callback, called after setState is done

    }

    // update average ilvl
    calcILVL = () => {
        let sum = 0
        Object.keys(this.state).map(    // get keys from state object
            key => {
                if (key !== "avgILVL") {     // check if it is the average ilvl
                    sum += this.state[key]  // use the keys to get each value from state
                }
            }
        )
        this.setState({ avgILVL: sum / 12 })
    }

    // runs once after render
    componentDidMount = () => {     // initialize state because I wasn't able to before
        this.data.map(              // need to revisit to find a better way to do things?
            item => this.setState({ [item]: 450 })
        )
    }

    // generates GearItem fields to input gear
    render() {
        const lst = this.data.map(
            item => <GearItem key={item} name={item} handler={this.handleChange} />
        )
        return (
            <div>
                {lst}
                <p>Your average ilvl is {Math.floor(this.state.avgILVL)}.</p>
            </div>
        )
    }
}

export default Content