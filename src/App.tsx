import React from 'react';
import './App.scss';
import { ReleaseList } from './components/ReleaseList';
import { WinesPreview } from './components/WinesPreview';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <WinesPreview />
        <ReleaseList />
      </div>
    );
  }
}

export default App;
