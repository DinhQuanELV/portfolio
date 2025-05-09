import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-scroll';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Logo from './Logo';

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="menu">
        <FiMenu size={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <Link to="home" smooth={true} duration={500} onClick={handleLinkClick}>
              <Logo />
            </Link>
          </SheetTitle>
          <div className="flex flex-col">
            <Link to="about-me" smooth={true} duration={500} onClick={handleLinkClick} className="btn-menu">
              About Me
            </Link>
            <Link to="skills" smooth={true} duration={500} onClick={handleLinkClick} className="btn-menu">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} onClick={handleLinkClick} className="btn-menu">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick} className="btn-menu">
              Contact
            </Link>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
