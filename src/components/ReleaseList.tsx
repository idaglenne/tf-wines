import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { getUpcomingRelease } from '../services/wine.service';
import './ReleaseList.scss';
import { ReleaseListItem } from './ReleaseListItem';

export function ReleaseList() {
  const [upcomingRelease, setUpcomingRelease] = useState<Product[]>([]);

  useEffect(() => {
    getUpcomingRelease().then((w) => {
      setUpcomingRelease(w);
    });
  }, []);

  return (
    <div className="release-list mt-14 text-left">
      <>
        <h2 className="mb-4">Kommande släpp</h2>
        {upcomingRelease.map((w) => (
          <ReleaseListItem product={w} key={w.productId} />
        ))}
      </>
    </div>
  );
}
