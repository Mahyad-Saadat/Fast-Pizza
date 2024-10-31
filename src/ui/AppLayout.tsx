import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loading from './Loading';

const AppLayout = () => {
  const navigtion = useNavigation();
  const isLoading = navigtion.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_fr_auto]">
      {isLoading && <Loading />}
      <Header />

      <div className="my-10 overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
