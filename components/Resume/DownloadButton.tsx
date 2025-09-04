"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, CheckCircle } from "lucide-react";
import Link from "../Link";

export default function DownloadButton({ href }: { href: string }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hide after 3s
  };

  return (
    <div className="relative inline-block">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={href}
          download
          target="_blank"
          onClick={handleClick}
          className="inline-flex items-center gap-2 rounded-lg 
            bg-gradient-to-r from-primary-500 to-gradient-3-end 
            px-6 py-3 text-sm font-semibold text-white shadow-lg 
            transition-all hover:shadow-primary-500/40"
        >
          <Download className="h-5 w-5" />
          Download Resume
        </Link>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 
              rounded-lg bg-gray-800 px-4 py-2 text-sm text-white shadow-lg"
          >
            <CheckCircle className="mr-1 inline h-4 w-4 text-green-400" />
            Resume is downloading...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
