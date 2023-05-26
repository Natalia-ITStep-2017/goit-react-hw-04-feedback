import { useState } from 'react';
import Statistics from './statistics/statistics';
import FeedbackOptions from './buttons/button';
import Section from './section/section';
import Notification from './notification/notification';

const Feedback = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleAddFeedback = (option) => {
    if (option === "good") {setGood((prev)=>prev+1)}
    else if (option === "neutral") {setNeutral((prev)=>prev+1)}
    else if (option === "bad") {setBad((prev)=>prev+1)}
  }

  const countTotalFeedback = () => (
    good + neutral + bad
  )


  const goodFeedbackPercent = () => {
    const countTotal = countTotalFeedback();
    return Math.round(good / countTotal * 100);
  }

  

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleAddFeedback} />
      </Section>
      {!countTotalFeedback() ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistic">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={goodFeedbackPercent()} />
        </Section>
      )}
    </div>
  )
};

export default Feedback;