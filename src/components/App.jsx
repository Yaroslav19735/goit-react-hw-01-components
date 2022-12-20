import { Profile } from "components/Profile/Profile";
import { Statistics } from "components//Statistics/Statistics";
import { FriendList } from "components//FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from './data/user';
import data from './data/data';
import friends from './data/friends';
import transactions from './data/transactions';

export const App = () => {
  return (
    <div
      style={{
        alignItems: 'center',
      backgroundColor: 'hsla(0,2%,83%,.2)',
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      maxWidth: '1170px',
      padding: '15px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
