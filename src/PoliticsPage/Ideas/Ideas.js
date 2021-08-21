import React from "react";
import './Ideas.css';
class Ideas extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ideas">
                <img src={this.props.src} draggable={"false"} alt={""}/>
                <div className={"tooltip"}>

                    <p className={"tooltip-text"}>{this.props.name}</p>
                    <hr  className={"tooltip-text"}/>
                    <p className={"tooltip-text"}>{this.props.options}</p>

                </div>
            </div>
        );
    }
}
export default Ideas;