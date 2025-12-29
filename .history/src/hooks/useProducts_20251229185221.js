"use client";

import { useQuery } from "@tanstack/react-query";

export default function useProducts() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("/api/products");
      const result = await res.json();
      
      console.log("API RESULT ", result);

      if (Array.isArray(result)) return result;
      if (Array.isArray(result.data)) return result.data;

      return [];
    },
  });

  return {
    products: data || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}