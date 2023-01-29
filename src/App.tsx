import React from 'react';
import './App.scss';
import { Wines } from './components/Wines';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Wines />
      </div>
    );
  }
}

export default App;
