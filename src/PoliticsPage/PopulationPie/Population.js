import React from "react";
import './Population.css';
import {Chart} from "react-google-charts";
class Population extends React.Component{
    constructor(props) {
        super();
        this.props = props;

    }

    render(){

        return (
            <div className={"population"}>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Population', 'Party'],
                        ...this.props.partyPopulationData(),
                    ]}
                    options={{
                        title: 'Party Population',
                        backgroundColor : 'gray',
                        colors : this.props.ideologuesColor,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
        );
    }
}
export default Population;