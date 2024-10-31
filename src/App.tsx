// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
import Order, { OrderLoader } from './features/order/Order'; // Make sure this path is correct
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import { UpdateOrderAction } from './features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: OrderLoader, // This should work now
        action: UpdateOrderAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
