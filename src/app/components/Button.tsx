"use client";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({ children, variant = "primary" }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`px-6 py-3 rounded-lg font-semibold transition ${
        variant === "primary"
          ? "bg-yellow-500 text-black hover:bg-yellow-400"
          : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
      }`}
    >
      {children}
    </motion.button>
  );
}