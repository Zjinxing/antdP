import { Menu } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';

interface NavBarProps {
  navData: { name: string; id: string }[];
  onMenuClick?: (e: MenuInfo) => any;
}

const NavBar: React.FC<NavBarProps> = ({ navData, onMenuClick }) => {
  const handleMenuClick = (e: MenuInfo) => {
    onMenuClick && onMenuClick(e);
  };

  return (
    <Menu onClick={handleMenuClick} mode="horizontal">
      {navData.map((data) => (
        <Menu.Item key={data.id}>{data.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
