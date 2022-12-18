import React, { useEffect, useState } from 'react';
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
    return (
      <div className='App'>
        <Wines />
      </div>
    );
  }
}

function Wines() {
  const [wines, setWines] = useState<Product[]>([]);
  useEffect(() => {
    getWines().then((w) => setWines(w));
  }, []);

  return (
    <ul>
      {wines.map((w: Product) => (
        <>
          <li key='{w.productNameBold}'>{w.productNameBold}</li>
          <li key='{w.productNameThin}'>{w.productNameThin}</li>
          <li key='{w.productLaunchDate}'>{new Date(w.productLaunchDate).toDateString()}</li>
        </>
      ))}
    </ul>
  );
}

export default App;
