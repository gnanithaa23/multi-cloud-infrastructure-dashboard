import { useQuery } from "@tanstack/react-query"

export function useCloudData() {
  return useQuery({
    queryKey: ["cloudData"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=4")
      const data = await res.json()

      return data.products.map((p: any) => ({
        name: p.title,
        usage: Math.floor(Math.random() * 100)
      }))
    },
    staleTime: 1000 * 60 * 5
  })
}