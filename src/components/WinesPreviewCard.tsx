import { Product } from '../models/product.model';
import './WinesPreview.scss';

export function WinesPreviewCard({ product }: { product: Product }) {
  return (
    <div className="preview__card slideLeft">
      <div className="card-heading text-lg">{product.productNameBold}</div>
      <div className="text-sm">{product.productNameThin}</div>
      <div className="text-sm">{product.categoryLevel2}</div>
      <div className="text-xs">{product?.grapes?.join(', ')}</div>
      <div className="text-sm">{product.price} kr</div>
      <div className="text-xs">{new Date(product.productLaunchDate).toDateString()}</div>
    </div>
  );
}
