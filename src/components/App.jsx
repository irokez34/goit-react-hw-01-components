import { Profile } from './profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import trasaction from '../dataJson/transactions.json';
import friends from '../dataJson/friends.json';
import user from '../dataJson/user.json';
import data from '../dataJson/data.json';

export const App = () => {
  return (
    <>
      <h2>Task 1</h2>
      {
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h3>Task 3</h3>
      <FriendList friends={friends} />
      <h4>Task 4</h4>
      <TransactionHistory transactions={trasaction}/>
    </>
  );
};
