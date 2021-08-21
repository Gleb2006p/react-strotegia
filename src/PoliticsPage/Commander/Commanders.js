import React from "react";
import Commander from "./Commander";
import './Commanders.css';

class Commanders extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className={"commanders"}>
                <table className={"containers"}>
                {
                    this.props.commanders.map(commander =>{
                        return (<td>
                            <Commander commander={commander}/>
                        </td>)
                    })
                }
                </table>


            </div>
        );
    }

}
export default Commanders;