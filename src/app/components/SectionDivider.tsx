"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center py-10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        transition={{ duration: 1 }}
        className="h-[1px] bg-blue-400/30"
      />
    </div>
  );
}