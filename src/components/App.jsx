import React from 'react';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionWrapper } from './Section/Section';
// import { Wrapper } from './Wrapper/Wrapper.styled';
import { Notification } from './Notification/Notification';
import {Container, Col, Row} from 'react-bootstrap';

export const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = type => {
    if(type === 'good') {
      setGood(good +1)
    }
    else if(type === 'neutral') {
      setNeutral(neutral + 1)
    }
    else {
      setBad(bad + 1)
    }
  };


  const total = good + neutral + bad;

  const calculateStatistics = () => {
    const positivePercentage = parseInt((good / total) * 100);
    if (total > 0) {
      return positivePercentage;
    }
    return 0;
  };

    const positivePercentage = calculateStatistics();

    return (
      <Container>
        <Row className='mb-5'>
          <Col>
        <SectionWrapper title="Give Feedback" className="p-2">
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onLeaveFeedback}
          />
        </SectionWrapper>
        <SectionWrapper title="Statistics" className="p-2">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionWrapper>
        </Col>
        </Row>
      </Container>
    );
  }



