import { Props as ProductButtonsProps } from '../components/ProductButtons';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';


export interface Product {
    id: string;
    img?: string;
    title: string;
    quantity?: number
}

export interface ProductContextProps {
    counter: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: ( value: number ) => void;
    reset: () => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ):JSX.Element,
    Buttons: ( Props: ProductButtonsProps ) => JSX.Element,
    Image:   ( Props: ProductImageProps ) => JSX.Element,
    Title:   ( Props: ProductTitleProps ) => JSX.Element,
}

// Para pasar mas de un parametro en un onChangeEvent
export interface onChangeArgs {
    count: number;
    product: Product;

}

export interface ProductInCart extends Product {
    count: number
}

export interface InitialValues {
    count?: number
    maxCount?: number
}

// Esto es lo que hace Formik
export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}
