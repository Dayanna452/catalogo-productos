import { fetchProducts } from "@/services/productService";

fetchProducts(1, "test").then((data) => {
  console.log(data);
});
