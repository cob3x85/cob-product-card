import { ProductCardHOCProps } from '../interfaces/interfaces';
import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';

export { ProductTitle } from './ProductTitle';
export { ProductImage } from "./ProductImage";
export { ProductButtons } from './ProductButtons';

// Object assign permite extender las propiedades del objecto
// nos sirve para usar el Compound Component Pattern
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;

