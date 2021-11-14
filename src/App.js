import './App.css';
import React, { Component } from 'react';
import Button from './Components/Button';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <Button
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h2>Statistics</h2>
        <div>
          <li>{`Good: ${this.state.good}`}</li>
          <li>{`Neutral: ${this.state.neutral}`}</li>
          <li>{`Bad: ${this.state.bad}`}</li>
        </div>
      </>
    );
  }
}

export default App;
