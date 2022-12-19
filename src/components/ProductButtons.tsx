import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string;
    style?: React.CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increaseBy, counter, maxCount } = useContext(ProductContext);

    // const isMaxReached = useCallback(
    //     () => {
    //         if (maxCount) {
    //             return counter >= maxCount
    //         }
    //         return false
    //     },
    //     [counter, maxCount],
    // );

    // One liner example
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    );


    // Nuevo callback  usMaxreached = useCallback, cuando el [counter, maxCount] cambie
    // TRUE si el counter == maxCount
    // FALSE si no lo es
    // si es max reached entonces cambiar el estilo del boton mas

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}> - </button>

            <div className={styles.countLabel}> {counter} </div>

            <button
                disabled={isMaxReached()}
                className={isMaxReached() ? styles.disabled : styles.buttonAdd}
                onClick={() => increaseBy(+1)}> + </button>
        </div>
    );
}
