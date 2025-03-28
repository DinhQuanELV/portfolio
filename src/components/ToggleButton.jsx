import { BsSun, BsMoonStars } from 'react-icons/bs';

import { useDarkMode } from '../hooks/useDarkMode';

const ToggleButton = () => {
  const { darkMode, handleToggleTheme } = useDarkMode();

  return (
    <button
      className="relative w-14 h-8
        rounded-full bg-gray-300 dark:bg-gray-700
        flex items-center
        p-1 transition-colors duration-300
        border-none outline-none"
      onClick={handleToggleTheme}
    >
      <div
        className={`absolute left-1
      flex items-center justify-center
      w-6 h-6 bg-light dark:bg-dark
      rounded-full shadow-md
      transform transition-transform duration-300
      ${darkMode ? 'translate-x-6' : ''}`}
      >
        {darkMode ? <BsMoonStars size={16} /> : <BsSun size={16} />}
      </div>
    </button>
  );
};

export default ToggleButton;
