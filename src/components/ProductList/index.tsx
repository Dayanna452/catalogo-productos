import { ProductCard } from "../ProductCard";
import { ProductCardProps } from './../ProductCard/productCard.type';

export const ProductList = ({products}:{products: ProductCardProps[]}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
