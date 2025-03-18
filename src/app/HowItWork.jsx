"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWork() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-2xl max-w-2xl mx-auto text-gray-600">
            Coworking & Flexible Office Marketplace | Search & Book Today
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20"
        >
          {[
            {
              number: "1",
              title: "Book, Reach or Call",
              image: "/flat.png",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
              number: "2",
              title: "View Location Info",
              image: "/flat2.png",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
            {
              number: "3",
              title: "Search Locations",
              image: "/flat3.png",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className=""
            >
              <div className="flex pb-3 items-center gap-2">
                <div className="w-8 h-8 bg-[#E7CAAA] text-[#365327] rounded-full flex items-center justify-center font-semibold">
                  {step.number}
                </div>
                <p className="text-lg text-black font-medium">{step.title}</p>
              </div>

              <div className="h-48">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={278}
                  height={276}
                  className="mx-auto md:mx-0"
                />
              </div>

              <div className="pt-28 w-60 mx-auto md:mx-0">
                <p className="text-gray-600 text-center md:text-left">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hybrid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 w-full"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hybrid working can work for you
          </h2>
          <p className="text-xl text-gray-500 max-w-7xl mx-auto">
            Hybrid working offers you the freedom to work closer to clients,
            colleagues or home. It's also greener and more cost-effective. With
            over 4,000 locations globally, nobody is better placed than Regus to
            help you make the best of it.
          </p>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {["/flat4.png", "/flat5.png", "/flat6.png"].map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-80 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Office Space ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
