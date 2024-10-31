import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import { theRootState } from '../../store';

function EmptyCart() {
  const username = useSelector((state: theRootState) => state.user.username);
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas, {username}! :)
      </p>
    </div>
  );
}
export default EmptyCart;
