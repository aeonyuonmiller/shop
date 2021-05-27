import { motion, useCycle } from "framer-motion"

const style = {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: "0",
    top: "0",
    color: "white",

    width: "100%",
    //maxWidth: "1600px",
    height: "70px",

    textTransform: "uppercase",
    fontSize: "9px",
    letterSpacing: "2px",

    background: "rgba(0,0,0,0.95)",
    overflow: "hidden"
}

const menuItem = {
    position: "absolute",
    top: "10em"
} 

export const Card = () => {
  const [mode, cycleMode] = useCycle("closed", "opened")
  //  const [mode, cycleMode] = useCycle('70px', '100%')

  return (
    <motion.div
      style={style}
      // animate={{ height: mode, transition: {ease: 'easeOut', duration: .5} }}
      variants={{ 
        closed: {height:'70px'}, 
        opened: {height: '100%'} 
      }}
      //onTap={() => cycleMode()}
      onClick={cycleMode}
      >
          introvert
          <motion.div style={menuItem} 
            variants={{ 
                closed: {opacity:0}, 
                opened: {opacity:1} 
            }}>
            <span>title uno</span>
            <span>title dos</span>
          </motion.div>
      </motion.div>
   )
}

export default Card;