import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { Sparkles } from "lucide-react";

export default function Button({
  isActive,
  toggleMenu,
}: {
  isActive: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className={styles.el}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({ label }: { label: string }) {
  return (
    <div className={styles.perspectiveText}>
      <p className="flex items-center justify-center gap-1 text-white font-bold">
        {label} <Sparkles width={16} />
      </p>
      <p className="flex items-center justify-center gap-1 text-white font-bold">
        {label} <Sparkles width={16} />
      </p>
    </div>
  );
}
