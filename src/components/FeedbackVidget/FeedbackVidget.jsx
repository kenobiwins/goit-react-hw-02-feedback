import { PropTypes } from 'prop-types';
import { Children } from 'react';
import { Component } from 'react';

export const Button = ({status}) => {
    return (
        <button>{status}</button>
    )
};

export const StatisticsList = ({states}) => {
    console.log(states);
    return (
        <ul>
            {Object.entries(states).map((el, i) => {
             return   <li key={i}>{el[0]}: {el[1]}</li>
            })}
        </ul>
    )
}

export class FeedbackVidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    render() {

        return (
            <div>
                <h2>Please leave feedback</h2>

                {Object.keys(this.state).map((el,i) => {
                    return <Button
                        key={i}
                        status={el}/>             
                })}

                <h2>Statistics</h2>

                <StatisticsList states={this.state}/>

            </div>
        )
    }
};

