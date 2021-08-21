import React from "react";
import './Flag.css';

class Flag extends React.Component{
    constructor(props) {
        super();
        this.props = props;
    }
    render() {
        return (
            <div className="flag-container">
                <img src={this.props.src} alt="" draggable={"false"}/>
            </div>
        )
    }
}
export default Flag;