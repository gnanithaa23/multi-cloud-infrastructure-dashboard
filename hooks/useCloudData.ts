import { useQuery } from "@tanstack/react-query"

export function useCloudData() {
  return useQuery({
    queryKey: ["cloudData"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=4")
      const data = await res.json()

      const labels = [
        "Compute Services",
        "Storage Systems",
        "AI Processing",
        "Cloud Networking"
      ]

      return data.products.map((p: any, i: number) => ({
        label: labels[i],
        value: Math.round(p.rating * 20)
      }))
    }
  })
}
