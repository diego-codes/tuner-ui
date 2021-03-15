import { FC } from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  margin-top: 3em;
  background-color: gainsboro;
  padding: 1em;
  font-weight: 400;
`

const Footer: FC = () => (
  <Container>A final project by Diego Hernandez for DePaul CSC 575.</Container>
)

export default Footer
