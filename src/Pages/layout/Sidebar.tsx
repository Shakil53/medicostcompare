import React from 'react';
import { NavLink } from 'react-router-dom';
import drug1 from '../../assets/logo/drugs.webp';
import drug2 from '../../assets/logo/woman.webp';
import drug3 from '../../assets/logo/contraceptive.webp';
import drug4 from '../../assets/logo/Diabetics-Care.webp';
import drug5 from '../../assets/logo/baby-boy.webp';
import drug6 from '../../assets/logo/dental_care_1SkbT7S.webp';
import drug7 from '../../assets/logo/Personal-Care.webp';
import drug8 from '../../assets/logo/glucosemeter.webp';
import drug9 from '../../assets/logo/glucosemeter.webp';
import { FaAngleRight } from "react-icons/fa";


const Sidebar = () => {
    return (
        <aside className='bg-teal-200 col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5'>
            <h1 className='text-xl font-medium'>Category of Medicine</h1>
            <nav className='flex flex-col gap-2 mt-5'>
                <NavLink to="/aside/otc-medicine" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                <img className='w-6' src={drug1}></img>
                    <span className='truncate'>OTC Medicine</span>
                <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/women-choice" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug2}></img>
                   <span className='truncate'>Women's Choice</span>
                    <span className='text-sm shrink-0'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/sexual-wellness" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug3}></img>
                    <span className='truncate'>Sexual Wellness</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/diabetic-care" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug4}></img>
                   <span className='truncate'>Diabetic Care</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/baby-care" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug5}></img>
                    <span className='truncate'>Baby Care</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/dental-care" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug6}></img>
                    <span className='truncate'>Dental Care</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/devices" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug7}></img>
                    <span className='truncate'>Devices</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
                <NavLink to="/aside/prescription-medicine" className='p-3 bg-gray rounded-md hover:bg-teal-500 hover:text-white transition-all flex items-center gap-2'>
                    <img className='w-6' src={drug8}></img>
                    <span className='truncate'>Prescription Medicine</span>
                    <span className='shrink-0 text-sm'><FaAngleRight></FaAngleRight></span>
                </NavLink>
            </nav>
        </aside>
    );
};

export default Sidebar;