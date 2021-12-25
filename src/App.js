import './App.css';
import Tooltip from './components/styled-components/Tooltip';

function App() {

  return (
    <div className="App">
      <Tooltip event='onMouseEnter' content="Here's my content">
        <button>I am a button with Tooltip</button>
      </Tooltip>
      
      <Tooltip  event='onFocus' content="Here's my content">
        <input placeholder='I am a input with Tooltip onFocus'></input>
      </Tooltip>
    </div>
  );
}

export default App;