import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
  const { darkMode, handleToggleTheme } = useDarkMode();

  return (
    <header>
      <h2>Header</h2>
      <button onClick={handleToggleTheme}>{darkMode ? 'light' : 'dark'}</button>
    </header>
  );
};

export default Header;
