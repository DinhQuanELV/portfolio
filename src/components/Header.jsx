import logoDark from '../assets/dqelv-logo-dark.png';
import logoLight from '../assets/dqelv-logo-light.png';
import ToggleButton from './ToggleButton';

const Header = () => {
  return (
    <header
      className="toggle-mode-transition
      fixed left-0 right-0 top-0 z-50 
      h-[56px] w-full 
      border-b border-solid 
      bg-light text-blackText dark:bg-dark dark:text-whiteText
      border-lightBorder
      dark:border-darkBorder"
    >
      <div
        className="flex flex-row items-center justify-between 
        max-w-[1440px]
        m-auto px-4"
      >
        <div className="h-[56px] w-[80px] relative">
          <img
            className="absolute inset-0
            h-[56px] w-[80px]
            hover:cursor-pointer
            transition-opacity duration-500"
            src={logoDark}
            alt="logo"
          />
          <img
            className="absolute inset-0
            h-[56px] w-[80px]
            hover:cursor-pointer
            transition-opacity duration-500 opacity-0 dark:opacity-100"
            src={logoLight}
            alt="logo"
          />
        </div>

        <div className="flex flex-row">
          <button className="btn">About Me</button>
          <button className="btn">Skills</button>
          <button className="btn">Projects</button>
          <button className="btn">Contact</button>
        </div>
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
