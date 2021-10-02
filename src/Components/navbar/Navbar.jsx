import { ArrowDropDown, ExitToApp, Notifications, Search, Settings } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss';
import { d2y } from '../../assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src={d2y} alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>
                <Settings style={{ fontSize: 15, marginRight: 3 }} />
                Settings
              </span>
              <span>
                <ExitToApp style={{ fontSize: 15, marginRight: 3 }} />
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
