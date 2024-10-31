import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

const Header = () => {
  return (
    <header
      className={`flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 font-sans sm:px-6`}
    >
      <Link to={'/'} className="tracking-widest">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
};

export default Header;
