import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Search, Home } from '../helpers/svgs';

const Layout = (props) => {
  const address = useLocation();
  const imageSrc = 'https://lh3.googleusercontent.com/-7fMzrATHVVI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnMzrS3w3qv8PdhVoQL_JLZGinmPQ/photo.jpg?sz=100';
  const isActive = (route) => address.pathname === route;
  const scrollToTop = (e) => {
    if (address.pathname == '/') {
      e.preventDefault && e.preventDefault();
      // document.getElementsByClassName('header')[0].scrollIntoView({ behavior: 'smooth' });
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 20);
      }
    }
  };
  return (
    <>
      <div className='header'>
        <span></span>

        <div className='title'>
          {/* <h3>مینی تونز😍</h3> */}
          <h3>{props.header || 'مینی تونز'}</h3>
        </div>

        <div></div>
      </div>
      <div className='container'>{props.children}</div>
      <div className='footer-mobile'>
        <ul>
          <li className={`${isActive('/profile') ? 'active' : ''}`}>
            <Link to='/profile'>
              {/* <User /> */}
              <img className={`user-image-layout ${isActive('/profile') ? 'active' : ''} `} src={imageSrc} />
              <span>پروفایل</span>
            </Link>
          </li>
          <li className={`${isActive('/search') ? 'active' : ''}`}>
            <Link to='/search'>
              <Search />
              <span>جستجو</span>
            </Link>
          </li>
          <li className={`${isActive('/') ? 'active' : ''}`}>
            <Link to='/' onClick={scrollToTop}>
              <Home active={true} />
              <span>خانه</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Layout;
