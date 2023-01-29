import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { getWines } from '../services/wine.service';
import { PreviewCard } from './PreviewCard';
import './WinesPreview.scss';

export function WinesPreview() {
  const [wines, setWines] = useState<Product[]>([]);
  const [displayedWines, setDisplayedWines] = useState<{
    products: Product[];
    currentStartIndex: number;
  }>({ products: [], currentStartIndex: 0 });
  const previewCards = document.querySelectorAll('.preview__card');

  useEffect(() => {
    getWines().then((w) => {
      setWines(w);
      setDisplayedWines({ products: w.slice(0, 3), currentStartIndex: 0 });
    });
  }, []);

  const handleNextClick = (event: string) => {
    previewCards.forEach((wc) => {
      wc.classList.remove('slideLeft');
      wc.classList.remove('slideRight');
    });

    setDisplayedWines((state) => {
      const newIndex = event === 'next' ? state.currentStartIndex + 3 : state.currentStartIndex - 3;

      return { products: wines.slice(newIndex, newIndex + 3), currentStartIndex: newIndex };
    });

    window.requestAnimationFrame(() => {
      previewCards.forEach((wc) => wc.classList.add(event === 'next' ? 'slideLeft' : 'slideRight'));
    });
  };

  const isDisabled = (button: string) => {
    return button === 'next'
      ? displayedWines.currentStartIndex > wines.length - 4
      : displayedWines.currentStartIndex === 0;
  };

  return (
    <div className="preview">
      <button
        className="preview__next-button"
        disabled={isDisabled('previous')}
        onClick={() => handleNextClick('previous')}>
        {'<'}
      </button>
      <div className="preview__wine-group">
        {displayedWines.products.map((w: Product) => (
          <>
            <PreviewCard product={w} />
          </>
        ))}
      </div>
      <button
        className="preview__next-button"
        disabled={isDisabled('next')}
        onClick={() => handleNextClick('next')}>
        {'>'}
      </button>
    </div>
  );
}
