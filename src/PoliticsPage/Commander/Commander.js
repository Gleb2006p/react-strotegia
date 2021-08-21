import React from "react";
import './Commander.css'
class Commander extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className={"commander"}>
                <img className={"commander-img"} draggable={"false"} src={this.props.commander.image}/>
                <div className={"tooltip"}>
                    <li>
                        <dl className={"tooltip-text"}>
                            Имя : {this.props.commander.name}
                        </dl>
                        <hr className={"tooltip-text"}/>
                        <dl className={"tooltip-text"}>
                            Опции : {this.props.commander.options}
                        </dl>
                    </li>

                </div>
            </div>
        );
    }

}
export default Commander;