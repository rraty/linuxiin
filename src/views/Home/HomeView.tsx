import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import Card from '#/src/components/Card';
import Container from '#/src/components/Container';
import linuxLogo from './resources/linux.png';
import distoData from '../../data';

import styles from './HomeView.module.scss';

const { Title, Paragraph } = Typography;

const HomeView: FunctionComponent = () => {
  return (
    <>
      <div className={styles.Background}>
        <Container className={styles.Content}>
          <div className={styles.Start}>
            <Title level={1}>Linuxiin vasta?</Title>
            <div className={styles.StartInfo}>
              <img className={styles.StartImage} src={linuxLogo} alt="Linux logo" />
              <div className={styles.StartText}>
                <Title level={4}>Linux on uuden sukupolven ilmainen ja vapaasti moukattavissa oleva työjuhta</Title>
                <Paragraph>
                  Linux on ilmainen avoimen lähdekoodin käyttöjärjestelmä, jonka yleisin käyttö on palvelinkäyttö, mutta
                  sitä käytetään myös esimerkiksi puhelimissa ja tietokoneissa. Nimi ”Linux” tulee Linux-ytimestä, jonka
                  alun perin kehitti Linus Torvalds vuonna 1991. Linuxista on saatavilla erilaisia versiota (jakeluita),
                  jotka eroavat toisistaan toiminnallisuudellaan ja ulkonäöllään. Kaikki tällä sivulla esitetyt jakelut
                  ovat ilmaisia, helppokäyttöisiä, turvallisia ja suomenkielisiä käyttöjärjestelmiä. Ne myös sisältävät
                  kaikki peruskäyttöön tarkoitetut ohjelmat, kuten tekstinkäsittelyn, taulukkolaskennan, nettiselaimen,
                  pikaviestimen ja paljon muuta.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis tristique lorem, non faucibus
                  orci. Ut efficitur erat libero, non posuere odio rhoncus ac. Phasellus ligula dolor, auctor nec
                  blandit ac, ornare a lectus. Mauris sollicitudin erat sit amet nunc cursus scelerisque. Morbi
                  convallis sollicitudin lacus. Etiam porta velit ac velit lacinia auctor. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Aperiam esse incidunt nobis corrupti, corporis, vitae qui perferendis
                  maiores blanditiis repudiandae debitis. Praesentium optio accusamus sint doloremque dolorum excepturi
                  facilis culpa? Rerum tempora quidem voluptatum similique consequatur! Molestiae quidem laborum
                  corporis impedit aut aliquam quos totam sit unde repellendus magni quasi dicta placeat accusantium,
                  beatae ducimus rem nulla sapiente doloremque optio. Dolorem harum, temporibus corrupti quia
                  perferendis maxime veniam et non ad porro delectus qui in? Iste modi placeat maiores corrupti, cumque
                  labore unde asperiores accusantium culpa ullam, nam, ex illo? Atque delectus voluptatibus sed vel
                  voluptas sequi quis nobis. Adipisci cumque sint velit nam at ducimus suscipit rem, fuga, ullam quos
                  culpa dignissimos, facere sit esse ea corrupti fugiat itaque. Eveniet commodi provident cum,
                  aspernatur molestiae expedita, quae corporis cumque accusamus eius alias quaerat asperiores ipsum
                  omnis, temporibus reprehenderit consectetur neque dolore porro adipisci esse voluptatibus! Temporibus
                  neque officiis alias.
                </Paragraph>

                <Title level={3}>
                  Etkö ole varma mitä haluaisit? Tee{' '}
                  <Link to="/testi" component={Typography.Link}>
                    testi tästä
                  </Link>{' '}
                  ja löydä sinulle sopiva jakelu
                </Title>
              </div>
            </div>
          </div>

          <div>
            <Title level={2}>Suosituimmat Linux jakelut</Title>
            <div className={styles.DistoGrid}>
              {distoData.map(({ id, title, shortDescription, logo }) => (
                <Card
                  className={styles.Card}
                  key={id}
                  title={title}
                  description={shortDescription}
                  link={`jakelut/${id}`}
                  image={logo}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomeView;
