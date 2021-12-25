import { useState } from 'react'

const Tooltip = props => {
  const [active, setActive] = useState(false);

  const isOnFocus =  props.event === 'onFocus';
  const isOnMouseEnter =  props.event === 'onMouseEnter';

  const displayTip = {
    ...isOnMouseEnter && {onMouseEnter: () => setActive(true)},
    ...isOnFocus && {onFocus: () => setActive(true)},
    ...isOnMouseEnter && {onMouseLeave: () => setActive(false)},
    ...isOnFocus && {onBlur: () => setActive(false)}
  }

  return (
    <div
      {...displayTip}
    >
      {props.children}
      {active && <div>{props.content}</div>}
    </div>
  )
}

export default Tooltip
