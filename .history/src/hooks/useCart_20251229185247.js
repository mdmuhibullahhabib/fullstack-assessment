"use client";

import { useQuery } from "@tanstack/react-query";

export default function usecart() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await fetch("/api/cart");
      const result = await res.json();

      console.log("API RESULT ", result);

      if (Array.isArray(result)) return result;
      if (Array.isArray(result.data)) return result.data;

      return [];
    },
  });

  return {
    cart: data || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}