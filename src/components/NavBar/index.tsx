import './index.css';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

/**
 * NavBar component
 * @returns JSX for a navbar
 */
const NavBar = () => {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon className="menuIcon" />
        </IconButton>
        <Link to="/" className="appTitle">
          Product Application
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
