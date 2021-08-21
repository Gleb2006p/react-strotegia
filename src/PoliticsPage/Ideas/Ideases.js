import React from "react";
import './Ideases.css'
import Ideas from "./Ideas";

class Ideases extends React.Component{
    constructor(props) {
        super(props);
        this.ideas = props.ideas;
    }

    render() {
        return (
            <div className={"ideases"}>
                <table>
                {
                    this.ideas.map((idea)=>{
                        return (
                           <td> <Ideas src={idea.image} options={idea.options} name={idea.name}/></td>
                        )
                    })
                }
                </table>
            </div>
        );
    }
}
export default Ideases;