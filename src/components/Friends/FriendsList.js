import React from "react";
import FriendsListItem from "./FriendListItem.js";

function FriendsList(props) {
  return <FriendsListItem friends={props.friendsList} />;
}

export default FriendsList;
