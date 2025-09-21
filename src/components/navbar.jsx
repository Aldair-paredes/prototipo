import  { useState } from 'react';
import ranitalogo from '../assets/ranitalogo.png'
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
const Navbar = () => { 
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <nav className="bg-#50C878 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end items-center">
        <div className='flex grow items-center'>
          {/*Logo*/}
          <a href="#">
            <img src={ranitalogo} alt='logo' className='h-10 w-auto' />
          </a>
          </div>
           
          {/* Menú Desplegable */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)} 
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex space-x-8 ml-8">
                <Cog6ToothIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-2 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Bandeja de entrada
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Enviado
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Borradores 
                  </a>
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Contacto
            </a>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;