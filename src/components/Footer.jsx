import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-t border-surface-container bg-surface-container-low/60 flex justify-center items-center px-12 py-12 mt-12 text-center"
    >
      <div className="font-body text-sm uppercase tracking-widest text-outline">
        © 2026 LOSHINI WELONIKA KADAPANAWALA. ALL RIGHTS RESERVED.
      </div>
    </motion.footer>
  );
}
