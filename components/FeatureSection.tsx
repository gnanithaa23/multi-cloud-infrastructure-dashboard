"use client"

import { motion } from "framer-motion"
import { useCloudData } from "../hooks/useCloudData"

export default function FeatureSection() {

  const { data, isLoading } = useCloudData()

  if (isLoading) {
    return <p className="text-center">Loading...</p>
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-slate-50 to-blue-100">

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
        className="bg-white shadow-2xl p-8 rounded-2xl max-w-md w-full border border-gray-100"
      >

        {data?.map((item: any, i: number) => (

  <motion.div
    key={i}
    className="mb-4"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.2 }}
  >

    <div className="flex justify-between text-sm">
      <span>{item.label}</span>
      <span>{item.value}%</span>
    </div>

    <div className="w-full bg-gray-200 rounded h-3 mt-2 overflow-hidden">
      <motion.div
        className="bg-emerald-500 h-3 rounded"
        initial={{ width: 0 }}
        animate={{ width: `${item.value}%` }}
        transition={{ duration: 1 }}
      />
    </div>

  </motion.div>

))}

      </motion.div>

      <div className="flex gap-6 mt-8">

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg cursor-pointer hover:scale-110 transition"
        >
          AWS
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg cursor-pointer hover:scale-110 transition"
        >
          Azure
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-white shadow-md px-4 py-2 rounded-lg cursor-pointer hover:scale-110 transition"
        >
          GCP
        </motion.div>

      </div>

    </section>
  )
}
