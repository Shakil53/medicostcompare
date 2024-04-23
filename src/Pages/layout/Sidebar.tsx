import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside className='bg-teal-200 col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5'>
            <h1 className='text-xl font-medium'>Category of Medicine</h1>
            <nav className='flex flex-col gap-2'>
                <NavLink to="/aside/OTC-Medicine" className='p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-2'>OTC Medicine</NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;