// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar1 = () => {
//     return (
//         <nav className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 flex items-center justify-between italic text-white px-8 py-5 fixed w-[100%] z-50'>
//             <p className='text-lg font-bold tracking-widest'>FARHAN TECHNICAL</p>
//             <div className='flex gap-x-8 font-bold'>
//                 <Link className='hover:underline hover:text-black' to="/">Home</Link>
//                 <Link className='hover:underline hover:text-black' to="/AboutUs">About Us</Link>
//                 <Link className='hover:underline hover:text-black' to="/ImageGallery">Image Gallery</Link>
//                 <Link className='hover:underline hover:text-black' to="/OurServices">Our Services</Link>
//                 <Link className='hover:underline hover:text-black' to="/OurTeam">Our Team</Link>
//                 <Link className='hover:underline hover:text-black' to="/ContactUs">Contact Us</Link>
//                 <Link className='hover:underline hover:text-black' to="/Details">Details</Link>
//             </div>
//         </nav>
//     )
// }

// export default Navbar1



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white px-6 py-4 fixed w-full z-50'>
            <div className='flex justify-between items-center'>
                <p className='text-lg font-bold tracking-widest italic'>FARHAN TECHNICAL</p>

                {/* Mobile Toggle Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white text-2xl'>
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Desktop Links */}
                <div className='hidden md:flex gap-x-6 font-bold'>
                    <Link className='hover:underline hover:text-black' to="/">Home</Link>
                    <Link className='hover:underline hover:text-black' to="/AboutUs">About Us</Link>
                    <Link className='hover:underline hover:text-black' to="/ImageGallery">Image Gallery</Link>
                    <Link className='hover:underline hover:text-black' to="/OurServices">Our Services</Link>
                    <Link className='hover:underline hover:text-black' to="/OurTeam">Our Team</Link>
                    <Link className='hover:underline hover:text-black' to="/ContactUs">Contact Us</Link>
                    <Link className='hover:underline hover:text-black' to="/Details">Details</Link>
                </div>
            </div>

            {/* Mobile Links */}
            {isOpen && (
                <div className='md:hidden mt-3 flex flex-col gap-y-4 font-bold'>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/">Home</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/AboutUs">About Us</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/ImageGallery">Image Gallery</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/OurServices">Our Services</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/OurTeam">Our Team</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/ContactUs">Contact Us</Link>
                    <Link onClick={toggleMenu} className='hover:underline hover:text-black' to="/Details">Details</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar1;
