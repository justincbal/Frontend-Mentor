import ThemeSwitch from './components/ThemeSwitch';
import Screen from './components/Screen';
import Buttons from './components/Buttons';

import './styles/App.css';

function App() {
  return (
    <>
      <div className="main">
        <ThemeSwitch />
        <Screen />
        <Buttons />
      </div>
    </>
  );
}

export default App;
