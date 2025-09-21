import ranitalogo from '../assets/ranitalogo.png'
const Navbar = () => {
  return (
    <nav className="bg-#50C878 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/*Logo*/}
          <a href="#">
            <img src={ranitalogo} alt='logo' className='h-10 w-auto' />
          </a>
          

          {/* Menú de navegación */}
          <div className="flex space-x-8">
            <a href="#" className="text-white hover:text-white transition duration-300">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-white transition duration-300">
              Acerca de
            </a>
            <a href="#" className="text-white hover:text-white transition duration-300">
              Servicios
            </a>
            <a href="#" className="text-white hover:text-white transition duration-300">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;