import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { getWines } from '../services/wine.service';

export function Wines() {
  const [wines, setWines] = useState<Product[]>([]);
  const [displayedWines, setDisplayedWines] = useState<{
    products: Product[];
    currentStartIndex: number;
  }>({ products: [], currentStartIndex: 0 });
  const wineCards = document.querySelectorAll('.wineCard');

  useEffect(() => {
    getWines().then((w) => {
      setWines(w);
      setDisplayedWines({ products: w.slice(0, 3), currentStartIndex: 0 });
    });
  }, []);

  const handleNextClick = (event: string) => {
    wineCards.forEach((wc) => {
      wc.classList.remove('slideLeft'), wc.classList.remove('slideRight');
    });

    setDisplayedWines((state) => {
      const newIndex = event === 'next' ? state.currentStartIndex + 3 : state.currentStartIndex - 3;

      return { products: wines.slice(newIndex, newIndex + 3), currentStartIndex: newIndex };
    });

    window.requestAnimationFrame(() => {
      wineCards.forEach((wc) => wc.classList.add(event === 'next' ? 'slideLeft' : 'slideRight'));
    });
  };

  const isDisabled = (button: string) => {
    return button === 'next'
      ? displayedWines.currentStartIndex > wines.length - 4
      : displayedWines.currentStartIndex === 0;
  };

  return (
    <div className="wrapper">
      <button
        className="nextButton"
        disabled={isDisabled('previous')}
        onClick={() => handleNextClick('previous')}>
        {'<'}
      </button>
      <div className="wineGroup">
        {displayedWines.products.map((w: Product) => (
          <>
            <div className="wineCard slideLeft">
              <div className="card-heading" key="{w.productNameBold}">
                {w.productNameBold}
              </div>
              <div key="{w.productNameThin}">{w.productNameThin}</div>
              <div key="{w.productLaunchDate}">{new Date(w.productLaunchDate).toDateString()}</div>
            </div>
          </>
        ))}
      </div>
      <button
        className="nextButton"
        disabled={isDisabled('next')}
        onClick={() => handleNextClick('next')}>
        {'>'}
      </button>
    </div>
  );
}
