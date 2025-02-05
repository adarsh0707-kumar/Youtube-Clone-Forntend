
import '../Dash/Dashboard.css';

const Dashboard = () => {
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

      </div>

      <div
        className="Dashboard__content">

      </div>

    </div>
  )
}

export default Dashboard;