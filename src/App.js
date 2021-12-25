import './App.css'
import { StyledH1, StyledH2 } from './components/styled-components/Header.style'
import { StyledInput } from './components/styled-components/Input.style'
import { StyledButton } from './components/styled-components/Button.style'

import Tooltip from './components/styled-components/Tooltip'

function App () {
  return (
    <div className='App'>
      <header>
        <StyledH1>Unkle - Test Technique!!</StyledH1>
        <StyledH2>Composant Tooltip</StyledH2>
      </header>

      <section>
        <Tooltip event='onFocus' content="Here's my content">
          <StyledInput placeholder='I am a input with Tooltip onFocus'></StyledInput>
        </Tooltip>

        <Tooltip event='onMouseEnter' content="Here's my content">
          <StyledButton>I am a button with Tooltip</StyledButton>
        </Tooltip>
      </section>
    </div>
  )
}

export default App
