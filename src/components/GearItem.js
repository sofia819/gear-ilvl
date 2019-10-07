import React from "react"
import "../index.css"

class GearItem extends React.Component{
    render(props) {
        // Options
        const lst = ["Normal", "Tome", "Aug. Tome", "Eden"]

        // Generate selection with options
        const selections = lst.map(
            choice => <option key={choice}>{choice}</option>
        )
        
        // return the selections
        // onChange is passed from parent to handle event
        // name is for label and returning event? Research on this.
        return (
            <div>
                <label>
                    {this.props.name}
                </label>
                <select name={this.props.name} onChange={this.props.handler}>
                    {selections}
                </select>
            </div>
        )
    }
}

export default GearItem