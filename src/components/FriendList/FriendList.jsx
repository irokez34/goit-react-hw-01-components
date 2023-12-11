import './FriendList.css';
const FriendList = ({ friends }) => {
  const friendItem = friends.map(friend => (
    <li className="item" key= {friend.id}>
      <span className={friend.isOnline ? "status online" : "status offline"}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name}</p>
    </li>
  ));

  return (
    
  <ul className="friend-list">{friendItem}</ul>);
};

export default FriendList;
