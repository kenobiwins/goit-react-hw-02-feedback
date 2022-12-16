import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      {children}
    </section>
  );
};
