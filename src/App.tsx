import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';
import Presentation from './components/Presentation';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Presentation />
    </>
  );
}

export default App;
