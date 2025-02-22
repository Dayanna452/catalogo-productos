import { ProductList } from "@/components/ProductList";
import { ProductCardProps } from './../components/ProductCard/productCard.type';

export default function Home() {
  const products:ProductCardProps[]= [{
    id: '1',
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: 'cat 1',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  }]
  return (
    <>
    <ProductList  products={products} />
    </>
  );
}
