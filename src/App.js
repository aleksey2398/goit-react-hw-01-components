import Profile from './components/profile/profile';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import statisticalData from './data/statistical-data.json';
import user from './data/user.json';
import Statistics from './components/statistic/statistic';
import FriendList from './components/friends/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';
import './App.css';


const App = () => (
  <div>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics 
    title="Upload stats" stats={statisticalData} />

    <FriendList 
    friends={friends} />

    <TransactionHistory 
    items={transactions} />
  </div>
);

export default App;