import { Profile } from './profile/Profile';
import  Statistics  from './Statistics/Statistics';


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
      
    </>
  );
};
