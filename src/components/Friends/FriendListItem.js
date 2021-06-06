import React from "react";
import PropTypes from "prop-types";
import styles from "./friends.module.css";

function FriendsListItem(props) {
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.title}>My Friends</h2>
      <ul className={styles.list}>
        {props.friends.map(
          ({
            id,
            isOnline,
            avatar = "https://stm.in.ua/wp-content/uploads/2019/04/Anonymous-Mask3.jpg",
            name = "Anonymous",
          }) => (
            <li key={id} className={styles.listItem}>
              <img
                className={styles.avatar}
                src={avatar}
                alt={name}
                width="48"
              />
              <p>{name}</p>
              <span
                style={{
                  backgroundColor: isOnline ? "#a9deaa" : "#ebaca4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "30px",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                {isOnline ? "Online" : "Offline"}
              </span>
            </li>
          )
        )}
        ;
      </ul>
    </div>
  );
}

FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

FriendsListItem.defaultProps = {
  avatar: "https://stm.in.ua/wp-content/uploads/2019/04/Anonymous-Mask3.jpg",
  name: "Anonymous",
};

export default FriendsListItem;
