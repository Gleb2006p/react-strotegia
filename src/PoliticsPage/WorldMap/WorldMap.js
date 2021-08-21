import React from "react";
import './WorldMap.css';
import Region from "./Region/Region";
class WorldMap extends React.Component{
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className={"map-container"}>

                <svg viewBox={"0 0 500 300"}>

                    {
                        this.props.store.regions.map(region => {
                            return <Region data={region} dispatch={this.props.store.dispatch}/>
                        })

                    }

                </svg>
            </div>
        );
    }
}
export  default WorldMap;