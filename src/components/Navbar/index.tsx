import { Menu } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';

const NavBar: React.FC = () => {
  const menuData = [
    {
      name: '新建',
      id: 'new',
    },
    {
      name: '打开',
      id: 'open',
    },
    {
      name: '保存',
      id: 'save',
    },
    {
      name: '查找',
      id: 'find',
    },
  ];

  const onMenuClick = (e: MenuInfo) => {
    console.log(e);
  };

  return (
    <Menu onClick={onMenuClick} mode="horizontal">
      {menuData.map((data) => (
        <Menu.Item key={data.id}>{data.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
