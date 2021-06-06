import React from "react";
import PropTypes from "prop-types";
import styles from "./profile.module.css";

function Profile({
  user: {
    avatar,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={styles.mainDiv}>
      <h2 className={styles.title}>My Profile</h2>
      <div className={styles.block}>
        <img className={styles.image} src={avatar} alt="Аватар пользователя" />
        <div className={styles.personalInfo}>
          <p>{name}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={[styles.list, styles.block].join(" ")}>
        <li className={styles.listItem}>
          <span>Followers: </span>
          <span>{followers}</span>
        </li>
        <li className={styles.listItem}>
          <span>Views: </span>
          <span>{views}</span>
        </li>
        <li className={styles.listItem}>
          <span>Likes: </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    location: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

Profile.defaultProps = {
  user: {
    location: "Planet Earth",
    name: "Anonymous",
    avatar: "https://stm.in.ua/wp-content/uploads/2019/04/Anonymous-Mask3.jpg",
    tag: "anon",
    stats: {
      followers: "0",
      views: "0",
      likes: "0",
    },
  },
};

export default Profile;
