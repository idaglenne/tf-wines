import { Product } from '../models/product.model';

export function ReleaseListItem({ product }: { product: Product }) {
  return (
    <div className="release-list__item flex justify-between w-3/5 p-2 text-left">
      <div>
        <div>{product.productNameBold}</div>
        <div className="text-xs">{product.productNameThin}</div>
      </div>
      <div>{product.price}</div>
    </div>
  );
}
