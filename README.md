Este es un paqeuete de pruebas de despliegue a NPM

### Carlos Ortiz

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'cob-product-card';
```


```
 <ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        () => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```
