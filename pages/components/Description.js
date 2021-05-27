import { motion, useCycle } from "framer-motion"
import Button from "./Button"
import Space from "./Space"

const style = {
    position: "absolute",
  //  borderTop: ".5px solid grey",
  //  borderLeft: ".5px solid grey",
    padding: "20px 40px",

    right: "10%",
    bottom: "120px",

    width: "auto",
    height: "auto",

    textTransform: "uppercase",
    fontSize: "9px",
    letterSpacing: "1px",
    color: "black",
}

export const Description = () => {

  return (
    <div style={style}>
        <h5>Classic T-Shirt</h5>

        <p>100% cotton</p>
        <p>Printed in Berlin</p>
        <p>50,00 €</p>

        <Space/>
        
        <Button text="Buy"/>
      </div>
   )
}

export default Description;