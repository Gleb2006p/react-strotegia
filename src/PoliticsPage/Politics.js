import React from "react";
import './Politics.css'
import Flag from "./Flag/Flag";
import Leader from "./Leader/Leader";
import Population from "./PopulationPie/Population";
import Commanders from "./Commander/Commanders";
import Ideases from "./Ideas/Ideases";
import WorldMap from "./WorldMap/WorldMap";
class Politics extends React.Component{
    constructor(props) {
        super();

        this.props = props;

    }

    render() {

        return (
            <div className="politics">
                <table>
                    <td>
                        <td>
                            <Flag src={this.props.store.flag}/>
                        </td>
                        <tt>
                            <Leader name={"Тихон"} src={"images/leaders/caiser.png"}/>
                        </tt>
                        <tt>
                            <Population  ideologuesColor={this.props.store.ideologuesColor} partyPopulationData={this.props.store.generateIdeologuesData.bind(this.props.store)}/>
                        </tt>
                        <tt>
                            <Commanders commanders={this.props.store.commanders}/>
                        </tt>
                        <tt>
                        </tt>
                        <tt>
                            <Ideases ideas={this.props.store.ideas}/>
                        </tt>

                    </td>


                </table>
            </div>
        );
    }
}
export default Politics;