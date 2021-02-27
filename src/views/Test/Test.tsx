import React, { FunctionComponent, useMemo, useState } from 'react';
import { Button, Progress, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import Container from '#/src/components/Container';
import { getSpecificDistro } from '#/src/data';

import styles from './Test.module.scss';

const { Title, Paragraph } = Typography;

interface IQProps {
  question: {
    id: string;
    name: string;
    options: Array<{ id: string; label: string; points: Array<string> }>;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answerToQuestion: any;
}

const questions = [
  {
    id: 'favoriteDesktop',
    name: 'Kummasta työpöydästä pidät enemmän?',
    options: [
      {
        id: 'macos',
        label: 'MacOS tyylinen',
        points: ['ubuntu', 'fedora'],
      },
      {
        id: 'windows',
        label: 'Windows tyylinen',
        points: ['linuxmint', 'kubuntu'],
      },
    ],
  },
  {
    id: 'gaming',
    name: 'Pelaatko tietokoneella?',
    options: [
      {
        id: 'yes',
        label: 'Kyllä',
        points: ['ubuntu', 'fedora'],
      },
      {
        id: 'no',
        label: 'Ei',
        points: ['linuxmint', 'kubuntu'],
      },
    ],
  },
  {
    id: 'photographing',
    name: 'Harrastatko valokuvaamista?',
    options: [
      {
        id: 'yes',
        label: 'Kyllä',
        points: ['fedora', 'ubuntu'],
      },
      {
        id: 'no',
        label: 'Ei',
        points: ['kubuntu', 'linuxmint'],
      },
    ],
  },
  {
    id: 'rrOrStable',
    name: 'Haluatko vakaan ja hitaammin päivittyvänvai jatkuvasti kehittyvän/päivittyvän käyttöjärjestelmän?',
    options: [
      {
        id: 'yes',
        label: 'Vakaan ja hitaammin päivittyvän',
        points: ['ubuntu', 'linuxmint', 'kubuntu'],
      },
      {
        id: 'no',
        label: 'Jatkuvasti kehittyvän',
        points: ['fedora'],
      },
    ],
  },
];

const QuestionComponent: FunctionComponent<IQProps> = ({ question, answerToQuestion }) => {
  const { name, options } = question;

  return (
    <div className={styles.Question}>
      <Title level={4}>{name}</Title>
      <Space className={styles.QuestionOptions} direction="horizontal">
        {options.map(({ id, label, points }) => (
          <Button key={id} type="primary" onClick={() => answerToQuestion(points)}>
            {label}
          </Button>
        ))}
      </Space>
    </div>
  );
};

const Test: FunctionComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState<Array<string>>([]);

  const questionsCount = questions.length;

  const answerToQuestion = (questionPoints: Array<string>) => {
    setPoints(points.concat(questionPoints));
    setCurrentQuestion(currentQuestion + 1);
  };

  const distro = useMemo(() => {
    const suggestedDistro = [
      ...points.sort((a, b) => points.filter(v => v === a).length - points.filter(v => v === b).length),
    ].pop();
    return getSpecificDistro(suggestedDistro);
  }, [points]);

  return (
    <Container className={styles.Container}>
      <Title level={1}>Testi juuri sinulle sopivan jakelun valitsemiseen</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non dolores, obcaecati debitis laborum magnam
        corrupti, facilis magni quo dignissimos earum adipisci excepturi aliquam quos alias? Tenetur repellendus nemo
        magni! Quos recusandae consectetur quisquam magnam et voluptatibus? Voluptate dolorum, veritatis fugiat corrupti
        ea totam sapiente? Nostrum doloremque sequi, et minima deserunt at! Atque, vero? In illo iusto repudiandae unde
        dolore. Voluptates cumque impedit quam, voluptatibus odio iure similique inventore, veniam saepe, repellat
        libero unde. Reiciendis culpa, est cumque itaque perferendis veniam vel libero? Sit atque, facilis fugit quae
        iusto deleniti.
      </Paragraph>
      <div className={styles.TestContainer}>
        <Progress percent={(currentQuestion / questionsCount) * 100} />
        {currentQuestion < questionsCount ? (
          <QuestionComponent question={questions[currentQuestion]} answerToQuestion={answerToQuestion} />
        ) : (
          <div>
            <Title level={4}>
              Testin perusteella parhaiten käyttöösi sopiva jakelu on:{' '}
              <Link to={`jakelut/${distro?.id}`} component={Typography.Link}>
                {distro?.title}
              </Link>
            </Title>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Test;
