import React from 'react';
import Quiz from './components/Quiz/Quiz';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Quiz />
    </ThemeProvider>
  );
}

export default App;