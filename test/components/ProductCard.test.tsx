import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/product';

const { act } = renderer

describe('ProductCard', () => {
    test('debe mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('debe de incrementar el counter', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Card</h1>
                            <span>{count}</span>
                            <button onClick={() => increaseBy(1)}>Add</button>
                        </>
                    )
                }
            </ProductCard>
        );
        let tree = wrapper.toJSON();
        expect(tree).toMatchSnapshot();
        //  When testing, code that causes React state updates should be wrapped into act(...):
        act(() => {
            (tree as any).children[2].props.onClick();
        });
        tree = wrapper.toJSON()
        expect((tree as any).children[1].children[0]).toBe('1')
    });
})
