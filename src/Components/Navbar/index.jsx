import { ArrowDropDown, ExitToApp, Notifications, Search, Settings } from '@material-ui/icons';
import { useState } from 'react';
import './nav.scss';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScroll ? 'nav scroll' : 'nav'}>
      <div className="container">
        {/* Left Navbar */}
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix" />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New And Popular</span>
          <span>My List</span>
        </div>

        {/* Right Navbar */}
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img src="https://images.unsplash.com/photo-1632755116379-dfc07b3cf831?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="people" />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>
                <Settings className="ic" /> Settings
              </span>
              <span>
                <ExitToApp className="ic" /> Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
