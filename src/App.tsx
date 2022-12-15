import React from 'react';
import './App.css';
import { Product } from './models/product.model';
import { getWines } from './services/wine.service';

class App extends React.Component<{}, { wines: Product[] }> {
  constructor(props: {}) {
    super(props);
    this.state = { wines: [] };
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
  }

  render(): JSX.Element {
    getWines().then((w) => this.setState({ wines: w }));

    return (
      <div className='App'>
        <ul>
          {this.state.wines.map((w: Product) => (
            <>
              <li key='{w.productNameBold}'>{w.productNameBold}</li>
              <li key='{w.productLaunchDate}'>{new Date(w.productLaunchDate).toDateString()}</li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
