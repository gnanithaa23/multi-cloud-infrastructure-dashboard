"use client"

import { motion } from "framer-motion"
import { useCloudData } from "../hooks/useCloudData"

export default function FeatureSection() {

  const { data, isLoading } = useCloudData()

  if (isLoading) {
    return <p className="text-center">Loading...</p>
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10"
      >
        Optimize Multi-Cloud Infrastructure
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="bg-white shadow-xl p-8 rounded-xl max-w-md w-full"
      >

        {data?.map((item: any) => (
          <div key={item.name} className="mb-4">

            <div className="flex justify-between text-sm">
              <span>{item.name}</span>
              <span>{item.usage}%</span>
            </div>

            <div className="h-2 bg-gray-200 rounded">

              <motion.div
                className="h-2 bg-green-500 rounded"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.usage}%` }}
                transition={{ duration: 1 }}
              />

            </div>

          </div>
        ))}

      </motion.div>

      <div className="flex gap-6 mt-8">

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg"
        >
          AWS
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg"
        >
          Azure
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg"
        >
          GCP
        </motion.div>

      </div>

    </section>
  )
}