import { motion } from 'framer-motion'

const variants = {
    intro: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { ease:"easeOut", duration: .4, staggerChildren: 0.3 }},
    exit: { opacity: 0, y: -10, transition: { ease:"easeIn", duration: 0.2 }},
    viewport: {once: true, amount: 0.2}    
}

const View = ({ children }) => {
  return (
    <motion.div initial="intro"
        whileInView="animate"
        exit="exit"
        viewport="viewport"
        variants={variants}
    >
        {children}
    </motion.div>
  )
}

export default View