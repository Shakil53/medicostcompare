import React from 'react';
import { Link } from 'react-router-dom';
import drug1 from '../../../assets/logo/baby-boy.webp';
import drug2 from '../../../assets/logo/contraceptive.webp';
import drug3 from '../../../assets/logo/dental_care_1SkbT7S.webp';
import drug4 from '../../../assets/logo/drugs.webp';
import drug5 from '../../../assets/logo/glucosemeter.webp';
import drug6 from '../../../assets/logo/medical-prescription.webp';
import drug7 from '../../../assets/logo/Personal-Care.webp';
import drug8 from '../../../assets/logo/woman.webp';
import drug9 from '../../../assets/logo/Diabetics-Care.webp';




const AsideNav = () => {
    return (
        <div className="drawer drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link ><img className='w-6 ' src={drug4}></img> <span className='font-semibold'>OTC Medicine</span></Link></li>

                    <li><Link><img className='w-6' src={drug8}></img> <span className='font-semibold'>Women's Choice</span></Link></li>

                    <li><Link><img className='w-6' src={drug2}></img> <span className='font-semibold'>Sexual Wellness</span></Link></li>

                    <li><Link><img className='w-6' src={drug9}></img> <span className='font-semibold'>Diabetic Care</span></Link></li>

                    <li><Link><img className='w-6' src={drug1}></img> <span className='font-semibold'>Baby Care</span></Link></li>

                    <li><Link><img className='w-6' src={drug3}></img> <span className='font-semibold'>Dental Care</span></Link></li>

                    <li><Link><img className='w-6' src={drug7}></img> <span className='font-semibold'>Personal Care</span></Link></li>

                    <li><Link><img className='w-6' src={drug5}></img> <span className='font-semibold'>Devices</span></Link></li>

                    <li><Link><img className='w-6' src={drug7}></img> <span className='font-semibold'>Prescription Medicine</span></Link></li>

                    <li><Link><img className='w-6' src={drug6}></img> <span className='font-semibold'>Medical Prescription</span></Link></li>

                </ul>

            </div>
        </div>
    );
};

export default AsideNav;