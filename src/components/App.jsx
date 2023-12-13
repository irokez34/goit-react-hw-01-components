import React from 'react';
import { Profile } from './profile/Profile';
import Statistics from './Statistics/Statistics';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import { FriendList, FriendListItem } from './FriendList/FriendList';

import transactions from '../dataJson/transactions.json';
import friends from '../dataJson/friends.json';
import user from '../dataJson/user.json';
import data from '../dataJson/data.json';

export const App = () => {
  return (
    <div>
      <h2>Task 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h3>Task 3</h3>
      <FriendList children={<FriendListItem friends={friends} />} />

      <h4>Task 4</h4>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
