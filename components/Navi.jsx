import Link from 'next/link'
import { motion } from 'framer-motion'

const Navi = () => {
  return (
    <>
    <nav>
      <Link tabIndex="1" href="/music">Music</Link>
      <Link tabIndex="1" href="/merch">Merch</Link>
      <Link tabIndex="1" href="/social">Social</Link>
    </nav>
    <Link href="/" tabIndex="1"><span className="logo">FORCE</span></Link>
    </>
  )
}

export default Navi