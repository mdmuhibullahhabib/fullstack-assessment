"use client";

import { useQuery } from "@tanstack/react-query";

export default function useHero() {
  const { data,isLoading,isError,error,refetch,
  } = useQuery({
    queryKey: ["hero"],
    queryFn: async () => {
      const res = await fetch("/api/hero");

      if (!res.ok) {
        throw new Error("fatching error");
      }

      const result = await res.json();
      console.log("API RESULT", result);

      return result;
    },
  });

  return {
    hero: data || null,
    isLoading,
    isError,
    error,
    refetch,
  };
}
