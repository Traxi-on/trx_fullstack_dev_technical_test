import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
              <path d="M21 21H3V3h18v18z"></path>
            </svg>
            <span className="ml-3 text-xl">Mi App de Vehículos</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <a className="mr-5 hover:text-blue-200">Sobre Nosotros</a>
          </Link>
          <Link href="/vehicles">
            <a className="mr-5 hover:text-blue-200">Vehículos</a>
          </Link>
          {/* Más enlaces de navegación según sea necesario */}
        </nav>
        <Link href="/add-vehicle">
          <a className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">Agregar Vehículo
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
