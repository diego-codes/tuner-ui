import { FC, FormEventHandler, useState } from 'react'
import styled from 'styled-components'

const Container = styled.form`
  font-size: 1.3em;
`
const Input = styled.input`
  font-size: inherit;
  margin-right: 0.3em;
`

const Button = styled.button`
  font-size: inherit;
`

const LabelText = styled.div`
  font-size: 0.9em;
  margin-bottom: 0.2em;
`

type SongSearchProps = {
  initialValue?: string
  onSubmit: (val: string) => void
}

const SongSearch: FC<SongSearchProps> = ({ onSubmit, initialValue = '' }) => {
  const [val, setVal] = useState(initialValue)

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    onSubmit(val)
  }

  return (
    <Container onSubmit={handleSubmit}>
      <label>
        <LabelText>Search for songs by title or artist:</LabelText>
        <Input
          type="search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="eg. Shakira"
        ></Input>
      </label>
      <Button type="submit">Search</Button>
    </Container>
  )
}

export default SongSearch
