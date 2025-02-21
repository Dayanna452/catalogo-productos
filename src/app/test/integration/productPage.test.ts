
import { fetchProducts } from "@/app/services/productService";

fetchProducts(1, 'test').then(data => {
  console.log(data);
});