import { FC, FormEventHandler, useState } from 'react'
import styled from 'styled-components'

const Input = styled.input``

type SongSearchProps = {
  onSubmit: (val: string) => void
}

const SongSearch: FC<SongSearchProps> = ({ onSubmit }) => {
  const [val, setVal] = useState('')

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    onSubmit(val)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div>Search for songs by title or artist:</div>
        <Input
          type="search"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="eg. Shakira"
        ></Input>
      </label>
      <button type="submit">Search</button>
    </form>
  )
}

export default SongSearch
