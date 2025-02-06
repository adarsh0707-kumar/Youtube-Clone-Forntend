
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../Dash/Dashboard.css';

const Dashboard = () => {

  const location = useLocation();

  return (
    <div
      className='Dashboard'>

      <div
        className="Dashboard__nav">

        <div
          className="Dashboard__nav__profile">
          <img
            className='Dashboard__nav__profile__img'
            src={localStorage.getItem('logoUrl')}
            alt='logo' />

          <h2>{localStorage.getItem('channelName')}</h2>

        </div>

        <div
          className="Dashboard__nav__menu">

          <Link
            to='/dashboard/home'
            className={location.pathname == '/dashboard/home' ? 'active__link' : 'Dashboard__nav__menu__link'}>
            Home
          </Link>

          <Link
            to='/dashboard/my-videos'
            className={location.pathname == '/dashboard/my-videos' ? 'active__link' : 'Dashboard__nav__menu__link'}>
            My Videos
          </Link>

          <Link
            to='/dashboard/upload'
            className={location.pathname == '/dashboard/upload' ? 'active__link' : 'Dashboard__nav__menu__link'}>
            Upload Videos
          </Link>

          <Link
            className="Dashboard__nav__menu__link">
            LogOut
          </Link>

        </div>

      </div>

      <div
        className="Dashboard__content">
        <Outlet />
      </div>

    </div>
  )
}

export default Dashboard;