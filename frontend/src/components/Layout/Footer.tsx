import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-500 text-white mt-8">
      <div className="container mx-auto px-6 pt-6 pb-2">
        <div className="text-center text-white text-sm">
          <p>© {currentYear} Mi App de Vehículos. Todos los derechos reservados.</p>
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://twitter.com" className="mx-2">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.718 0-4.92 2.203-4.92 4.917 0 .385.045.762.126 1.124-4.092-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.869 3.213 2.188 4.096-.806-.026-1.566-.247-2.228-.616v.062c0 2.386 1.698 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.314 0-.62-.03-.916-.086.621 1.934 2.415 3.342 4.543 3.382-1.665 1.306-3.762 2.082-6.042 2.082-.393 0-.779-.023-1.158-.067 2.153 1.381 4.711 2.188 7.457 2.188 8.95 0 13.842-7.406 13.842-13.842 0-.21 0-.42-.015-.63.949-.687 1.774-1.548 2.428-2.526z"/></svg>
          </a>
          <a href="https://facebook.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.635c0-3.007 1.792-4.655 4.533-4.655 1.312 0 2.686 0.235 2.686 0.235v2.953h-1.512c-1.491 0-1.953 0.923-1.953 1.874v2.228h3.328l-0.532 3.469h-2.796v8.385c5.737-0.899 10.125-5.864 10.125-11.854z"/></svg>
        </a>
        <a href="https://instagram.com" className="mx-2" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm6.25 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/>
            </svg>
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;