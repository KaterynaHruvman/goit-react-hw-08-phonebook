import PropTypes from 'prop-types';
import styles from '../components/Section.module.css';
import React from 'react';
const Section = ({ title, children }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);
Section.defaultProps = {
  title: '',
};
Section.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Section;
