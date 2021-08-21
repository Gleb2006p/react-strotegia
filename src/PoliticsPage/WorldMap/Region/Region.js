import React, {createRef} from "react";
import './Region.css';
import {createArmyMoveAction} from "../../../store/store-regions/region-reducer";
class Region extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.path = createRef();
        this.width = 20 / 1.5;
        this.height = 10 / 1.5;

    }
    onChose(){
        this.props.dispatch(createArmyMoveAction(this.props.data.id));
    }
    renderArmy(){

        if (this.path.current === null){
            return (
                <rect  x='100' y='100' height="10" width="10"   fill="#fff"/>
            )
        }
        return  (
            <g >
                <rect fill={this.props.data.armyColor} x={this.path.current.getBBox().x + this.path.current.getBBox().width / 2 - this.width / 2} y={this.path.current.getBBox().y + this.path.current.getBBox().height / 2 - this.height / 2} width={"" + this.width} height={"" + this.height}/>
                <text fill={'white'} x={this.path.current.getBBox().x + this.path.current.getBBox().width / 2 - this.width / 2} y={this.path.current.getBBox().y + this.path.current.getBBox().height / 2 - this.height / 2 + 5} fontSize={"5"} >{this.props.data.army}</text>
            </g>)
    }
    render() {
        return(
            <g>
                <path  onClick={this.onChose.bind(this)} className={"region"} ref={this.path} strokeWidth={"1"} stroke={"black"} opacity={1} fill={this.props.data.color} d={this.props.data.d}/>
                {this.renderArmy()}
            </g>
        );
    }
}
export default Region;