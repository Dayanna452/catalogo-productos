// /hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/productService';

export const useProducts = (page: number, query: string) => {
  return useQuery({ queryKey: ['products', page, query], 
    queryFn: () => fetchProducts(page, query),
    keepPreviousData: true,
  });
};
