import { FC, useState } from 'react'

type ContentToggleProps = {
  buttonText: string
}
const ContentToggle: FC<ContentToggleProps> = ({ children, buttonText }) => {
  const [show, setShow] = useState(false)
  const toggle = () => setShow((val) => !val)

  return (
    <div>
      <div>
        <button onClick={toggle}>
          {buttonText} {show ? '↑' : '↓'}
        </button>
      </div>
      {show && children}
    </div>
  )
}

export default ContentToggle
