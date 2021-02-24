
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Profile' activeClassName = {s.linkActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' activeClassName = {s.linkActive}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News' activeClassName = {s.linkActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' activeClassName = {s.linkActive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Settings' activeClassName = {s.linkActive}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
