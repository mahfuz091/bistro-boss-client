import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contuct Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <Link>OurMenu</Link>
      </li>
      <li>
        <Link>OurShop</Link>
      </li>
      <li>
        <Link>Signout</Link>
      </li>
    </>
  );
  return (
    <div className='wrapper'>
      <div className='navbar fixed max-w-[1920px] z-10 pt-8 pb-6 px-14 nav-bg justify-between'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 uppercase rounded-box w-52'
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <h2 className='text-3xl font-extrabold font-cinzel  text-white '>
              BISTRO BOSS
            </h2>
            <p className='tracking-[.38rem] text-2xl font-bold text-white'>
              Restaurant
            </p>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal font-bold text-xl text-white font-inter uppercase px-1'>
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
