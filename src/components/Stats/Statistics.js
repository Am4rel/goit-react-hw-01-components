import React from "react";
import PropTypes from "prop-types";
import styles from "./stats.module.css";

const Statistics = (props) => (
  <section className={styles.mainDiv}>
    {props.title && <h2 className={styles.title}>{props.title}</h2>}

    <ul className={styles.list}>
      {props.statisticsList
        .sort((a, b) => b.percentage - a.percentage)
        .map(({ id, label, percentage }) => (
          <li key={id} className={styles.listItem}>
            <span>{label}</span>
            <span> - </span>
            <span>{percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  statisticsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
