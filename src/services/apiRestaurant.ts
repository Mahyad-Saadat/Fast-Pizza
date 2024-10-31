import { OrderData } from '../features/order/CreateOrder';

const API_URL = 'https://react-fast-pizza-api.onrender.com/api';
interface UpdateOrder {
  status?: string; // Example: status of the order (e.g., "pending", "shipped", "delivered")
  quantity?: number;
  priority?: boolean;
  // Example: quantity of items in the order
  // Add other fields as needed based on your order structure
}

// Define types
interface MenuItem {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}

interface Order {
  id: number;
  items: MenuItem[];
  total: number;
  // Add other properties as needed
}

// Fetch Menu
export async function getMenu(): Promise<MenuItem[]> {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw new Error('Failed getting menu');

  const { data }: { data: MenuItem[] } = await res.json();
  return data;
}

// Fetch Order by ID
export async function getOrder(id: number | string): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);

  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data }: { data: Order } = await res.json();
  return data;
}

// Create a new Order
export async function createOrder(newOrder: OrderData): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed creating your order');
    const { data }: { data: Order } = await res.json();
    return data;
  } catch {
    throw new Error('Failed creating your order');
  }
}

export async function updateOrder(
  id: string | undefined,
  updateObj: UpdateOrder,
): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error('Failed updating your order');
    // No return needed
  } catch (err) {
    console.error(err); // Log the error for debugging
    throw new Error('Failed updating your order');
  }
}
