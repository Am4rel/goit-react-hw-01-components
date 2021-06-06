import React from "react";
import PropTypes from "prop-types";
import styles from "./transactions.module.css";

function TransactionHistory(props) {
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.title}>My Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.transactionsList.map(({ type, amount, currency, id }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  transactionsList: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
