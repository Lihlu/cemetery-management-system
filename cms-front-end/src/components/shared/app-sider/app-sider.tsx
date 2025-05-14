import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useStyles } from "./style/style";

interface INavItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

interface IAppSiderProps {
  activeKey: string;
  handleNavClick: (key: string) => void;
  navItems: INavItem[];
}

const AppSider = ({ activeKey, handleNavClick, navItems }: IAppSiderProps) => {
  const { styles } = useStyles();

  return (
    <Sider width={200} theme="light" className={styles.sider}>
      <Menu
        mode="inline"
        selectedKeys={[activeKey]}
        className={styles.menu}
        onClick={({ key }) => handleNavClick(key.toString())}
        items={navItems.map((item) => ({
          key: item.key,
          icon: item.icon,
          label: item.label,
        }))}
      />
    </Sider>
  );
};

export default AppSider;
