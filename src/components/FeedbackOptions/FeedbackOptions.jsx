import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <Button onClick={onLeaveFeedback}>{options}</Button>;
};
