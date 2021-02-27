import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { Card as AntCard } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import styles from './Card.module.scss';

const { Meta } = AntCard;
interface IProps {
  id?: string;
  className?: string;
  title: string;
  image?: any;
  description?: string;
  link: string;
}

const Card: FunctionComponent<IProps> = ({ id, title, className, image, description, link }) => {
  const history = useHistory();

  return (
    <AntCard
      id={id}
      className={classNames(styles.Card, className)}
      hoverable
      onClick={() => history.push(link)}
      cover={<img className={styles.Image} alt="example" src={image} />}
    >
      <div className={styles.Footer}>
        <Meta className={styles.Header} title={title} description={description} />
        <FontAwesomeIcon className={styles.Icon} icon={faArrowRight} size="2x" />
      </div>
    </AntCard>
  );
};

export default Card;
