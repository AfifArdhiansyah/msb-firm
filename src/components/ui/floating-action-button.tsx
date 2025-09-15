"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone, Mail, X } from "lucide-react";
import { Button } from "./button";

interface FloatingActionButtonProps {
  position?: "bottom-right" | "bottom-left";
  offsetBottom?: string;
  offsetRight?: string;
  offsetLeft?: string;
}

export default function FloatingActionButton({ 
  position = "bottom-right",
  offsetBottom = "6",
  offsetRight = "6",
  offsetLeft = "6"
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mainButtonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 }
  };

  const menuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { scale: 0, opacity: 0, y: 20 },
    open: { scale: 1, opacity: 1, y: 0 }
  };

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/6281272519788",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: Phone,
      label: "Telepon",
      href: "tel:+6281272519788",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:corporate.legal3@panusa-indo.com",
      color: "bg-red-500 hover:bg-red-600"
    }
  ];

  const positionClasses = position === "bottom-left" 
    ? `fixed bottom-${offsetBottom} left-${offsetLeft} z-50`
    : `fixed bottom-${offsetBottom} right-${offsetRight} z-50`;

  return (
    <div className={positionClasses}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute bottom-16 right-0 flex flex-col gap-3"
          >
            {contactOptions.map((option, index) => (
              <motion.div key={option.label} variants={itemVariants}>
                <Button
                  asChild
                  size="sm"
                  className={`${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-200 w-12 h-12 rounded-full p-0`}
                >
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={option.label}
                  >
                    <option.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        variants={mainButtonVariants}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
