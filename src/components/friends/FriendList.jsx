import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} avatar={avatar} name={name} status={isOnline} />
      ))}
    </ul>
  );
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };
  
  export default FriendList;