import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/pic1.svg';
import './navbar.css';
import SuperSaverToggle from '../router/SuperSaverToggle'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsBagHeart } from "react-icons/bs";
import { CiCoffeeCup } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { GiPlasticDuck } from "react-icons/gi";
import { TbCherry } from "react-icons/tb";
import { FaHeadphonesAlt } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { GiLipstick } from "react-icons/gi";
import { BiSolidTShirt } from "react-icons/bi";
import Portal from '../router/Portal'

const NavBar = () => {
  let [toggle, setToggle] = useState(false)
  return (
    <nav className="navbar">
      <div className='sticky-header'>
        <div className="top-nav">
          <div><img src={logo} alt="Logo" className="logo" /></div>
          <div className='outer-circle'><div><SuperSaverToggle /></div></div>
          <div><span className="location">Select Location <IoIosArrowDown size={18} /></span></div>
          <div>
            
            <input type="text" placeholder='Search for ' className="search-input" /></div>
          <div className="nav-icons">
            <div className="icon-box">
              <FaRegUserCircle size={22} />
              <span>
                <span onClick={() => {setToggle(!toggle)}}>
                    Login
                </span>
                {toggle? <Portal /> : <></>}
              </span>
            </div>
            <div className="icon-box">
              <MdOutlineShoppingCart size={22} />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-nav">
        <ul>
          <NavLink to="/" end><li><BsBagHeart size={20} /> All</li></NavLink>
          <NavLink to="/cafe"><li><CiCoffeeCup size={20} /> Cafe</li></NavLink>
          <NavLink to="/home"><li><IoHomeOutline size={20} /> Home</li></NavLink>
          <NavLink to="/toys"><li><GiPlasticDuck size={20} /> Toys</li></NavLink>
          <NavLink to="/fresh"><li><TbCherry size={20} /> Fresh</li></NavLink>
          <NavLink to="/electronics"><li><FaHeadphonesAlt size={20} /> Electronics</li></NavLink>
          <NavLink to="/mobiles"><li><HiDevicePhoneMobile size={20} /> Mobiles</li></NavLink>
          <NavLink to="/beauty"><li><GiLipstick size={20} /> Beauty</li></NavLink>
          <NavLink to="/fashion"><li><BiSolidTShirt size={20} /> Fashion</li></NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;