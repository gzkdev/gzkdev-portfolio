"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ text }: { text: string }) {
  const textMap = text.split("");
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {display && (
        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex origin-center items-center justify-center bg-slate-900 font-bold text-slate-100"
        >
          <motion.div
            variants={boxVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden"
          >
            {textMap.map((letter, index) => (
              <TextMapItem letter={letter} key={index} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TextMapItem({ letter }: { letter: string }) {
  return (
    <motion.span variants={textMapVariant} className="inline-block uppercase">
      {letter}
    </motion.span>
  );
}

/** FRAMER MOTION ANIMATIONS VARIANTS */

const containerVariant = {
  initial: {},
  animate: {
    opacity: 1,
    transition: {
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const boxVariant = {
  initial: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const textMapVariant = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    // transition: {ease: [0.37, 0, 0.63, 1]},
  },
  exit: {
    y: "-100%",
    // transition: { ease: [0.37, 0, 0.63, 1]},
  },
};
