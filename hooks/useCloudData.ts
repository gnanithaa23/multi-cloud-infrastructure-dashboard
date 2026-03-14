import { useQuery } from "@tanstack/react-query"

export function useCloudData() {
  const data = [
    { name: "Compute Services", usage: 72 },
    { name: "Storage Systems", usage: 55 },
    { name: "AI Processing", usage: 83 }
  ]

  return { data, isLoading: false }
}