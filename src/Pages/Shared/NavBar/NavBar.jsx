import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../../assets/logo/logo1.svg';

const NavBar = () => {

    const navOptions = <>


      
            <li className='text-lg font-semibold lg:text-[#ebefe9] text-black '><Link to='/'>Home</Link></li>
            <li className='text-lg font-semibold lg:text-[#ebefe9] text-black lg:ml-3 '><Link to='/comparePrice'>Compare Price</Link></li>
       

    </>

    return (
        <div className="navbar bg-gradient-to-r from-teal-400 teal-350 to-teal-200">
            <div className="navbar-start ml-4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                {/* <Link to='/' className="btn btn-outline bg-teal-400 text-white hover:to-teal-400 normal-case text-xl">MediCostCom.</Link> */}
                <motion.div initial={{ x: -150 }} animate={{ x: 0, y: -3, scale: 1.2 }} transition={{ duration: .5, type: 'spring', stiffness: 70 }} className="flex flex-shrink-0 items-center">
                   <NavLink to='/'> <img
                        className="w-12 sm:ml-4 md:ml-4"
                        src={logo}
                        alt="medicostcompare"
                    /></NavLink>
                </motion.div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navOptions
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {/*  TODO input field */}
                <div className="content-end mr-5">
                    <div className="form-control">
                        <input type="text" placeholder="Search by brand or generic" className="input input-bordered w-36 md:w-auto" />
                    </div>
                </div>
                <div className="text-teal-800 divider lg:divider-horizontal"></div>
                <Link className="btn mr-4">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;