import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  font-style: italic;
  text-transform: capitalize;
`

type ArtistProps = {
  children: string
}

const Artist: FC<ArtistProps> = ({ children }) => (
  <Link href={`/?search=${children}`} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
)

export default Artist
