import { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.header`
  background-color: gainsboro;
  padding: 1em;
  font-weight: 400;
`

const NavItem = styled.div`
  display: inline-block;
  margin-right: 1em;
`

const Header: FC = () => (
  <Container>
    <nav>
      <NavItem>
        <Link href="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link href="/recommendations">Recommendations</Link>
      </NavItem>
    </nav>
  </Container>
)

export default Header
