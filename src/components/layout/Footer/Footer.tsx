import React, { FunctionComponent, ReactNode } from 'react';
import { Layout } from 'antd';

import styles from './Footer.module.scss';

const { Footer: AntdFooter } = Layout;

interface IProps {
  copyright: ReactNode;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Footer: FunctionComponent<IProps> = ({ style, children, copyright }) => (
  <AntdFooter className={styles.Footer} style={style}>
    <div>{children}</div>
    <div className={styles.Copyright}>{copyright}</div>
  </AntdFooter>
);

export default Footer;
