import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/IMG_0621,JPG.png"
import '../../App.css'
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const Logout=()=>{
    localStorage.removeItem("token")
    navigate('/')

  }

  return (
    <nav className="shadow-[0_2px_4px_-2px_rgba(0,0,0,0.15)]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo / Name */}

        <Link to={'/'}>
        <img src={logo} alt="logo" height={60} width={60} />
        </Link>
{/*           
        <h1 className="font-heading text-xl">
        </h1> */}

        {/* Desktop Menu */}
        {/* <div className="hidden md:flex space-x-6 text-sm text-[oklch(0.36_0.05_171.92)] font-semibold nav-right">
         <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/journalism">Journalism</Link></li>
          <li><Link to="/copywriting">Copywriting</Link></li>
          <li><Link to="/creative">Creative</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/books">Mybook</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         </ul>
        </div> */}

        <button className="py-2 px-8 cursor-pointer bg-red-600 rounded-[10px] text-white" onClick={Logout}>logout</button>

        {/* Hamburger */}
     
      </div>

      {/* Mobile Menu */}
    
    </nav>
  );
};

export default Navbar;
