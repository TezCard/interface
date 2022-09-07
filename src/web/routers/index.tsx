import { lazy, Suspense } from 'react';
import { Link, RouteObject, Outlet } from 'react-router-dom';
import Loading from '@components/Loading';
import Home from '@pages/Home';
import Header from '@components/Header';
const TestZustand = lazy(() => import('@pages/TestZustand'));
import { Nothing, NothingText } from './style';
const Routes: RouteObject[] = [];
const Layout = () => (
  <div className="w-1280 m-auto">
    <Header />
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </div>
);

function NoMatch() {
  return (
    <Nothing>
      <NothingText>Nothing to see here!</NothingText>
      <NothingText>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </NothingText>
    </Nothing>
  );
}

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Home /> },
    { path: '/loading', element: <Loading /> },
    { path: '/testZustand', element: <TestZustand /> },
    { path: '*', element: <NoMatch /> },
  ],
};

Routes.push(mainRoutes);

export default Routes;
