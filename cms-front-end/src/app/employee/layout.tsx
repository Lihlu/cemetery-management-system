"use client";
import { Layout, Menu, Button, Grid, Dropdown } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  LogoutOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useStyles } from "./style/style";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "@/providers/auth";
import BottomNav from "@/components/shared/bottom-nav/bottom-nav";

const { Sider, Header, Content } = Layout;
const { useBreakpoint } = Grid;

const employeeNavItems = [
  { key: "/employee", label: "Home", icon: <HomeOutlined /> },
  { key: "/employee/gravesite", label: "Gravesites", icon: <UserOutlined /> },
  { key: "/employee/search", label: "Search", icon: <SearchOutlined /> },
];

const EmployeeLayout = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuthState();
  const { styles } = useStyles();
  const screens = useBreakpoint();
  const router = useRouter();

  const [activeKey, setActiveKey] = useState("/employee");

  const handleNavClick = (key: string) => {
    setActiveKey(key);
    router.push(key);
  };

  const userMenu = {
    items: [
      {
        key: "signOut",
        label: "Sign Out",
        icon: <LogoutOutlined />,
        onClick: () => {
          router.replace("/");
        },
      },
    ],
  };

  return (
    <Layout className={styles.pageWrapper}>
      {!screens.xs && (
        <Sider width={200} theme="light" className={styles.sider}>
          <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            className={styles.menu}
            onClick={({ key }) => handleNavClick(key.toString())}
            items={employeeNavItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        </Sider>
      )}

      <Layout className={styles.mainLayout}>
        <Header className={styles.header}>
          <div className={styles.profileMenu}>
            <Dropdown menu={userMenu} trigger={["click"]}>
              <Button type="text" icon={<UserOutlined />}>
                {currentUser?.emailAddress ?? "User"}
              </Button>
            </Dropdown>
          </div>
        </Header>

        <Content className={styles.contentArea}>{children}</Content>
      </Layout>

      {/* Mobile Bottom Navbar */}
      {screens.xs && (
        <BottomNav
          navItems={employeeNavItems.map((item) => ({
            key: item.key,
            label: item.label,
            icon: item.icon,
          }))}
        />
      )}
    </Layout>
  );
};

export default EmployeeLayout;
