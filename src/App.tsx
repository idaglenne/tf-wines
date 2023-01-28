import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './models/product.model';
import { getWines } from './services/wine.service';

class App extends React.Component {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Wines />
      </div>
    );
  }
}

function Wines() {
  const [_wines, setWines] = useState<Product[]>([]);
  const [displayedWines, setDisplayedWines] = useState<Product[]>([]);
  useEffect(() => {
    getWines().then((w) => {
      setWines(w);
      setDisplayedWines(w.slice(0, 3));
    });
  }, []);

  return (
    <div className="wineGroup">
      {displayedWines.map((w: Product) => (
        <>
          <div className="wineCard">
            <div className="card-heading" key="{w.productNameBold}">
              {w.productNameBold}
            </div>
            <div key="{w.productNameThin}">{w.productNameThin}</div>
            <div key="{w.productLaunchDate}">{new Date(w.productLaunchDate).toDateString()}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
