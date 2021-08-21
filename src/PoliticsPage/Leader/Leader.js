import React from "react";
import './Leader.css';
class Leader extends React.Component{
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className={"leader-container"}>
                <img src={this.props.src} alt={""}/>
                <div className={"tooltip"}>
                    <li>
                        <dl className={"tooltip-text"}>
                            Имя : {this.props.name}
                        </dl>

                    </li>
                </div>
            </div>
        );
    }
}
export default Leader;