export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  active: boolean;
  submenu?: boolean;
  position: 'top' | 'bottom';
  subMenuItems?: Omit<SideNavItem, 'position'>[];
};
