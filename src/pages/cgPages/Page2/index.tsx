import NavBar from '@/components/Navbar';
import type { MenuInfo } from 'rc-menu/lib/interface';
import { history } from 'umi';
import styles from './index.less';

const nav = [
  {
    name: '标题画面',
    id: 'settingTitle',
  },
  {
    name: '工程菜单',
    id: 'settingProject',
  },
  {
    name: '对话框',
    id: 'settingDialog',
  },
  {
    name: '图片选项',
    id: 'settingImage',
  },
  {
    name: '剧情回放',
    id: 'settingScene',
  },
  {
    name: '鉴赏界面',
    id: 'settingAppreciation',
  },
  {
    name: '存档/读档',
    id: 'settingSL',
  },
  {
    name: '系统设置',
    id: 'settingSys',
  },
  {
    name: '付费项',
    id: 'settingPay',
  },
  {
    name: '总设',
    id: 'settingGlobal',
  },
];

const Page2: React.FC = ({ children }) => {
  const onMenuClick = (e: MenuInfo) => {
    history.push(e.key);
  };
  return (
    <div className={styles.settings}>
      <NavBar navData={nav} onMenuClick={onMenuClick}></NavBar>
      {children}
    </div>
  );
};

export default Page2;
