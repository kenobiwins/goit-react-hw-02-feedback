// import { PropTypes } from 'prop-types';

import { Component } from 'react';

import { Button, ButtonGroup,Title,Container,StatisticsPercentage } from './FeedbackVidget.styled';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (  
        <Button onClick={onLeaveFeedback}>{options}</Button>
    )
};
export const StatisticsList = ({ states, total, positivePercentage }) => {

    return (
        <ul>
            {Object.entries(states).map((el, i) => {
                return <li key={i}>{el[0]}: {el[1]}</li>
            })}
            <li>total: {total}</li>
            <StatisticsPercentage>Positive feedback: {positivePercentage}%</StatisticsPercentage>
        </ul>
    )
};
export const Section = ({ title, children }) => {
   
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
};
export const NotificationMessage = ({message}) => {
    return (
        <p>{message}</p>
    )
}
export class FeedbackVidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = (e) => {
        const key = e.target.textContent;

        this.setState(prevState => ({
            [key]: prevState[key] + 1
        }));
    };

    countTotalFeedback = () => {
            const total = Object.values(this.state).reduce((acc, el) => {
                acc += el 
                return acc
             },0);
  
        if (total) {
            return total
        }
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        // console.log(total);
        const possitiveValue = [this.state].reduce((acc, el) => {
               acc += el['good'] 
            return acc
        }, 0);
       
        const result =  (possitiveValue / total)*100
        if (!result) {
            return this.state.good;
        }
        return result.toFixed(2);
    }

    render() {
        return (
            <Container>
                <Section title={'Please leave feedback'}>
                    <ButtonGroup>
                        {Object.keys(this.state).map((el, i) => {
                        return <FeedbackOptions
                            key={i}
                            options={el}
                            onLeaveFeedback={this.handleClick} />
                    })}
                    </ButtonGroup>
                </Section>

                <Section title={'Statistics'}>
                    {this.countTotalFeedback() ?
                        <StatisticsList
                            states={this.state}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()} />
                        :
                        <NotificationMessage message={"There is no feedback"} />}
                </Section>
            </Container>
        )
    }
};

