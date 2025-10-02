import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0},
  animate: { opacity: 1},
  exit: { opacity: 0},
};

const pageTransition = { duration: 0.3 };


function PageWrapTrans({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapTrans