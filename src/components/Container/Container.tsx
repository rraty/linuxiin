import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

import styles from './Container.module.scss';

interface IProps {
  className?: string;
}

const Container: FunctionComponent<IProps> = ({ className, children }) => {
  return <div className={classNames(styles.Container, className)}>{children}</div>;
};

export default Container;
