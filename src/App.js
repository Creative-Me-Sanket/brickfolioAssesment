import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { chTheme } from './theme/chakraTheme';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <ChakraProvider theme={chTheme}>
      <Routes>
      <Route path='' element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
