import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import withLoadable from './utils/CodeSplit';

import NavBar from '#/src/components/layout/NavBar';
import Footer from '#/src/components/layout/Footer';

import './styles/app.scss';
import styles from './App.module.scss';
import ScrollToTop from './utils/ScrollToTop';

const { Content } = Layout;

const HomeView = withLoadable(() => import('./views/Home'));
const TestView = withLoadable(() => import('./views/Test'));
const DistroView = withLoadable(() => import('./views/Distro'));

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <NavBar />
        <Content className={styles.Content}>
          <ScrollToTop>
            <Switch>
              <Route exact path="/home" component={HomeView} />
              <Route exact path="/testi" component={TestView} />
              <Route exact path="/jakelut/:id" component={DistroView} />
              <Redirect to="/home" />
            </Switch>
          </ScrollToTop>
        </Content>
        <Footer copyright={<p>&copy; Copyright 2021 Tamasivu.com</p>}>
          <div>
            <div>
              <b>Yhteystiedot</b>:
            </div>
            <div>Ylläpito +358 42 223 474 27</div>
            <div>yllapito@tamasivu.com</div>
            <div>Kerkkolankatu 13, 21250 MASKU</div>
          </div>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
