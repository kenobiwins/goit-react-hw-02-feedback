import { Component } from 'react';

import { ButtonGroup, Container } from './BaseStyles/BaseStyles.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const key = e.target.textContent;

    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);

    if (total) {
      return total;
    }
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    // console.log(total);
    const possitiveValue = [this.state].reduce((acc, el) => {
      acc += el['good'];
      return acc;
    }, 0);

    const result = (possitiveValue / total) * 100;
    if (!result) {
      return this.state.good;
    }
    return Math.round(result);
  };

  render() {
    const { bad, neutral, good } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <ButtonGroup>
            {Object.keys(this.state).map((el, i) => {
              return (
                <FeedbackOptions
                  key={i}
                  options={el}
                  onLeaveFeedback={this.handleClick}
                />
              );
            })}
          </ButtonGroup>
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              // states={this.state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
