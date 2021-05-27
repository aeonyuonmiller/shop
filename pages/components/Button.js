import { motion } from "framer-motion"
import Cart from './icons/Cart'

const style = {
    padding: "16px 42px 16px 22px",
    marginLeft: "-8px",
    border: "1px solid black",
    borderRadius: "30px",
    background: "black",
    textTransform: "uppercase",
    fontSize: "9px",
    letterSpacing: "1px",
    color: "white",
}

const icon = {
    position: "absolute",
    display: "inline",
    marginLeft: "8px",
    marginTop: "-3px",
    width: "20px",
}

const buttonVariant = {
  hover: {
    x: 10,
    transition: { duration: .3 }
  }
}

const iconVariant = {
  hover: {
    rotate: -20,
    transition: { duration: .2, delay: .1 }
  }
}




export const Button = ({text}) => {

  return (
    <motion.button whileHover="hover" variants={buttonVariant} style={style}>
      {text}
      <motion.div style={icon} variants={iconVariant}>
        <Cart />
      </motion.div>
    </motion.button>
   )
}

export default Button;