import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import LogoCV3 from '../../assets/LogoCV3Mejora2.png';
import pdf from '../../assets/files/CVMarioRodriguez.pdf'

const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Experience', to: '/experience', current: false },
  { name: 'Skills', to: '/skills', current: false },
  { name: 'Projects', to: '/projects', current: false },
  { name: 'Contact', to: '/contact', current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="c_marron_pastel">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white c3_hover focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="bg-blue-600 mx-auto xl:m-0">
                <Link to="/home">
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={LogoCV3}
                    alt="#"
                  />
                </Link>
              </div>
              <div className="hidden sm:m-auto sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="block rounded-md px-3 py-2 text-base font-medium text-white c3_hover"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <button type="button" className="botonS1 rounded-lg px-3 py-2 text-base font-medium">
                  <a
                    href={pdf}
                    download="CVMarioRodriguez.pdf"
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white c3_hover"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
