import { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <div className="flex gap-2 justify-center items-center">
            <img src="logo.ico" alt="logo" className="w-6 h-6" />
            <a href="/" className="text-neutral-400 font-bold text-xl">
              <span className="text-[#915eff]">Sascha </span> <span className="text-white/80">Schmittinger</span>
            </a>
          </div>
          <button
            onClick={toogleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none
          sm:hidden flex"
            aria-label="Toogle Menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toogle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
