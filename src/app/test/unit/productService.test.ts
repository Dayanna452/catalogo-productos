
import { fetchProducts } from "@/app/services/productService";

test('fetchProducts fetches products', async () => {
  const data = await fetchProducts(1, '');
  expect(data).toBeDefined();
  expect(data.length).toBeGreaterThan(0);
});
