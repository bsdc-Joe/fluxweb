"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({ children, variant = "primary" }: ButtonProps) {
  const base =
    "px-6 py-3 rounded-xl font-medium transition duration-300";

  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.35)]",
    outline:
      "border border-blue-400 text-blue-300 hover:bg-blue-500/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </motion.button>
  );
}