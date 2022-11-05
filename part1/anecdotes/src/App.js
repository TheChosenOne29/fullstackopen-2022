import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ a, b }) => {
  return <div>{a[b]}</div>;
};

const Votes = ({ a, b }) => {
  return <div>has {a[b]} vote</div>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [popular, setPopular] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const randomize = () => {
    let number = Math.floor(Math.random() * 7);
    setSelected(number);
    most();
  };

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const most = () => {
    let largest = 0;

    for (var i = 0; i < selected.length; i++) {
      if (largest < selected[i]) {
        largest = selected[i];
      }
    }
    setPopular(popular)
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote a={anecdotes} b={selected} />
      <Votes a={votes} b={selected} />
      <Button handleClick={randomize} text="next anecdote" />
      <Button handleClick={vote} text="vote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote a={anecdotes} b={popular} />
      <Votes a={votes} b={popular} />
    </div>
  );
};

export default App;
