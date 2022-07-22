import React, { useState } from "react";
import { Button, Header, Container, Message, Label } from "semantic-ui-react";
import "./App.css";

// TODO: Add a decrement button. Requirements: the can not be negative. If that happens setCounter back to 0 and display error message.

const App = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const handleDecrement = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setError(true);
      setCounter(0);
    }
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
    setError(false);
  };

  return (
    <Container className="App" data-test="app-component">
      <Header as="h2" data-test="counter-label">
        This is the value of the counter:&nbsp;
        <Label circular color="violet" size="big">
          <span data-test="counter-display">{counter}</span>
        </Label>
      </Header>
      <div className="button-container">
        <Button
          data-test="button-increment"
          onClick={handleIncrement}
          color="green"
          content="+"
        />
        <Button
          data-test="button-decrement"
          onClick={handleDecrement}
          color="red"
          content="-"
        />
      </div>
      {error && <Message>The counter must not go negative</Message>}
    </Container>
  );
};

export default App;
