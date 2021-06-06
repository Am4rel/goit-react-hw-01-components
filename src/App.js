import React from "react";

import userData from "./files/social-profile/user.json";
import statData from "./files/statistics/statistical-data.json";
import friends from "./files/friend-list/friends.json";
import transactions from "./files/transaction-history/transactions.json";

import Profile from "./components/Profile/Profile.js";
import Statistics from "./components/Stats/Statistics.js";
import FriendsList from "./components/Friends/FriendsList.js";
import TransactionHistory from "./components/Transactions/TransactionHistory.js";

function App() {
  return (
    <>
      <Profile user={userData} />
      <Statistics statisticsList={statData} />
      <FriendsList friendsList={friends} />
      <TransactionHistory transactionsList={transactions} />
    </>
  );
}

export default App;
