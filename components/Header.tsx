import { FC } from 'react'
import Link from 'next/link'

const Header: FC = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/profile">My profile</Link>
    </nav>
  </header>
)

export default Header
