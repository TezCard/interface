export type MenuRouteConfigType = {
  [key in string]: { route: string; label: string };
};
export const MenuRouteConfig: MenuRouteConfigType = {
  '0': { route: '/', label: 'Home' },
  '25': { route: '/testZustand', label: 'testZustand' },
  '48': { route: '/loading', label: 'Loading' },
};
