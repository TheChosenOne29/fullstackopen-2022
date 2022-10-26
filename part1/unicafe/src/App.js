import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ g, n, b, a }) => {
  const avg = (g * 1 + n * 0 + b * -1) / a;
  const pos = (g / a) * 100 + " %";
  if (a === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <StatisticLine text="good" value={g} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={n} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={b} />
          </tr>
          <tr>
            <StatisticLine text="all" value={a} />
          </tr>
          <tr>
            <StatisticLine text="average" value={avg} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={pos} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <Statistics a={all} g={good} n={neutral} b={bad} />
    </div>
  );
};

export default App;
