import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/IMG_0621.JPG-removebg-preview.png"
import '../../App.css'


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-[0_2px_4px_-2px_rgba(0,0,0,0.15)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}

        <img src={logo} alt="logo" height={60} width={60} />
{/*           
        <h1 className="font-heading text-xl">
        </h1> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-[oklch(0.36_0.05_171.92)] font-semibold nav-right">
         <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/journalism">Journalism</Link></li>
          <li><Link to="/copywriting">Copywriting</Link></li>
          <li><Link to="/creative">Creative</Link></li>
          <li><Link to="/blogs">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         </ul>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pb-6 flex flex-col space-y-4 text-sm nav-right ">
          <ul>

          <li><Link className="pt-3" to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/journalism" onClick={() => setOpen(false)}>Journalism</Link></li>
          <li><Link to="/copywriting" onClick={() => setOpen(false)}>Copywriting</Link></li>
          <li><Link to="/creative" onClick={() => setOpen(false)}>Creative</Link></li>
          <li><Link to="/blogs" onClick={() => setOpen(false)}>Blog</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
