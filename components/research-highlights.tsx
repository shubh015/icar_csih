"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const researchAreas = [
  {
    id: 1,
    title: "Sugarcane Variety Improvement",
    description: "Developing high-yielding, disease- and drought-resistant sugarcane varieties using advanced breeding techniques.",
    image: "/images/new_sugar_2.jpg",
  },
  {
    id: 2,
    title: "Sustainable Sugarcane Farming",
    description: "Promoting eco-friendly and water-efficient practices in sugarcane cultivation for long-term sustainability.",
    image: "/images/new_sugar.jpg",
  },
  {
    id: 3,
    title: "Sugarcane Pest Management",
    description: "Developing integrated pest and disease management strategies to minimize crop loss and pesticide use in sugarcane fields.",
    image: "/images/new_sugar_1.jpg",
  },
];


export default function ResearchHighlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()

  if (isInView) {
    controls.start("visible")
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  }

  return (
    <section id="research" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/abstract-pattern.png')] bg-repeat opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm font-semibold text-[#14532d] uppercase tracking-wider mb-2"
          >
            Research Highlights
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-[#14532d] mb-6"
          >
            Pioneering Agricultural Innovations
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-gray-700"
          >
            Discover our groundbreaking research initiatives aimed at transforming Indian agriculture through science
            and technology.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.id}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#14532d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-[#14532d] mb-2 group-hover:text-[#14532d]">{area.title}</h4>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-[#14532d] hover:text-[#facc15] hover:bg-transparent group"
                  >
                    <span>Learn more</span>
                    <motion.div
                      className="inline-block ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ArrowRight size={16} />
                    </motion.div>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button
            className="bg-[#14532d] hover:bg-[#0f3d21] text-white relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span className="absolute inset-0 bg-[#facc15]/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">View All Research Projects</span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
