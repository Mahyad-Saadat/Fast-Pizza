import React from 'react';
import { formatCurrency } from '../../utils/helpers';

type OrderItemProps = {
  item: {
    quantity: number;
    name: string;
    totalPrice: number;
  };
  isLoadingIngredients?: boolean;
  ingredients?: string[]; // Adjust the type based on what you expect
};

const OrderItem: React.FC<OrderItemProps> = ({
  item,
  isLoadingIngredients,
  ingredients,
}) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="flex justify-between">
        <p>
          <span>{quantity}×</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? 'Loading...' : ingredients?.join(', ')}
      </p>
    </li>
  );
};

export default OrderItem;
