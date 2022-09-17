import { useState } from 'react';
import Link from 'next/link'

import CloseIcon from './svgs/CloseIcon'

const Cookies = () => {
    const [isOn, setIsOn] = useState(false);
    // const toggleSwitch = () => setIsOn(!isOn);
    const toggleSwitch = () => setIsOn(true);


  return (
    <div className='cookies' data-isOn={isOn} onClick={toggleSwitch}>This site uses {" "}<Link href="/cookies">Cookies</Link>. <CloseIcon/></div>
  )
}

export default Cookies