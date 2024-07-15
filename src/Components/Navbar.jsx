import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav className="bg-gray-800 p-3 font-sans">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-semibold ml-7">Eklak</div>
                <ul className="flex space-x-4">
                <li><Link to="/home" className="text-gray-300 hover:text-zinc-500 text-lg mr-5">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-zinc-500 text-lg mr-5">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-zinc-500 text-lg mr-5">Contact</Link></li>
                <li><Link to="" className='m-1'></Link><i class="fa-brands fa-instagram fa-lg" style={{color: '#ffffff'}}></i></li>
                <li><Link to="" className='m-1'></Link><i class="fa-brands fa-linkedin fa-lg" style={{color: '#ffffff'}}></i></li>
                <li><Link to="" className='m-1'></Link><i class="fa-brands fa-x-twitter fa-lg" style={{color: '#ffffff'}}></i></li>
                <li><Link to="" className='m-1'></Link><i class="fa-brands fa-github fa-lg" style={{color: '#ffffff'}}></i></li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar