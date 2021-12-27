import styled, { keyframes } from 'styled-components'

export const TooltipWrapper = styled.div`
  position: relative;
  width: 300px;
  min-width: 150px;
  margin: 0 10px;
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const TooltipContent = styled.div`
  position: absolute;
  border: 1px solid #999;
  background-color: #999;
  color: white;
  top: 40px;
  right: -5px;
  width: 100%;
  font-weight: 900;
  font-size: 1.2em;
  text-align: center;
  animation: ${props => (props.fade === 'in' ? fadeIn : fadeOut)} 1s linear;

  &:after {
    position: absolute;
    top: -6px;
    left: 10px;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #999;
    border-left: 6px solid transparent;
    content: ' ';
  }
`