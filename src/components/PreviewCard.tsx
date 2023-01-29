import { Product } from '../models/product.model';
import './WinesPreview.scss';

export function PreviewCard({ product }: { product: Product }) {
  return (
    <div className="preview__card slideLeft">
      <div className="card-heading" key={product.productNameBold}>
        {product.productNameBold}
      </div>
      <div key={product.productNameThin}>{product.productNameThin}</div>
      <div key={product.productLaunchDate}>
        {new Date(product.productLaunchDate).toDateString()}
      </div>
    </div>
  );
}
