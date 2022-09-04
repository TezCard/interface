import { lazy, Suspense } from 'react';
import { Link, RouteObject, Outlet } from 'react-router-dom';
import Loading from '@components/Loading';
import Home from '@pages/Home';
import Header from '@components/Header';
const TestZustand = lazy(() => import('@pages/TestZustand'));
const Routes: RouteObject[] = [];
const Layout = () => (
  <>
    <Header />
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </>
);

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
      <div className="border border-sky-500">6767</div>
    </div>
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
