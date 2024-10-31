import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import { theRootState } from '../store';
import Button from './Button';
function Home() {
  const username = useSelector((state: theRootState) => state.user.username);
  return (
    <div className="p my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="./menu" type="button" variant="primary">
          Countinue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
