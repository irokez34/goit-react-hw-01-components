import './FriendList.css';

const FriendList = ({ children }) => {
  return <ul className="friend-list">{children}</ul>;
};

const FriendListItem = ({ friends }) => {
  return friends.map(friend => (
    <li key={friend.id} className="friend-list-item">
      <span
        className={friend.isOnline ? 'status online' : 'status offline'}
      ></span>
      <img
        className="friend-avatar"
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className="friend-name">{friend.name}</p>
    </li>
  ));
};

export { FriendList, FriendListItem };
