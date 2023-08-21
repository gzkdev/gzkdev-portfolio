"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VscMenu, VscClose } from "react-icons/vsc";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="lg:[grid-columns-template: auto 1fr] grid h-full w-full"
    >
      <motion.div
        layout
        className="flex h-full w-full items-center justify-between"
      >
        <a href="#">PORTFOLIO</a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex aspect-square w-7 items-center justify-center rounded-full text-lg lg:hidden"
        >
          {open ? <VscClose /> : <VscMenu />}
        </button>
        <motion.nav
          layout
          className="hidden grid-flow-col gap-5 lg:grid [&>*:hover]:bg-slate-800/50 [&>*:hover]:text-teal-500 [&>*]:inline-flex [&>*]:items-center [&>*]:rounded"
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Articles</a>
        </motion.nav>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            layout
            className="grid gap-1 py-4 [&>*:hover]:bg-slate-800/50 [&>*]:inline-flex [&>*]:items-center [&>*]:rounded [&>*]:p-2"
          >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Articles</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
