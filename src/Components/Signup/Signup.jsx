import '../Signup/Signup.css'
import logo from '../../assets/ytLogo.png'

const Signup = () => {
  return (
    <div
      className="Signup__wrapper">
      <div
        className="Signup__wrapper__form">
        <div
          className='Signup__wrapper__form__logo'>

          <img
            className='Signup__wrapper__form__logo__img'
            src={logo} alt='logo'
          />
          
          <h2
            className='Signup__wrapper__form__logo__heading'>
            Youtube Clone
          </h2>

        </div>

        <div
          className="Signup__wrapper__form__contant">

          <input type='text' placeholder='Channel Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='phone' placeholder='Phone' />
          <input type='file' />
          <div>
            <button
              className="Signup__wrapper__form__contant__btn"
              type='submit'>
              Submit
            </button>
          </div>
          

        </div>

      </div>

    </div>
  )
}

export default Signup;