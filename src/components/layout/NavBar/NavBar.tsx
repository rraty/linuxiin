import React, { useState, FunctionComponent } from 'react';
import { Drawer, Button, Menu, Layout } from 'antd';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink, useLocation } from 'react-router-dom';
import linuxLogo from './linux-logo.jpg';

import styles from './NavBar.module.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

interface IProps {
  mode: 'vertical' | 'horizontal' | 'inline';
  className?: string;
  location: any;
  setVisible: any;
  theme: 'dark' | 'light';
}

const AppMenu: FunctionComponent<IProps> = ({ className, mode, theme, location, setVisible }) => (
  <Menu
    theme={theme}
    mode={mode}
    className={className}
    defaultSelectedKeys={['/']}
    selectedKeys={[location.pathname]}
    onClick={() => setVisible(false)}
  >
    <Menu.Item key="/home">
      <NavLink to="/home">Etusivu</NavLink>
    </Menu.Item>
    <SubMenu key="mostPopularDistros" title="Suosituimmat jakelut">
      <Menu.Item key="/jakelut/ubuntu">
        <NavLink to="/jakelut/ubuntu">Ubuntu</NavLink>
      </Menu.Item>
      <Menu.Item key="/jakelut/linuxmint">
        <NavLink to="/jakelut/linuxmint">Linux Mint</NavLink>
      </Menu.Item>
      <Menu.Item key="/jakelut/kubuntu">
        <NavLink to="/jakelut/kubuntu">Kubuntu</NavLink>
      </Menu.Item>
      <Menu.Item key="/jakelut/fedora">
        <NavLink to="/jakelut/fedora">Fedora</NavLink>
      </Menu.Item>
    </SubMenu>
    <Menu.Item key="/testi">
      <NavLink to="/testi">Testi parhaan jakelun valitsemiseen</NavLink>
    </Menu.Item>
  </Menu>
);

const NavBar: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  return (
    <Header className={styles.Header}>
      <div className={styles.MobileMenu}>
        <Button type="primary" icon={<FontAwesomeIcon icon={faBars} />} onClick={() => setVisible(true)} />
        <Drawer
          title="Valikko"
          placement="left"
          className={styles.Drawer}
          onClose={() => setVisible(false)}
          visible={visible}
          style={{ width: '100%' }}
        >
          <AppMenu mode="inline" theme="light" location={location} setVisible={setVisible} />
        </Drawer>
      </div>
      <div className={styles.Logo}>
        <Link to="/app">
          <img src={linuxLogo} alt="Linuxiin sivun logo" style={{ height: '50px' }} />
          Linuxiin
        </Link>
      </div>

      <AppMenu className={styles.NavBar} theme="dark" mode="horizontal" location={location} setVisible={setVisible} />
    </Header>
  );
};
export default NavBar;
