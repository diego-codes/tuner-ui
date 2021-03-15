import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledText = styled.span`
  font-size: 1.5em;
  text-transform: capitalize;
`

type SongTitleProps = {
  children: string
  id?: string
}

const SongTitle: FC<SongTitleProps> = ({ children, id }) =>
  id ? (
    <Link href={`/song/${id}`} passHref>
      <a>
        <StyledText>{children}</StyledText>
      </a>
    </Link>
  ) : (
    <StyledText>{children}</StyledText>
  )

export default SongTitle
