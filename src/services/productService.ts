export const fetchProducts = async (page: number, query: string) => {
  const res = await fetch(`${process.env.API_URL}/products?page=${page}&query=${query}`);
  if (!res.ok) {
    throw new Error('Network error');
  }
  console.log(res.json());
  return res.json();
};
