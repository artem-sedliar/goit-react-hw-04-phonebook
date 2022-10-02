import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
