import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggle } from './hooks/useToggle';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);

  let toggle = useToggle()
  

  return (
    <div className={toggle.isDarkMode ? "dark" : "light"}>
      <button onClick={toggle.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
