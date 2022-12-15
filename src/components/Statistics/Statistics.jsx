import { StatisticsPercentage } from './Statistics.styled';

export const Statistics = ({
  bad,
  neutral,
  good,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      {/* {Object.entries(states).map((el, i) => {
        return (
          <li key={i}>
            {el[0]}: {el[1]}
          </li>
        );
      })} */}
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>total: {total}</li>
      <StatisticsPercentage>
        Positive feedback: {positivePercentage}%
      </StatisticsPercentage>
    </ul>
  );
};
