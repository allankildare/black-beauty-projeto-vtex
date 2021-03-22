import React from 'react'
import type { FC } from 'react'

const MainButton: FC = (props) => {
  return <button type="button">{props.children}</button>
}

export default MainButton
