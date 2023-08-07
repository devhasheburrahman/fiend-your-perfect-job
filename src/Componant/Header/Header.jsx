import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => {


    return (
        <nav className= 'mx-4 rounded mt-2 bg-red-50 md:flex justify-between px-10 md:items-center sm:text-lg   md:text-[32px]'>
            < NavLink to="/"
                className={({ isActive }) => isActive ? 'text-blue-600' : ''}
            >

                Find Your Perfect Job
            </ NavLink>
            < NavLink to="/Statistics" className={({ isActive }) => isActive ? 'text-blue-600' : ''}



            ><span className='text-[16px]'>Statistics</span></ NavLink>
            < NavLink to="/jobs" className={({ isActive }) => isActive ? 'text-blue-600' : ''} > <span className='text-[16px]'>Applied Jobs</span> </ NavLink>

            < NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-blue-600' : ''} > <span className='text-[16px]'>Blogs</span></ NavLink>

            <NavLink to="/">
                <button className='p-2 text-[16px] text-w text-white bg-blue-500 rounded-lg'>Star Applying</button>

            </NavLink>
        </nav>
    );
};

export default Header;