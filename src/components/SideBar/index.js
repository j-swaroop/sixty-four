import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLaptopWindows } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import './index.css'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            {!isOpen ?
               (<>
                    <button onClick={() => setIsOpen(!isOpen)} className='hamburger-icon'>
                        <RxHamburgerMenu size={20}/>
                    </button>
                    <div className='nav-content'>
                        <IoSearch className='icon'/>
                        <MdOutlineLaptopWindows className='icon'/>
                        <FaRegCircleQuestion className='icon'/>
                        <FaRegCalendarAlt className='icon'/>
                        <HiOutlineBuildingOffice2 className='icon'/>
                        <HiCurrencyDollar className='icon'/>
                        <FaHeadphones className='icon'/>
                    </div>
                    <IoMdSettings className='icon-setting'/>
                </>)
                :
                (
                    <div className='nav-expand'>
                        <div className='nav-expand-item'>
                            <p className='nav-close'>Close</p>
                            <button onClick={() => setIsOpen(!isOpen)} className='hamburger-icon'>
                                <RxHamburgerMenu size={20}/>
                            </button>
                        </div>
                        <ul className='nav-expand-list'>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Search</p>
                                <IoSearch className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Laptop</p>
                                <MdOutlineLaptopWindows className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Questions</p>
                                <FaRegCircleQuestion className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Calender</p>
                                <FaRegCalendarAlt className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Office</p>
                                <HiOutlineBuildingOffice2 className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Money</p>
                                <HiCurrencyDollar className='icon'/>
                            </li>
                            <li className='nav-expand-item'>
                                <p className='nav-text'>Headphones</p>
                                <FaHeadphones className='icon'/>
                            </li>
                        </ul>
                        <div className='nav-expand-item'>
                            <p className='nav-setting'> Settings</p>
                            <IoMdSettings className='icon'/>    
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default SideBar