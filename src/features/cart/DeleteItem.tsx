import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './CartSlice';
interface Props {
  pitzaId: number;
}
const DeleteItem = ({ pitzaId }: Props) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(deleteItem(pitzaId))}
      type="button"
      variant="small"
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
