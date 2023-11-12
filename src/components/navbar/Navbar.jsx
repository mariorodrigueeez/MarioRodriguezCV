import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoCV3 from '../../assets/LogoCV3Mejora2.png';
import pdf from '../../assets/files/CVMarioRodriguez.pdf';

const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Experience', to: '/experience', current: false },
  { name: 'Skills', to: '/skills', current: false },
  { name: 'Projects', to: '/projects', current: false },
  { name: 'Contact', to: '/contact', current: false },
];

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="navbar c_marron_pastel fixed top-0 w-full z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden text-white" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow c_marron_pastel rounded-box w-52 ${isDropdownOpen ? '' : 'hidden'}`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={closeDropdown}
                  className="block px-3 py-2 text-base font-medium text-white hvr-underline-from-center"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>
          <img src={LogoCV3} alt="MR" width='44' height='44'/>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block px-3 mx-1 py-1 text-base font-medium text-white hvr-underline-from-center"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <button type="button" className="hvr-pulse-shrink hvr-radial-in rounded-lg px-3 py-2 text-base font-medium">
            <a
              href={pdf}
              download="CVMarioRodriguez.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      {/* Placeholder for Navbar Height */}
      <div className="h-16"></div>
    </>
  );
}
