import React from 'react';
import './App.scss';
import { WinesPreview } from './components/WinesPreview';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <WinesPreview />
      </div>
    );
  }
}

export default App;
