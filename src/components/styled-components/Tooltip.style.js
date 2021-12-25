import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  position: relative;
`

export const TooltipContent = styled.div`
  position: absolute;
  border: 1px solid #999;
  background-color: rgb(25, 33, 41);
  color: white;
  top: 40px;
  right: 5px;
  width: 350px;
  font-weight: 900;
  font-size: 1.2em;
  text-align: center;
`