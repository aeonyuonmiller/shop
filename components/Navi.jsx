import Link from 'next/link'
import { motion } from 'framer-motion'

const Navi = () => {
  return (
    <>
    <nav>
      <Link href="/music">Music</Link>
      <Link href="/merch">Merch</Link>
      <Link href="/social">Social</Link>
    </nav>
    <Link href="/"><span className="logo">FORCE</span></Link>
    </>
  )
}

export default Navi