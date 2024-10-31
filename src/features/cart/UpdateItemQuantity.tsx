import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './CartSlice';
interface Props {
  pizzaId: number;
  currenQuantity: number;
}
const UpdateItemQuantity = ({ pizzaId, currenQuantity }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="button"
        variant="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span>{currenQuantity}</span>
      <Button
        type="button"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        variant="round"
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
