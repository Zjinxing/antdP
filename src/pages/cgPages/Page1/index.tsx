import NavBar from '@/components/Navbar';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { useEffect } from 'react';

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
  {
    name: '设置',
    id: 'settings',
  },
];

const Page1: React.FC = ({ children }) => {
  useEffect(() => {
    console.log('add ipc listener');
    window.electron.onMainEvent('test-event', (e, params) => {
      console.log('监听到主进程消息');
      console.log({ params });
    });
  }, []);

  const onNavClick = (e: MenuInfo) => {
    if (e.key === 'settings') {
      window.electron.ipcRenderer.invoke('new-win', { winName: 'page2' });
    }
  };
  return (
    <h2>
      <NavBar navData={menuData} onMenuClick={onNavClick} />
      PAGE 1<div>{children}</div>
    </h2>
  );
};

export default Page1;
