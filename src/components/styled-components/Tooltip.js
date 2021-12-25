import { useState } from 'react'
import { TooltipWrapper, TooltipContent } from './Tooltip.style'

const Tooltip = props => {
  const [active, setActive] = useState(false)

  const isOnFocus = props.event === 'onFocus'
  const isOnMouseEnter = props.event === 'onMouseEnter'

  const displayTip = {
    ...(isOnMouseEnter && { onMouseEnter: () => setActive(true) }),
    ...(isOnFocus && { onFocus: () => setActive(true) }),
    ...(isOnMouseEnter && { onMouseLeave: () => setActive(false) }),
    ...(isOnFocus && { onBlur: () => setActive(false) })
  }

  return (
    <TooltipWrapper {...displayTip}>
      {props.children}
      {active && <TooltipContent>{props.content}</TooltipContent>}
    </TooltipWrapper>
  )
}

export default Tooltip
