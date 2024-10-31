import { useSelector } from 'react-redux';
import { theRootState } from '../../store';

const UserName = () => {
  const username: string = useSelector(
    (state: theRootState) => state.user.username,
  );
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
};

export default UserName;
