// /services/productService.ts
export const fetchProducts = async (page: number, query: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${query}`);
  if (!res.ok) {
    throw new Error('Network error');
  }
  return res.json();
};
