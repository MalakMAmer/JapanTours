import React from 'react'
import Header from '../sections/Header'
import About from '../sections/About'
import Included from '../sections/Included'
import Contact from '../sections/Contact'
import { motion } from 'framer-motion';

function Home() {
  return (
    <div>
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Included />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Contact />
        </motion.div>
    </div>
  )
}

export default Home